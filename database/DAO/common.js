const sequelize = require('../../commons/dbconnection');
const classGroups = require('../models/class_groups');
// const customers = require('../models/customers');
const fileUploads = require('../models/file_upload');
const profiles = require('../models/profiles');
const skills = require('../models/skills');
const getGlobalSettings = require('../models/global_settings');

module.exports.classGroups = {
  //to get all the class group
  classGroup: async () => {
    const result = await classGroups.findAll({});
    return result;
  },
  // to check if a username is present or not
  username: async (req) => {
    const result = await profiles.findOne({
      where: { full_name: req },
    });
    return result;
  },
};
module.exports.fileUpload = {
  //to store file information in db
  upload: async (req, path, storageService) => {
    const result = await fileUploads.create({
      type: req.query.type,
      path,
      storage_service: storageService,
    });
    return result;
  },
};
module.exports.download = {
  //to get data of the uploaded file
  uploadData: async (req) => {
    const result = await fileUploads.findOne({
      where: { id: req.params.id },
    });
    return result;
  },
};

module.exports.profileSkills = {
  //to get all the skills
  skill: async () => {
    const result = await skills.findAll({});
    return result;
  },
};
// to get all the schools
module.exports.schoolsDao = {
  schoolDao: async (req) => {
    const result = await sequelize.query(
      `select school_name,city from schools where city = "${req.query.city}" and status = "verified" GROUP BY school_name`
    );
    return result;
  },
  allSchoolDao: async () => {
    const result = await sequelize.query(
      `select school_name,city from schools where status = "verified"`
    );
    return result;
  },
  cities: async () => {
    const result = await sequelize.query(`select distinct * from cities`);
    return result;
  },
};
//to get the url of the pic
module.exports.filePic = {
  pic: async (picid) => {
    const result = await fileUploads.findOne({
      where: { id: picid },
    });
    return result;
  },
};
module.exports.globalSetting = {
  data: async () => {
    const result = await getGlobalSettings.findAll();
    return result;
  },
};
