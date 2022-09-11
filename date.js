// 抓 年、月、日
var date  = new Date();//建構日期
var month = date.getMonth(); //取得當月份
var year  = date.getFullYear();//取得當前年份
var day   = date.getDay();//取得星期幾
var d     = date.getDate();//取得日期

//用陣列 取得星期的中文轉換
function getdayName(day){
    let C_dayName=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    return C_dayName[day];
}
//用if 取得月份的中文轉換
var C_monthName;
if (month == 0) {
    C_monthName = "一月";
} else if (month == 1) {
    C_monthName = "二月";
} else if (month == 2) {
    C_monthName = "三月";
} else if (month == 3) {
    C_monthName = "四月";
} else if (month == 4) {
    C_monthName = "五月";
} else if (month == 5) {
    C_monthName = "六月";
} else if (month == 6) {
    C_monthName = "七月";
} else if (month == 7) {
    C_monthName = "八月";
} else if (month == 8) {
    C_monthName = "九月";
} else if (month == 9) {
    C_monthName = "十月";
} else if (month == 10) {
    C_monthName = "十一月";
} else {
    C_monthName = "十二月";
}
//呈現內容
document.getElementById("day").innerHTML = d;
document.getElementById("year").innerHTML = year;
document.getElementById("monthName").innerHTML = C_monthName;
document.getElementById("dayName").innerHTML = getdayName(date.getDay());