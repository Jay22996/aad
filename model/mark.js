var mongoose = require("mongoose");

var mark = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "studentname"},
  hindi: {type: Number,default:0.0},
  english: {type: Number,default:0.0},
  maths: {type: Number,default:0.0},
  gujarati: {type: Number,default:0.0},
  science: {type: Number,default:0.0},
  total: {type: Number,default:0.0},
  percentage: {type: Number,default:0.0},
});

module.exports = mongoose.model("studentmark", mark);
