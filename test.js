const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://newUser:newPass@localhost:27017/new_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const schema = new Schema({
    name: String
  }, {
    capped: { size: 1024 },
    bufferCommands: false,
    autoCreate: false // disable `autoCreate` since `bufferCommands` is false
  });

  const Model = mongoose.model('cc', schema);
  await Model.createCollection();
  console.log("done!")
}

