document.querySelector("#button1 button").addEventListener('click',Calculator)


function Calculator(){
var price = Number(document.getElementById("Car Price").value)
var DawnPayment = Number (document.getElementById("Down Payment").value)
var period=Number(document.getElementById("Installment Period").value)*12;

var Monthelyinstallment= (price-DawnPayment)/period;
document.querySelector("#output p").innerText=Monthelyinstallment;
}