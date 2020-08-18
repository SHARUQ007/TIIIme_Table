//jshint esversion:6
  exports.currnt = function(currentTable,day) {
    var i = 0,
      flag = 0;
    for(i = 0; i < currentTable.length; i++)
    {
      if ((day[0]==(currentTable[i].time-1)) && day[2]>=40) {
          flag = 1;
          break;
      }
      if(day[0]==(currentTable[i].time + currentTable[i].subject.duration-1)&& day[2]<=40)
      {
          flag = 1;
          break;
      }
      if(currentTable[i].subject.duration>1)
      {
        if(day[0]>=currentTable[i].time && day[0]<=(currentTable[i].time + currentTable[i].subject.duration-2) )
        {   
            flag = 1;
            break;
        }
      }
    }
    if (flag == 0) {
      i = 404;
    }
  return i;
}
