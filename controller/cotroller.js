var post = require("../model/studentdata");
var mark = require("../model/mark");

exports.addstudent = async (req, res) => {
  var data = await post.create(req.body);
  var id = data._id;

  req.body.student_id = id;
  await mark.create(req.body);

  res.status(200).json({
    status: "add done",
    data,
  });
};

exports.updatemark = async (req, res) => {
  var id = req.body.id;
  var hindi = req.body.hindi;
  var english = req.body.english;
  var maths = req.body.maths;
  var gujarati = req.body.gujarati;
  var science = req.body.science;
  var total = hindi + english + maths + gujarati + science;
  var percentage = (total * 100) / 500;

  const datam = {
    hindi,
    english,
    maths,
    gujarati,
    science,
    total,
    percentage,
  };
  console.log(datam);

  var data = await mark.findOneAndUpdate({ student_id: id }, datam);

  res.status(200).json({
    status: "add done",
    data,
  });
};

exports.deletem = async (req, res) => {
  var id = req.params.id;
  var data = await mark.findByIdAndDelete(id);

  res.status(200).json({
    status: "add done",
    data,
  });
};

exports.show = async (req, res) => {
    var data = await post.find()
  
    res.status(200).json({
      status: "find",
      data,
    });
  };
