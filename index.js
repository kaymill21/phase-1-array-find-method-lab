// code your solution here
// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]
 // function superbowlWin(record) {
    //  for(year of record)
    //  return record.find("w")
  
      
         //return record.find( year === 'W') 
  //}

  const superbowlWin = (record) => {
     const winResult = record.find(record => record.result === 'W') 
  return !!winResult ? winResult.year : undefined;
  }