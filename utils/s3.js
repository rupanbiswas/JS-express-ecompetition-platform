const AWS = require('aws-sdk');

// const fs = require('fs');

const {
  // eslint-disable-next-line camelcase
  bucket_name,

  secretAccessId,

  secretAccessKey,
} = require('../enviroment');

// const bucketName = process.env.AWS_BUCKET_NAME;

// const region = process.env.AWS_REGION;

// const accessKeyId = process.env.AWS_ACCESS_KEY;

// const securityAccessKey = process.env.AWS_SECURITY_KEY;

// console.log(region, accessKeyId, securityAccessKey)

//gbshdfs

AWS.config.update({
  accessKeyId: secretAccessId,

  secretAccessKey,
});

const s3 = new AWS.S3();

// const s3 = new AWS.S3({

// region : "us-east-2",

// accessKeyId : "AKIA2OHW2XM75D64YCRP",

// securityAccessKey: "N3bLD3ACJq8Iw3x7wfmp1bi00gG2yPDrjdyYFqxE"

// })

// console.log(s3.region, s3.accessKeyId, s3.securityAccessKey)

function uploadFile(file, filename, id) {
  // const fileStream = fs.createReadStream(file.path)

  // console.log();

  const uploadParams = {
    Bucket: bucket_name,
    Body: file,
    Key: `${id}/${filename}`,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
    ACL: 'public-read',
  };

  return s3.upload(uploadParams).promise();
}
function downloadfile(fileKey) {
  const downloadParams = { Key: fileKey, Bucket: bucket_name };
  return s3.getObject(downloadParams);
  // .createReadStream();
}

module.exports = { uploadFile, downloadfile };
