

document.getElementById("CarPrice").addEventListener('keyup',Calculator)
document.getElementById("DownPayment").addEventListener('keyup',Calculator)
document.getElementById("InstallmentPeriod").addEventListener('keyup',Calculator)


function Interestrate(years){
    var Interestrate=0;
    if(years==1){
       Interestrate= 0.01
    }else if(years==2){
         Interestrate= 0.018

    } else if(years==3){
         Interestrate= 0.029

    }else if(years==4){
         Interestrate= 0.038

    }else if(years==5){
         Interestrate= 0.049

    }else if(years==6){
         Interestrate= 0.062

    }else if(years==7){
         Interestrate= 0.079

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
 document.querySelector("#InstallmentRate").innerText="Please fill in all required fields";
 document.querySelector('#InstallmentRate').style.color = '#b02a37';
    document.querySelector('#MonthelyInstallment').style.color = '#b02a37';


}else if(years>7){
     document.querySelector("#MonthelyInstallment").innerText="Installment period cannot exceed 7 years.";
    document.querySelector("#InstallmentRate").innerText="Please enter an installment period between 1 and 7 years.";
     document.querySelector('#InstallmentRate').style.color = '#b02a37';
      document.querySelector('#MonthelyInstallment').style.color = '#b02a37';

}else{
var Remaining=RemainingValue( price,DownPayment)
var Interest=Interestvalue(Remaining,Interestrate(years));
var month = period(years);
var TotalInstallements = Interest+Remaining;
 var MonthlyInstallment= TotalInstallements/month; 
 
document.querySelector("#MonthelyInstallment").innerText=MonthlyInstallment.toFixed(2);
document.querySelector("#InstallmentRate").innerText= (Interestrate(years)*100).toFixed(2)+"%";
 document.querySelector("#InstallmentRate").style.color = "";
document.querySelector("#MonthelyInstallment").style.color = "";
}
}
 