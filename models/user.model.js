import mongoose from 'mongoose';
import Counter from './counter.model.js'; 

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true }, 
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }
  },
  { timestamps: true }
);


userSchema.pre('save', async function () {
  if (this.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'userId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.id = counter.seq;
  }
});


const User = mongoose.model('User', userSchema);

export default User;
