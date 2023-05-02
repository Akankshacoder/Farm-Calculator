function add(){
    var number_1=
   Number(document.getElementById("t1").value);
   
   var area = number_1 * number_1;
   var perimeter = 4 * number_1;
   
   document.getElementById("lbl").innerHTML = area;
   document.getElementById("lbl2").innerHTML = perimeter;
     }