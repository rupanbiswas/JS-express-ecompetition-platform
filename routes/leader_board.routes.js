const express = require('express');
const {
  studentMonth,
  schoolAll,
  schoolMonth,
  studentAll,
  result,
} = require('../controllers/leader_board.controller');
const protect = require('../middleware/auth');

const router = express.Router();

router.get('/school/all', schoolAll);
router.get('/school', schoolMonth);
router.get('/student/all', studentAll);
router.get('/student', studentMonth);
router.get('/result', protect, result);
module.exports = router;
