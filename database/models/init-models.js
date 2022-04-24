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
var _global_settings = require("./global_settings");
var _jobs = require("./jobs");
var _levels = require("./levels");
var _migration_script = require("./migration_script");
var _migrations = require("./migrations");
var _notification_loggers = require("./notification_loggers");
var _notification_templates = require("./notification_templates");
var _panels = require("./panels");
var _password_resets = require("./password_resets");
var _pma__bookmark = require("./pma__bookmark");
var _pma__central_columns = require("./pma__central_columns");
var _pma__column_info = require("./pma__column_info");
var _pma__designer_settings = require("./pma__designer_settings");
var _pma__export_templates = require("./pma__export_templates");
var _pma__favorite = require("./pma__favorite");
var _pma__history = require("./pma__history");
var _pma__navigationhiding = require("./pma__navigationhiding");
var _pma__pdf_pages = require("./pma__pdf_pages");
var _pma__recent = require("./pma__recent");
var _pma__relation = require("./pma__relation");
var _pma__savedsearches = require("./pma__savedsearches");
var _pma__table_coords = require("./pma__table_coords");
var _pma__table_info = require("./pma__table_info");
var _pma__table_uiprefs = require("./pma__table_uiprefs");
var _pma__tracking = require("./pma__tracking");
var _pma__userconfig = require("./pma__userconfig");
var _pma__usergroups = require("./pma__usergroups");
var _pma__users = require("./pma__users");
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
  var global_settings = _global_settings(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var levels = _levels(sequelize, DataTypes);
  var migration_script = _migration_script(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var notification_loggers = _notification_loggers(sequelize, DataTypes);
  var notification_templates = _notification_templates(sequelize, DataTypes);
  var panels = _panels(sequelize, DataTypes);
  var password_resets = _password_resets(sequelize, DataTypes);
  var pma__bookmark = _pma__bookmark(sequelize, DataTypes);
  var pma__central_columns = _pma__central_columns(sequelize, DataTypes);
  var pma__column_info = _pma__column_info(sequelize, DataTypes);
  var pma__designer_settings = _pma__designer_settings(sequelize, DataTypes);
  var pma__export_templates = _pma__export_templates(sequelize, DataTypes);
  var pma__favorite = _pma__favorite(sequelize, DataTypes);
  var pma__history = _pma__history(sequelize, DataTypes);
  var pma__navigationhiding = _pma__navigationhiding(sequelize, DataTypes);
  var pma__pdf_pages = _pma__pdf_pages(sequelize, DataTypes);
  var pma__recent = _pma__recent(sequelize, DataTypes);
  var pma__relation = _pma__relation(sequelize, DataTypes);
  var pma__savedsearches = _pma__savedsearches(sequelize, DataTypes);
  var pma__table_coords = _pma__table_coords(sequelize, DataTypes);
  var pma__table_info = _pma__table_info(sequelize, DataTypes);
  var pma__table_uiprefs = _pma__table_uiprefs(sequelize, DataTypes);
  var pma__tracking = _pma__tracking(sequelize, DataTypes);
  var pma__userconfig = _pma__userconfig(sequelize, DataTypes);
  var pma__usergroups = _pma__usergroups(sequelize, DataTypes);
  var pma__users = _pma__users(sequelize, DataTypes);
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
    global_settings,
    jobs,
    levels,
    migration_script,
    migrations,
    notification_loggers,
    notification_templates,
    panels,
    password_resets,
    pma__bookmark,
    pma__central_columns,
    pma__column_info,
    pma__designer_settings,
    pma__export_templates,
    pma__favorite,
    pma__history,
    pma__navigationhiding,
    pma__pdf_pages,
    pma__recent,
    pma__relation,
    pma__savedsearches,
    pma__table_coords,
    pma__table_info,
    pma__table_uiprefs,
    pma__tracking,
    pma__userconfig,
    pma__usergroups,
    pma__users,
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
