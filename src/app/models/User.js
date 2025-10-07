import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a full name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
  },
  role: {
    type: String,
    required: [true, 'Please specify a role.'],
    enum: ['student', 'admin'], // Ensures role can only be one of these values
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// This pattern prevents Mongoose from redefining the model during hot reloads
// in a development environment.
export default mongoose.models.User || mongoose.model('User', UserSchema);