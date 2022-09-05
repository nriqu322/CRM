const { Router } = require('express');
const {
  getAllMeetings,
  getMeeting,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} = require('../controllers/meetings.controller');

const router = Router();

router.get('/meetings', getAllMeetings);

router.get('/meetings/:id', getMeeting);

router.post('/meetings', createMeeting);

router.put('/meetings/:id', updateMeeting);

router.delete('/meetings/:id', deleteMeeting);

module.exports = router;
