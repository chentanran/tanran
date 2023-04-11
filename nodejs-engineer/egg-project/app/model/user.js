module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true },
    image: { type: String, default: null },
    cover: { type: String, default: null },
    channeldes: { type: String, default: null },
    subscribeCount: { type: Number, default: 0 },
  });

  return mongoose.model('User', UserSchema);
};
