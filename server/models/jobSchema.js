import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  companyLogo: {
    type: String,
    required: true
  },
  minPrice: {
    type: Number,
    required: true
  },
  maxPrice: {
    type: Number,
    required: true
  },
  salaryType: {
    type: String,
    required: true
  },
  jobLocation: {
    type: String,
    required: true
  },
  postingDate: {
    type: Date,
    required: true
  },
  postedBy: {
    type: String,
    required: true
  },
  experienceLevel: {
    type: String,
    required: true
  },
  employmentType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skills: [{
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }]
});


const Job = new mongoose.model('job', jobSchema);

export default Job
