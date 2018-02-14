///helper function to upload image,Thumbnail and VideoUrl to S3
const uploadToS3 = (file) => {
  const filetype = file.mimetype
  let s3bucket = new AWS.S3(S3config);
  s3bucket.createBucket(function () {
      var params = {
        Bucket: `${S3config.Bucket}`,
        Key: file.name,
        Body: file.data,
        ACL: 'public-read',
        ContentType: 'image/jpeg'
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          console.log('error in callback');
          console.log(err);
        }
        console.log('success');
        console.log(data);
      });
  });
}

const ItemS3upload = async (req,res,next) => {
  const coverImageFile = req.body.coverImageFile;
  const thumbnailFile = req.body.thumbnailFile;
  const videoFile = req.body.videoFile;
  try {
    let coverImageFilerequest = await uploadToS3(coverImageFile);
    let thumbnailfilerequest = await uploadToS3(thumbnailfile);
    let videoFilerequest = await uploadToS3(videoFile);
    next();
  } catch (error){
    res.status(503).json({message:'Upload to S3 failed'})
  }
}

const cerateItem = (req,res,next) => {

}


module.exports = {
  ItemS3upload,
  cerateItem
}


