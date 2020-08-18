//jshint esversion:6
function Tsubject(subject,time,apm,hrs)
{
  this.subject=subject,
  this.time=time,
  this.apm=apm,
  this.hrs=hrs
}
  exports.arrange = function(allSubjects){
const sunday=[];
const monday=[];
const tuesday=[];
const wednesday=[];
const thursday=[];
const friday=[];
const saturday=[];
var tsubject;
allSubjects.forEach(function(subject){
  for(var i=0;i<subject.classDays.length;i++){
    switch(subject.classDays[i])
    {
        case "Monday":
        tsubject= new Tsubject(subject,subject.classTimings[i],(subject.classTimings[i]>=12?"pm":"am"),(subject.classTimings[i]>=13)?(subject.classTimings[i]-12):subject.classTimings[i]);
        monday.push(tsubject);
        break;
        case "Tuesday":
        tsubject= new Tsubject(subject,subject.classTimings[i],(subject.classTimings[i]>=12?"pm":"am"),(subject.classTimings[i]>=13)?(subject.classTimings[i]-12):subject.classTimings[i]);
        tuesday.push(tsubject);;
        break;
        case "Wednesday":
        tsubject= new Tsubject(subject,subject.classTimings[i],(subject.classTimings[i]>=12?"pm":"am"),(subject.classTimings[i]>=13)?(subject.classTimings[i]-12):subject.classTimings[i]);
        wednesday.push(tsubject);
        break;
        case "Thursday":
        tsubject= new Tsubject(subject,subject.classTimings[i],(subject.classTimings[i]>=12?"pm":"am"),(subject.classTimings[i]>=13)?(subject.classTimings[i]-12):subject.classTimings[i]);
        thursday.push(tsubject);
        break;
        case "Friday":
        tsubject= new Tsubject(subject,subject.classTimings[i],(subject.classTimings[i]>=12?"pm":"am"),(subject.classTimings[i]>=13)?(subject.classTimings[i]-12):subject.classTimings[i]);
        friday.push(tsubject);
        break;
        case "Saturday":
        tsubject= new Tsubject(subject,subject.classTimings[i],(subject.classTimings[i]>=12?"pm":"am"),(subject.classTimings[i]>=13)?(subject.classTimings[i]-12):subject.classTimings[i]);
        saturday.push(tsubject);
        break;
    }
}
});

  return [sort(sunday),sort(monday),sort(tuesday),sort(wednesday),sort(thursday),sort(friday),sort(saturday)];
}
function sort(day) {

const length=day.length;
for (let i=0;i<length;i++) {
  for (let j=0;j<(length-i-1);j++){
    if (day[j].time>day[j+1].time){
      [day[j], day[j + 1]] = [day[j + 1], day[j]];
    }
  }
}

  return day;
}
