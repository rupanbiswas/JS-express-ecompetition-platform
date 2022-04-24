/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const asyncHandler = require('express-async-handler');
const { filePic } = require('../database/DAO/common');
const {
  postUserDetails,
  getProfileDetails,
  postProfileDetails,
} = require('../database/DAO/user-profile-info');
const { otpVerification } = require('../database/DAO/user.auth');
const class_groups = require('../database/models/class_groups');

//to post user info
//route =/user/details
//method post
module.exports.postUserDetails = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  try {
    const customerProfileUpdate = await postUserDetails.customerProfileUpdate(
      req,
      firstName,
      lastName,
      email
    );
    if (customerProfileUpdate) {
      const customer = await otpVerification.customer(req.user.dataValues.id);
      res.status(201).json(customer);
    } else {
      res.status(400).json({ failed: true });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//to get user info
//route =/user/details
//method GET
module.exports.userdetails = asyncHandler(async (req, res) => {
  const customerDetails = await otpVerification.customer(
    req.user.dataValues.id
  );
  try {
    if (customerDetails.f_name == null) {
      res.status(200).json({ details: null });
    } else if (customerDetails.f_name != null) {
      res.status(200).json(customerDetails);
    } else {
      res.status(404).json({ user: 'invalid' });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//to post profile info
//route =/user/profile/details
//method POST
module.exports.postProfileDetails = asyncHandler(async (req, res) => {
  let schoolId;
  let profile;
  try {
    let classGroupId = 0;
    if (req.body.class_id > 8) {
      classGroupId = 8;
    } else {
      classGroupId = await postUserDetails.classGroup(req.body.class_id);
    }
    const schools = await postProfileDetails.school(req);
    if (schools) {
      profile = await postProfileDetails.profile(
        req.user.dataValues.id,
        req,
        schools.id,
        classGroupId
      );
    } else {
      await postProfileDetails.createSchool(req);
      const school = await postProfileDetails.school(req);
      schoolId = school.dataValues.id;
      profile = await postProfileDetails.profile(
        req.user.dataValues.id,
        req,
        schoolId,
        classGroupId
      );
    }
    await postProfileDetails.nickname(req, profile.id);
    const url = await filePic.pic(profile.profile_pic);
    if (profile) {
      res.status(201).json({ profile, url: url.storage_service });
    } else {
      res.status(400).json({ profile_created: false });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//to get profile info
//route =/user/profile/details
//method GET
module.exports.getProfiles = asyncHandler(async (req, res) => {
  const GETProfile = await getProfileDetails.activeProfiles(req.user.id);

  try {
    if (GETProfile) {
      for (let i = 0; i < GETProfile.length; i++) {
        const url = await filePic.pic(GETProfile[i].dataValues.profile_pic);
        const classID = GETProfile[i].dataValues.class_group_id;
        const groupName = await class_groups.findOne({
          where: { id: classID },
        });
        GETProfile[i].dataValues.url = url;
        GETProfile[i].dataValues.class_group_name = groupName.class_group_name;
      }
      res.status(200).json(GETProfile);
    } else {
      res.status(404).json({ err: 'no data found' });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//to update profile info
//route =/user/profile/details
//method PUT
module.exports.updateProfile = asyncHandler(async (req, res) => {
  let schoolId = req.body.school_id;
  let profile;
  try {
    let classGroupId = 0;
    if (req.body.class_id > 8) {
      classGroupId = 8;
    } else {
      classGroupId = await postUserDetails.classGroup(req.body.class_id);
    }
    classGroupId = await postUserDetails.classGroup(req.body.class_id);
    const schools = await postProfileDetails.school(req);
    if (schools) {
      profile = await postProfileDetails.updateProfile(
        req,
        schools.id,
        classGroupId
      );
    } else {
      await postProfileDetails.createSchool(req);
      const school = await postProfileDetails.school(req);
      schoolId = school.dataValues.id;
      profile = await postProfileDetails.updateProfile(
        req,
        schoolId,
        classGroupId
      );
    }
    if (profile) {
      const profiles = await getProfileDetails.activeProfiles(req.user.id);
      res.status(201).json(profiles);
    } else {
      res.status(400).json({ err: 'could not update' });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//to delete a profile
//route = /profile/details/44
//method delete/
module.exports.deleteProfile = asyncHandler(async (req, res) => {
  try {
    await postProfileDetails.deleteAprofile(req).then(async (num) => {
      if (num === 1) {
        const profiles = await getProfileDetails.activeProfiles(req.user.id);
        res.status(201).json(profiles);
      } else {
        res.status(400).send('profile not deleted');
      }
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
