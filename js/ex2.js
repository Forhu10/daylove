/* 요일 바꾸기 */

function dayday(){

  var week = ['(일)','(월)','(화)','(수)','(목)','(금)','(토)'];
  var conclue = week[day];
  return conclue;

}

/* 메인 날짜 */



var now = new Date();

var firstday = new Date("2018-02-12");

var passtime = now.getTime()-firstday.getTime();

var passday = Math.round(passtime/(1000*60*60*24));

document.querySelector("#main_day").innerHTML = passday + " 일";

/* 100일 계산 */



var plus100 = firstday.getTime()+100*(1000*60*60*24);
var one100day = new Date(plus100);

var year= one100day.getFullYear();
var month = one100day.getMonth() +1;
var date = one100day.getDate();
var day = one100day.getDay();



document.querySelector("#h").innerHTML = year+"."+month+"."+date+"."+dayday();



/* 500일 계산 */
var plus500 = firstday.getTime()+500*(1000*60*60*24);
var one500day = new Date(plus500);
var year1= one500day.getFullYear();
var month1 = one500day.getMonth() +1;
var date1 = one500day.getDate();
var day = one500day.getDay();


document.querySelector("#j").innerHTML = year1+"."+month1+"."+date1+"."+dayday();


/* 2년 계산 */
var plus730 = firstday.getTime()+730*(1000*60*60*24);
var one730day = new Date(plus730);
var year2= one730day.getFullYear();
var month2 = one730day.getMonth()+1 ;
var date2 = one730day.getDate();
var day = one730day.getDay();


document.querySelector("#k").innerHTML = year2+"."+month2+"."+date2+"."+dayday();

/* 계산기 */




function ccl(){
  

var val = Number(document.getElementById('num').value);
var cc = firstday.getTime()+Number(val)*(1000*60*60*24);


  var ccday = new Date(cc);
  var yearc= ccday.getFullYear();
  var monthc = ccday.getMonth() +1;
  var datec = ccday.getDate();
  var day = ccday.getDay();

document.querySelector("#l").value = yearc+"."+monthc+"."+datec+"."+dayday();


function dayday(){

  var week = ['(일)','(월)','(화)','(수)','(목)','(금)','(토)'];
  var conclue = week[day];
  return conclue;

}

}







