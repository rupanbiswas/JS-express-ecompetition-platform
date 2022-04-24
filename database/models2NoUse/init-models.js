var DataTypes = require("sequelize").DataTypes;
var _booking_line_items = require("./booking_line_items");
var _booking_reports = require("./booking_reports");
var _bookings = require("./bookings");
var _bookings_report = require("./bookings_report");
var _challenge_round_documents = require("./challenge_round_documents");
var _challenges = require("./challenges");
var _cities = require("./cities");
var _citiesnouse = require("./citiesnouse");
var _class_groups = require("./class_groups");
var _country_codes = require("./country_codes");
var _customer_segments = require("./customer_segments");
var _customers = require("./customers");
var _discount_codes = require("./discount_codes");
var _email_templates = require("./email_templates");
var _failed_jobs = require("./failed_jobs");
var _file_upload = require("./file_upload");
var _jobs = require("./jobs");
var _levels = require("./levels");
var _migrations = require("./migrations");
var _notification_loggers = require("./notification_loggers");
var _notification_templates = require("./notification_templates");
var _panels = require("./panels");
var _password_resets = require("./password_resets");
var _profile_skill_status = require("./profile_skill_status");
var _profiles = require("./profiles");
var _results = require("./results");
var _rewards = require("./rewards");
var _roles = require("./roles");
var _rounds = require("./rounds");
var _school_segments = require("./school_segments");
var _schools = require("./schools");
var _segments = require("./segments");
var _skills = require("./skills");
var _slot_round_participant = require("./slot_round_participant");
var _slots = require("./slots");
var _themes = require("./themes");
var _tokens = require("./tokens");
var _user_global_settings = require("./user_global_settings");
var _user_levels = require("./user_levels");
var _user_skill_history = require("./user_skill_history");
var _users = require("./users");
var _webhook_calls = require("./webhook_calls");
var _zoom_accounts = require("./zoom_accounts");

function initModels(sequelize) {
  var booking_line_items = _booking_line_items(sequelize, DataTypes);
  var booking_reports = _booking_reports(sequelize, DataTypes);
  var bookings = _bookings(sequelize, DataTypes);
  var bookings_report = _bookings_report(sequelize, DataTypes);
  var challenge_round_documents = _challenge_round_documents(sequelize, DataTypes);
  var challenges = _challenges(sequelize, DataTypes);
  var cities = _cities(sequelize, DataTypes);
  var citiesnouse = _citiesnouse(sequelize, DataTypes);
  var class_groups = _class_groups(sequelize, DataTypes);
  var country_codes = _country_codes(sequelize, DataTypes);
  var customer_segments = _customer_segments(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var discount_codes = _discount_codes(sequelize, DataTypes);
  var email_templates = _email_templates(sequelize, DataTypes);
  var failed_jobs = _failed_jobs(sequelize, DataTypes);
  var file_upload = _file_upload(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var levels = _levels(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var notification_loggers = _notification_loggers(sequelize, DataTypes);
  var notification_templates = _notification_templates(sequelize, DataTypes);
  var panels = _panels(sequelize, DataTypes);
  var password_resets = _password_resets(sequelize, DataTypes);
  var profile_skill_status = _profile_skill_status(sequelize, DataTypes);
  var profiles = _profiles(sequelize, DataTypes);
  var results = _results(sequelize, DataTypes);
  var rewards = _rewards(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var rounds = _rounds(sequelize, DataTypes);
  var school_segments = _school_segments(sequelize, DataTypes);
  var schools = _schools(sequelize, DataTypes);
  var segments = _segments(sequelize, DataTypes);
  var skills = _skills(sequelize, DataTypes);
  var slot_round_participant = _slot_round_participant(sequelize, DataTypes);
  var slots = _slots(sequelize, DataTypes);
  var themes = _themes(sequelize, DataTypes);
  var tokens = _tokens(sequelize, DataTypes);
  var user_global_settings = _user_global_settings(sequelize, DataTypes);
  var user_levels = _user_levels(sequelize, DataTypes);
  var user_skill_history = _user_skill_history(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var webhook_calls = _webhook_calls(sequelize, DataTypes);
  var zoom_accounts = _zoom_accounts(sequelize, DataTypes);


  return {
    booking_line_items,
    booking_reports,
    bookings,
    bookings_report,
    challenge_round_documents,
    challenges,
    cities,
    citiesnouse,
    class_groups,
    country_codes,
    customer_segments,
    customers,
    discount_codes,
    email_templates,
    failed_jobs,
    file_upload,
    jobs,
    levels,
    migrations,
    notification_loggers,
    notification_templates,
    panels,
    password_resets,
    profile_skill_status,
    profiles,
    results,
    rewards,
    roles,
    rounds,
    school_segments,
    schools,
    segments,
    skills,
    slot_round_participant,
    slots,
    themes,
    tokens,
    user_global_settings,
    user_levels,
    user_skill_history,
    users,
    webhook_calls,
    zoom_accounts,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
