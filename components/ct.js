// ct.js

const iv = setInterval(function(){countDown();}, 1000);
function countDown(){
     var endDate = new Date("Sep 30, 2017");
     var days = parseInt((endDate - Date.now())/(1000*60*60*24));
     var hours = parseInt((endDate - Date.now())/(1000*60*60))%24;
     var minutes = parseInt((endDate - Date.now())/(1000*60))%60;
     var seconds = parseInt((endDate - Date.now())/(1000))%60;
        
     if (Date.now() < Date.parse(endDate)){
         timer.text = days + "d, " + hours+ "h, " + minutes + "m, " + seconds + "s";
     } else {
         timer.text = "Closed";
     }
}
