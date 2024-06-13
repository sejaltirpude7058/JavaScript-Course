// let myDate = new Date();
// console.log(myDate);// 2024-06-13T16:18:48.903Z
// console.log(typeof myDate); //object
// console.log(myDate.toString());// thu Jun 13 2024 21:48:48
// console.log(myDate.toDateString());// thu Jun 13 2024
// console.log(myDate.toTimeString());// 21:48:48 GMT+530 (India Standard Time)
// console.log(myDate.toISOString());// 2024-06-13T16:18:48:903Z
// console.log(myDate.toJSON());// 2024-06-13T16:18:48:903Z
// console.log(myDate.toLocaleString()); // 13/6/2024 9:53:14 pm
// console.log(myDate.toLocaleDateString()); //13/6/2024

// const newDate1 = new Date(2024, 7, 20);
// console.log(newDate1.toDateString()); // 20/8/2024

// const newDate2 = new Date(2024, 7, 20, 10, 43);//20/8/2024 10:43:00 am indexing of months starts from 0 if written like this
// console.log(newDate2.toLocaleString());

// let newDate3 = new Date("10-23-2024"); //23/1/2024
// console.log(newDate3.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); //in miliseconds
// console.log(Math.floor(Date.now()/1000)); // to get in seconds


// console.log(newDate3.getTime());
// console.log(newDate3.getDay()); // 3 wed
// console.log(newDate3.getMonth() + 1); //9 i.e 10 october 0 to 11 indexing of months so to overcome this use + 1
// console.log(newDate3.getFullYear());// 2024
// console.log(newDate3.getHours());
// console.log(newDate3.getMinutes());
// console.log(newDate3.getSeconds());
// console.log(newDate3.getMilliseconds());

let currDate = new Date();
currDate.toLocaleString('default', {
    weekday: 'long',
    
})

console.log(currDate);
