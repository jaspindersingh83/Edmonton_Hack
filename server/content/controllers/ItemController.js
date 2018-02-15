const {S3config,awsRegion} = require('../../config')
const AWS = require('aws-sdk');
const async= require('async')
const Busboy = require('busboy')
let signedUrls = [];
///helper function to upload image,Thumbnail and VideoUrl to S3
const uploadToS3 = (file, urlType) => {
  const filetype = file.mimetype
  let s3bucket = new AWS.S3(S3config);
  s3bucket.createBucket(function () {
      var params = {
        Bucket: `${S3config.Bucket}`,
        Key: file.name,
        Body: file.data,
        ACL: 'public-read',
        ContentType: `${filetype}`
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          return res.status(503).json({message:`Error uploading ${urlType}`})
        } else{
          // signedUrls[urlType] = data.Location
          signedUrls.push(data.Location);
        }
        console.log(signedUrls)
      });
  });
}

const ItemS3upload =  async(req,res,next) => {
  //Busboy is multiform HTTP parsing
  const busboy = new Busboy({ headers: req.headers });
  busboy.on('finish', async() => {
    const files = Object.values(req.files)

    //Below trials didn't work
    // await Promise.all(files.map(item => uploadToS3(item)));
    // await Promise.all(files.map(async item => await uploadToS3(item)));

    // req.signedUrls = signedUrls;
    // next();
    files.map(item => uploadToS3(item))
    setTimeout(() => {
      req.signedUrls = signedUrls;
      next();
    }, 5000);
  });
  req.pipe(busboy);
}

const createItem = (req,res,next) => {
  console.log('I am triggered')
  console.log(req.signedUrls)
}


module.exports = {
  ItemS3upload,
  createItem
}


