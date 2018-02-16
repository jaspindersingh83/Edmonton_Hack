const {S3config,awsRegion} = require('../../config')
const AWS = require('aws-sdk');
const moment = require('moment'); 
const async= require('async');
const Busboy = require('busboy');
const Item = require('../models/ItemModel');
const Genre = require('../models/GenreModel');
let signedUrls = {};

// Helper funtion to clean name of the file
const formatFilename = (filename, type, genre,title) =>{
  //type is in format vide/mp4
  const typeOfFile = (type.split('/'))[0]
  const dateStr = moment().format('YYYYMMDD');
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const newFilename = `${genre}/${title}/${typeOfFile}/${dateStr}-${cleanFileName}`;
  return newFilename.substring(0, 160);
}
///helper function to upload image,Thumbnail and VideoUrl to S3
const uploadToS3 = (file,urlType,genre,title) => {
  let s3bucket = new AWS.S3(S3config);
  let filetype = file.mimetype
  let cleanName = formatFilename(file.name, filetype, genre,title)
  s3bucket.createBucket(function () {
      var params = {
        Bucket: `${S3config.Bucket}`,
        Key: cleanName,
        Body: file.data,
        ACL: 'public-read',
        ContentType: `${filetype}`
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          return res.status(503).json({message:`Error uploading ${urlType}`})
        } else{
          //Signed url is in data.Location
          signedUrls[urlType] = data.Location;
        }
      });
  });
}

const ItemS3upload =  async(req,res,next) => {
  let {genre, title} = req.body
  //Busboy is multiform HTTP parsing
  const busboy = new Busboy({ headers: req.headers });
  busboy.on('finish', async() => {
    console.log('S3 Upload triggered2')
    const files = Object.values(req.files)
    const urlTypes = Object.keys(req.files)
    //Below trials didn't work
    // await Promise.all(files.map(item => uploadToS3(item)));
    // await Promise.all(files.map(async item => await uploadToS3(item)));
    // req.signedUrls = signedUrls;
    // next();
    
    //We want genre and title to create the file hierarchy in S3
    files.map((item,index) => uploadToS3(item,urlTypes[index],genre, title ))
    setTimeout(() => {
      req.signedUrls = signedUrls;
      next();
    }, 5000);
  });
  req.pipe(busboy);
}

const createItem = async (req,res) => {
  const 
  {
    title,
    genre,
    maleLead,
    femaleLead,
    comedian,
    director,
    description,
  } = req.body
  const {thumbnail, coverImage, video} = req.signedUrls;
  
  try{
    let genreReq = await Genre.findOne({genre})
    let genreId = genreReq._id
    let item = await Item.create({
      title, 
      maleLead,
      femaleLead, 
      comedian, 
      director, 
      description, 
      genre: genreId,
      thumbnailUrl: thumbnail,
      coverImageUrl: coverImage,
      videoUrl: video
    })
   await Genre.findOneAndUpdate(
     {_id:genreId},
     { $push: { carouselitems: item } },
   )
    res.status(200).json({success:true})
  } catch(error) {
    res.status(422).json({message: error})
  }
}


module.exports = {
  ItemS3upload,
  createItem
}


