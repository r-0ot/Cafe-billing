let array = undefined;
let list = [0,0,0,0];

const calculateSp = (id) => {
 //write your code here
 var qty = document.getElementById(id).value ;
 console.log(qty);
 var subtotal;
 if(id == "quantity1"){
subtotal = qty * document.getElementById("americano").value;
document.getElementById("sb1").innerHTML = subtotal;
list[0] = subtotal;
 }
 else if(id == "quantity2"){
subtotal = qty * document.getElementById("capuccino").value;
document.getElementById("sb2").innerHTML = subtotal;
list[1] = subtotal;
 }
  else if(id == "quantity3"){
subtotal = qty * document.getElementById("mocha").value;
document.getElementById("sb3").innerHTML = subtotal;
list[2] = subtotal;
 }
   else {
subtotal = qty * document.getElementById("latte").value;
document.getElementById("sb4").innerHTML = subtotal;
list[3] = subtotal;
 }
 array = list[0] + list[1] + list[2] + list[3];
}

const disableInput = (event) => { 
 //write your code here
 if(event.target.id == "americano"){
 document.getElementById("quantity1").disabled = !event.target.checked;
 if(event.target.checked == true)
 document.getElementById("quantity1").value = 1;
else
document.getElementById("quantity1").value = 0;
 calculateSp('quantity1');
 }
 else if (event.target.id == "capuccino"){
 document.getElementById("quantity2").disabled = !event.target.checked;
 if(event.target.checked == true)
 document.getElementById("quantity2").value = 1;
 else
 document.getElementById("quantity2").value = 0;
 calculateSp('quantity2');
 }
 else if (event.target.id == "mocha"){
 document.getElementById("quantity3").disabled = !event.target.checked;
 if(event.target.checked == true)
 document.getElementById("quantity3").value = 1;
 else
 document.getElementById("quantity3").value = 0;
 calculateSp('quantity3');
 }
 else{
 document.getElementById("quantity4").disabled = !event.target.checked;
 if(event.target.checked == true)
 document.getElementById("quantity4").value = 1;
 else
 document.getElementById("quantity4").value = 0;
 calculateSp('quantity4');
 }

if( document.getElementById("americano").checked ||
document.getElementById("capuccino").checked ||
document.getElementById("mocha").checked ||
document.getElementById("latte").checked )
   document.getElementById("myBtn").disabled = false;
else
document.getElementById("myBtn").disabled = true;
}

const Total = () => {
  //write your code here
  document.getElementById("ttl").innerHTML = array;
}

const Cancel = () => {
 //write your code here
 document.getElementById("americano").checked = false;
 document.getElementById("capuccino").checked = false;
 document.getElementById("mocha").checked = false;
 document.getElementById("latte").checked = false;
  document.getElementById("quantity1").disabled = true;
   document.getElementById("quantity2").disabled = true;
    document.getElementById("quantity3").disabled = true;
     document.getElementById("quantity4").disabled = true;
  document.getElementById("quantity1").value = '';
  document.getElementById("quantity2").value = ''; 
  document.getElementById("quantity3").value = ''; 
  document.getElementById("quantity4").value = ''; 
  document.getElementById('myBtn').disabled = true;
  document.getElementById("sb1").innerHTML = 0;
  document.getElementById("sb2").innerHTML = 0; 
  document.getElementById("sb3").innerHTML = 0; 
  document.getElementById("sb4").innerHTML = 0; 
  document.getElementById("ttl").innerHTML = 0;


}

if(typeof exports !== "undefined"){
  module.exports = {
    calculateSp,
    disableInput,
    Cancel,
    Total,
    array,
    list
  };
}
