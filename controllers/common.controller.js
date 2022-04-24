const otpGenerator = require('otp-generator');
const Busboy = require('busboy');

const asyncHandler = require('express-async-handler');
const { uploadFile } = require('../utils/s3');
const classGroupsJson = require('../constants/classGroups.json');
const {
  classGroups,
  fileUpload,
  profileSkills,
  download,
  filePic,
  schoolsDao,
  globalSetting,
} = require('../database/DAO/common');
const generateToken = require('../utils/token.generator');
const { challenges } = require('../database/DAO/challenges');

//route = /class-group
//method GET
//to get all the class groups
module.exports.classGroup = asyncHandler(async (req, res) => {
  try {
    // const date = new Date();
    // const hour = date.getHours();
    // if (hour == 11) {
    //   fs.unlinkSync('./debug.log');
    // }
    let classGroupJ = classGroupsJson;
    // let classGroup = await classGroups.classGroup();
    // for (let i = 0; i < classGroup.length; i++) {
    //   classGroup[i].dataValues.desktopNoOfColumns = 4;
    //   classGroup[i].dataValues.mobileNoOfColumns = 2;
    // }

    if (classGroupJ) {
      res.status(200).json(classGroupJ);
    } else {
      res.status(404).send('no data found');
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//route = v2/class-group
//method GET
//to get all the class groups
module.exports.v2classGroup = asyncHandler(async (req, res) => {
  try {
    let classGroup = await classGroups.classGroup();
    for (let i = 0; i < classGroup.length; i++) {
      classGroup[i].dataValues.class_group_name_mobile =
        classGroup[i].dataValues.class_group_name;
      classGroup[i].dataValues.desktopNoOfColumns = 4;
      classGroup[i].dataValues.mobileNoOfColumns = 3;
      classGroup[i].dataValues.fontSize = 14;
    }

    if (classGroup) {
      res.status(200).json(classGroup);
    } else {
      res.status(404).send('no data found');
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//route = /username
//method GET
//to check if a username is present or not
module.exports.username = asyncHandler(async (req, res) => {
  try {
    const checkUserName = await classGroups.username(req.query.username);
    if (checkUserName) {
      res.status(200).json({ present: true });
    } else {
      res.status(200).json({ present: false });
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});

//route = /file-upload
//method POST
//to upload a file
module.exports.fileUpload = (req, res) => {
  const chunks = [];
  const unique = otpGenerator.generate(6, {
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });
  const fname = `${req.user.id}${req.query.type}${unique}`;
  const busboy = new Busboy({ headers: req.headers });
  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    // eslint-disable-next-line no-unused-vars
    const ftype = mimetype;
    // eslint-disable-next-line no-unused-vars
    const fEncoding = encoding;
    file.on('data', (data) => {
      chunks.push(data);
    });
    file.on('end', () => {});
  });

  busboy.on('finish', async () => {
    const u = Buffer.concat(chunks);
    const image = await uploadFile(u, fname, req.user.id);
    const uploadedFile = await fileUpload.upload(
      req,
      image.key,
      image.Location
    );
    const url = await filePic.pic(uploadedFile.dataValues.id);
    res.status(200).json({
      id: uploadedFile.dataValues.id,
      url: url.storage_service,
      key: image.key,
      location: image.location,
    });
    // res.writeHead(200, { 'Connection': 'close' });
    // res.end("That's all folks!");
  });
  return req.pipe(busboy);
};

//route = /skills
//method GET
//to get all the skills
module.exports.skills = asyncHandler(async (req, res) => {
  try {
    const skill = await profileSkills.skill();
    if (skill) {
      res.status(200).json(skill);
    } else {
      res.status(404).json({ 'not found': 'true' });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
//route = /schools
//method GET
//to get all the schools
module.exports.schools = asyncHandler(async (req, res) => {
  try {
    const school = await schoolsDao.schoolDao(req);
    if (school[0].length > 0) {
      res.status(200).json(school[0]);
    } else {
      const allSchool = await schoolsDao.allSchoolDao();
      if (allSchool) {
        res.status(200).json(allSchool[0]);
      }
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});

//route = /cities
//method GET
//to get all the schools
module.exports.cities = asyncHandler(async (req, res) => {
  try {
    const result = await schoolsDao.cities();
    if (result) {
      res.status(200).json(result[0]);
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});

//route = /file/:id
//method GET
//to get the desired file
module.exports.fileDownload = asyncHandler(async (req, res) => {
  try {
    const fileUploadId = await download.uploadData(req);
    res.status(200);
    res.json(fileUploadId.storage_service);
    // const downloadFile = await downloadfile(
    //   fileUploadId.dataValues.path
    // ).createReadStream();
    // res.status(200);
    // downloadFile.pipe(res);
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});
//route = /refresh-token
//method GEt
//takes refresh token and generates new token
module.exports.refreshToken = asyncHandler(async (req, res) => {
  try {
    const tokenId = `${req.user.id}&${req.otp}`;
    const token = generateToken(tokenId);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400);
    throw new Error();
  }
});
//route = /count-booking
//method GEt
//to get all the challenges alreday booked
module.exports.checkBooking = asyncHandler(async (req, res) => {
  try {
    const checkIfFirstBooking = await challenges.check(req.user.id);
    res.status(200).json(checkIfFirstBooking);
  } catch (error) {
    res.status(400);
    throw new Error();
  }
});
//route = /global-settings
//method GEt
//to get all the challenges alreday booked
module.exports.globalSettings = asyncHandler(async (req, res) => {
  try {
    let response = { id: 1 };
    const settings = await globalSetting.data();
    settings.forEach((element) => {
      response[element.option_name] = element.value;
    });
    response.game_link_available_time = Number(
      response.game_link_available_time
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400);
    throw new Error();
  }
});
//route = /global-config
//method GEt
//to get all the challenges alreday booked
module.exports.globalConfig = asyncHandler(async (req, res) => {
  try {
    let maxClass = 0;
    let minclass = 1;
    let classGroup = await classGroups.classGroup();
    for (let i = 0; i < classGroup.length; i++) {
      if (classGroup[i].dataValues.max_class > maxClass) {
        maxClass = classGroup[i].dataValues.max_class;
      }
      if (classGroup[i].dataValues.min_class < minclass) {
        minclass = classGroup[i].dataValues.min_class;
      }
    }
    res.status(200).json({
      maxClass,
      minclass,
    });
  } catch (error) {
    res.status(400);
    throw new Error();
  }
});

module.exports.forceUpdate = asyncHandler(async (req, res) => {
  const UnstableVersions = [0];
  if (req.query.platform == process.env.APP_PLATFORM) {
    const checkIfUnstable = UnstableVersions.includes(
      Number(req.query.version)
    );
    if (checkIfUnstable == true) {
      res.status(200).json({
        condition: true,
      });
    } else {
      res.status(200).json({
        condition: false,
      });
    }
  } else {
    res.status(200).json({
      condition: false,
    });
  }
});
