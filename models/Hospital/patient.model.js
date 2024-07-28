import mongoose from 'mongoose';

// Define the patient schema
const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    disease: {
      type: String,
      required: true,
    },
    state: {
      type: String,
    },
    blood_group: {
      type: String,
      enum: ['A+', 'B+', 'A-', 'B-', 'AB+', 'AB-', 'O-', 'O+'],
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
  },
  { timestamps: true }
);

// Create and export the Patient model
export const Patient = mongoose.model('Patient', patientSchema);
