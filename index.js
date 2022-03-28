const express = require("express");
const app = express();

app.get("/", function (req,res) {
    res.sendFile(__dirname + "/index.html");
});

function myFunction() {
   var x = document.getElementById("summa").value;
   var maks = document.getElementById("region").value;
   var kokku = document.getElementById("quantity").value;
   if(x>999&&x<5000){
       var y = x-x*0.03;
       var soodustus = "3%";
   }
   else if(x>4999&&x<7000){
        var y = x-x*0.05;
       var soodustus = "5%";
   }
   else if(x>6999&&x<10000){
       var y = x-x*0.07;
       var soodustus = "7%";
   }
   else if(x>9999&&x<49999){
       var y = x-x*0.1;
       var soodustus = "10%";
   }
   else if(x>49999){
       var y = x-x*0.15;
       var soodustus = "15%";
   }
   document.getElementById("eelsumma").innerHTML = x*kokku;
   document.getElementById("soodustus").innerHTML = soodustus;
   document.getElementById("demo").innerHTML = y;
   document.getElementById("maksud").innerHTML = Math.round((y+(maks*y)/100)*100)/100;
   document.getElementById("kokku").innerHTML = Math.round(kokku*(y+(maks*y)/100));
}

app.listen(3000, function () {
    console.log("Server is on the run on http://localhost:3000")
});