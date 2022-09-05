const Meetings = require('../models/Meetings');

const getAllMeetings = async (req, res, next) => {
  try {
    const allMeetings = await Meetings.findAll();
    res.json(allMeetings);
  } catch (error) {
    next(error);
  }
};

const getMeeting = async (req, res, next) => {
  try {
    const { id } = req.params;
    const meeting = await Meetings.findOne({
      where: {
        id,
      },
    });

    if (meeting === null) {
      return res.status(404).json({
        message: 'Meeting not found',
      });
    }
    return res.json(meeting);
  } catch (error) {
    next(error);
  }
};

const createMeeting = async (req, res, next) => {
  try {
    const {
      day,
      title,
      attendies,
      description,
      contactId,
      projectId,
    } = req.body;
    const newmeeting = await Meetings.create({
      day,
      title,
      attendies,
      description,
      contactId,
      projectId,
    });
    res.send(newmeeting);
  } catch (error) {
    next(error);
  }
};

const updateMeeting = async (req, res, next) => {
  try {
    const { id } = req.params;
    const meeting = await Meetings.findOne({
      where: { id },
    });
    meeting.set(req.body);
    await meeting.save();

    if (meeting === null) {
      return res.status(404).json({
        message: 'Meeting not found',
      });
    }
    return res.json(meeting);
  } catch (error) {
    next(error);
  }
};

const deleteMeeting = async (req, res, next) => {
  try {
    const { id } = req.params;
    const meeting = await Meetings.destroy({
      where: {
        id,
      },
    });

    if (meeting === null) {
      return res.status(404).json({
        message: 'Meeting not found',
      });
    }
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMeetings,
  getMeeting,
  createMeeting,
  updateMeeting,
  deleteMeeting,
};
