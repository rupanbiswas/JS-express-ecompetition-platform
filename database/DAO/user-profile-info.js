const class_groups = require('../models/class_groups');
const { Op } = require('sequelize');
const customers = require('../models/customers');
const profiles = require('../models/profiles');
const schools = require('../models/schools');

module.exports.postUserDetails = {
  //to find a classGroup
  classGroup: async (class_id) => {
    const result = await class_groups.findOne({
      where: {
        [Op.or]: [
          {
            min_class: class_id,
          },
          {
            max_class: class_id,
          },
        ],
      },
    });
    return result;
  },
  // to  update customer info
  customerProfileUpdate: async (req, firstName, lastName, email) => {
    const result = await customers.update(
      {
        f_name: firstName,
        l_name: lastName,
        email,
      },
      { where: { id: req.user.dataValues.id } }
    );
    return result;
  },
};

module.exports.getProfileDetails = {
  //to get all the active profiles
  activeProfiles: async (req) => {
    const result = await profiles.findAll({
      where: { customer_id: req, status: 1 },
    });
    return result;
  },
};
module.exports.postProfileDetails = {
  //to create school
  createSchool: async (req) => {
    const result = await schools.create({
      school_name: req.body.school_name,
      city: req.body.school_city,
      country: req.body.country,
      status: 'pending',
    });
    return result;
  },
  //to provide a nickname to a profile
  nickname: async (req, id) => {
    let afterFirstNameSplit = req.body.first_name.split(' ');
    let afterLastNameSplit = req.body.last_name.split(' ');
    let result;
    if (afterFirstNameSplit[0].length < 3 || req.body.first_name.length < 3) {
      if (afterLastNameSplit.length > 1) {
        result = await profiles.update(
          {
            nickname: afterLastNameSplit[0] + id,
          },
          { where: { id } }
        );
      } else {
        result = await profiles.update(
          {
            nickname: req.body.last_name + id,
          },
          { where: { id } }
        );
      }

      return result;
    } else {
      const result = await profiles.update(
        {
          nickname: afterFirstNameSplit[0] + id,
        },
        { where: { id } }
      );
      return result;
    }
  },
  //to find a school
  school: async (req) => {
    const result = await schools.findOne({
      where: [
        { school_name: req.body.school_name },
        { city: req.body.school_city },
      ],
    });
    return result;
  },

  //to create profile
  profile: async (customerId, req, schoolId, classGroupId) => {
    const result = await profiles.create({
      customer_id: customerId,
      profile_pic: req.body.profile_pic_id,
      full_name: req.body.student_name,
      f_name: req.body.first_name,
      l_name: req.body.last_name,
      class_group_id: classGroupId.id,
      class: req.body.class_id,
      date_of_birth: req.body.dob,
      gender: req.body.gender,
      school_name: req.body.school_name,
      school_city: req.body.school_city,
      school_id: schoolId,
      city: req.body.city,
      country: req.body.country,
      school_id_pic: req.body.school_card_id,
    });
    return result;
  },
  //to update profile
  updateProfile: async (req, schoolId, classGroupId) => {
    const result = await profiles.update(
      {
        customer_id: req.user.dataValues.id,
        profile_pic: req.body.profile_pic_id,
        full_name: req.body.student_name,
        f_name: req.body.first_name,
        l_name: req.body.last_name,
        class_group_id: classGroupId.id,
        class: req.body.class_id,
        date_of_birth: req.body.dob,
        gender: req.body.gender,
        school_name: req.body.school_name,
        school_city: req.body.school_city,
        school_id: schoolId,
        city: req.body.city,
        country: req.body.country,
        school_id_pic: req.body.school_card_id,
      },
      { where: { id: req.params.id } }
    );
    return result;
  },

  //to delete a profile
  deleteAprofile: async (req) => {
    const result = await profiles.update(
      { status: false },
      { where: { id: req.params.id } }
    );
    return result;
  },
};
