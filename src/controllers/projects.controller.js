const Projects = require('../models/Projects');

const getAllProjects = async (req, res, next) => {
  try {
    const allProjects = await Projects.findAll();
    res.json(allProjects);
  } catch (error) {
    next(error);
  }
};

const getProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Projects.findOne({
      where: {
        id,
      },
    });

    if (project === null) {
      return res.status(404).json({
        message: 'Project not found',
      });
    }
    return res.json(project);
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const {
      title,
      description,
      start,
      end,
      status,
      customerId,
    } = req.body;
    const newproject = await Projects.create({
      title,
      description,
      start,
      end,
      status,
      customerId,
    });
    res.send(newproject);
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Projects.findOne({
      where: { id },
    });
    project.set(req.body);
    await project.save();

    if (project === null) {
      return res.status(404).json({
        message: 'Project not found',
      });
    }
    return res.json(project);
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Projects.destroy({
      where: {
        id,
      },
    });

    if (project === null) {
      return res.status(404).json({
        message: 'Project not found',
      });
    }
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
