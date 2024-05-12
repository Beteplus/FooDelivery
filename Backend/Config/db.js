import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://beteme390:betethegreat@btmtech.jxfbizg.mongodb.net/food-del').then(() => {
    console.log('DB Connected');
  });
};