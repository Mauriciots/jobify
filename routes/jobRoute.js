import express from 'express';
import { createJob, deleteJob, getAllJobs, showStats, updateJob } from '../controllers/jobController.js';

const jobRoute = express.Router();

jobRoute.route('/')
  .get(getAllJobs)
  .post(createJob);
jobRoute.get('/stats', showStats);
jobRoute.route('/:id')
  .delete(deleteJob)
  .patch(updateJob);

export default jobRoute;