function createEmployeeRecord(array){
    let obj = { firstName:array[0],familyName:array[1],title:array[2],payPerHour: array[3],timeInEvents:[],timeOutEvents:[],
   
    };
    return obj;
   }
   
   
   function createEmployeeRecords(array){
       let employeeRecords = []
       for (let i = 0; i < array.length; i++) {
       employeeRecords.push(createEmployeeRecord(array[i]));
   
         }
       return employeeRecords
      
      }
   
   function createTimeInEvent( dateStamp){
        let [date,hour]=dateStamp.split(' ')
   console.log(this.timeInEvents)
    this.timeInEvents.push({
       type:"TimeIn",
       hour:parseInt(hour,10),
       date
   })
   
   
   return this
      }
      function createTimeOutEvent(dateStamp){
       let [date,hour]=dateStamp.split(' ')
   console.log(this.timeOutEvents)
    this.timeOutEvents.push({
       type:"TimeOut",
       hour:parseInt(hour,10),
       date
   })
   
   
   return this
      }
      let hoursWorkedOnDate = function(soughtDate){
        let inEvent = this.timeInEvents.find(function(e){
            return e.date === soughtDate
        })
    
        let outEvent = this.timeOutEvents.find(function(e){
            return e.date === soughtDate
        })
    
        return (outEvent.hour - inEvent.hour) / 100
    
   }
   let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}
   
  
   const allWagesFor = function () { 
       const eligibleDates = this.timeInEvents.map(function (e) {
           return e.date
           
       })
   
       const payable = eligibleDates.reduce(function (memo, d) {
           return memo + wagesEarnedOnDate.call(this, d)
       }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
   
       return payable
   }   
   function findEmployeeByFirstName(src, name) {
    return src.find(record => record.firstName === name);
  }
  let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}