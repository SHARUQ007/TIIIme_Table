//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/dateTime.js");
const arrangeDay = require(__dirname + "/arrangeDay.js");
const current = require(__dirname + "/current.js");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

function Subject(name, faculty, meetlink,youtubelink,drivelink, courseType, remarks, duration, classDays, classTimings) {
  this.name = name;
  this.faculty = faculty;
  this.meetlink = meetlink;
  this.youtubelink=youtubelink;
  this.drivelink=drivelink;
  this.courseType = courseType;
  this.remarks = remarks;
  this.duration = duration;
  this.classDays = classDays;
  this.classTimings = classTimings;
}
const ps = new Subject("Probability and Statistics", "S Vijayakumar", "https://meet.google.com/oxg-coic-zmb"," ","https://drive.google.com/drive/folders/1TTbMRbZxgdDgtEMDNhgHeuu8tvtHOzWG?usp=sharing ", "Theory", "Live Class through Google meet.",1, ["Monday", "Tuesday","Friday"], [10,9,11]);
const dsa = new Subject("Data Structures and Algorithms", "Umarani maam", "https://meet.google.com/fyb-saig-zdg"," ","https://drive.google.com/drive/folders/1An68FyUNm175mfYDNvKOH7vfWLXmKAIg?usp=sharing", "Theory", "Live Class through Google meet.",1, ["Monday", "Wednesday","Friday"], [9, 14,10]);
const tcme = new Subject("Thermal Concepts for Manufacturing Engineers", "Dr. Jayavel S"," "," ","https://drive.google.com/drive/folders/1bK5nA-S0LP_6oynKw4V0IxKwpFwqom53?usp=sharing ", "Theory", "Live Class through Google meet",1, ["Monday", "Tuesday","Friday"], [11,10,14]);
const mp= new Subject("Manufacturing Processes I","Dr. Senthilkumaran K"," https://meet.google.com/tch-rugb-zev"," "," ","Theory ","Live Class through Google meet",1,["Monday","Tuesday","Thursday"],[12,11,9]);
const mppi=new Subject("Manufacturing Processes Practice I","Dr Senthilkumaran K"," https://meet.google.com/tch-rugb-zev"," ","https://drive.google.com/file/d/1JPKCWJYRi8xEcY_jUeDaWJDX5KvCwtQ0/view?usp=sharing","Lab","Live Class through Google meet.",1,["Monday"],[15]);
const pdma=new Subject("Production Drawing and Manufacturability Analysis","Dr. Venkata Timmaraju Mallina","https://meet.google.com/owj-svaa-tuc"," "," ","Theory","Live Class through Google meet.",2,["Thursday"],[12]);
const pdmal=new Subject("Production Drawing and Manufacturability Analysis","Dr. Venkata Timmaraju Mallina","https://meet.google.com/xuk-ydxj-bhu"," "," ","Lab","Live Class through Google meet.",2,["Thursday"],[15]);
const edl=new Subject("Electrical Drives","Dr. P Damodharan(T)/Dr B Chittibabu(P)","https://meet.google.com/yfw-ewex-emw"," ","https://drive.google.com/drive/folders/1JCMaEBtGSnDaOqwRGu1FGn9A6XVCHfZX?usp=sharing ","Lab","Live Class through Google meet.",3,["Tuesday"],[15]);
const edt=new Subject("Electrical Drives","Dr. P Damodharan(T)","https://meet.google.com/yfw-ewex-emw"," ","https://drive.google.com/drive/folders/1JCMaEBtGSnDaOqwRGu1FGn9A6XVCHfZX?usp=sharing ","Theory","Live Class through Google meet.",3,["Thursday"],[10]);
const dsp=new Subject("Data Structures Practice","Umarani maam","https://meet.google.com/fyb-saig-zdg"," ","https://drive.google.com/folderview?id=0B5wgyOHwwZIpWDBNbkNtUjJuSlk","Lab","Live Class through Google meet.",3,["Wednesday"],[15]);
const allSubjects = [ps,dsa,tcme,mp,mppi,pdma,pdmal,edl,edt,dsp];
const dayTimeTabel = arrangeDay.arrange(allSubjects);
app.get("/", function(req, res) {
  const day = date.getDate();
  const i=current.currnt(dayTimeTabel[day[3]],day);
  res.render("todayTT", {
    day: day,
    i: i,
    dayTimeTabel: dayTimeTabel[day[3]]

  });
});
app.get("/course", function(req, res) {
  res.render("course", {
    allSubjects: allSubjects
  });
});
app.get("/tt", function(req, res) {
  res.render("tt");
});
app.get("/contact", function(req, res) {
  res.render("contact");
});
app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
