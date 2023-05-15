const mongoose= require('mongoose');

const kittySchema = new mongoose.Schema({
    data: String
  });

  const Kitten = mongoose.model('Ticket', kittySchema);
module.exports=Kitten