

document.getElementById("CarPrice").addEventListener('keyup',Calculator)
document.getElementById("DownPayment").addEventListener('keyup',Calculator)
document.getElementById("InstallmentPeriod").addEventListener('keyup',Calculator)


function Interestrate(years){
    var Interestrate=0;
    if(years==1){
       Interestrate= 0.1
    }else if(years==2){
         Interestrate= 0.18

    } else if(years==3){
         Interestrate= 0.29

    }else if(years==4){
         Interestrate= 0.38

    }else if(years==5){
         Interestrate= 0.49

    }else if(years==6){
         Interestrate= 0.62

    }else if(years==7){
         Interestrate= 0.79

    }
return  Interestrate


}
function RemainingValue ( price,DawnPayment){
       var RemainingValue=price-DawnPayment;
       return  RemainingValue 
}




   function Interestvalue( RemainingValue,Interestrate ){
    var Interestvalue= RemainingValue* Interestrate 
   return Interestvalue;
   



}


function period(years){
var Month=years*12;
 return Month;
}




 function Calculator(){
var price = Number(document.getElementById("CarPrice").value);
var DownPayment = Number (document.getElementById("DownPayment").value);
var years= Number (document.getElementById("InstallmentPeriod").value);

    if( price==0||DownPayment==0||years==0){
    document.querySelector("#MonthelyInstallment").innerText="Please fill in all required fields";
 document.querySelector("#InstallmentRate").innerText="";
    document.querySelector('#MonthelyInstallment').style.color = '#b02a37';


}else if(years>7){
     document.querySelector("#MonthelyInstallment").innerText="Installment period cannot exceed 7 years.";
    document.querySelector("#InstallmentRate").innerText="";
     document.querySelector('#MonthelyInstallment').style.color = '#b02a37';

}else{
var Remaining=RemainingValue( price,DownPayment)
var Interest=Interestvalue(Remaining,Interestrate(years));
var month = period(years);
var TotalInstallements = Interest+Remaining;
 var MonthlyInstallment= TotalInstallements/month; 
 
document.querySelector("#MonthelyInstallment").innerText=MonthlyInstallment.toFixed(2)+" EGP";
document.querySelector("#InstallmentRate").innerText= " Installment Rate: "+(Interestrate(years) * 100).toFixed(0)+"%";
 document.querySelector("#InstallmentRate").style.color = "";
document.querySelector("#MonthelyInstallment").style.color = "";
}
}
 