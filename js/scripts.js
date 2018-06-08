
var beep = function(num){

var arr = [];

for(var i = 0; i <= num; i++){
  var strin = i.toString();

 if(i !=0 && i % 3 === 0 ){
   arr.push("I'm sorry, Dave. I'm afraid I can't do that.");
 }
    else if( strin === "0"){
      arr.push( "Boop!");
    }
    else if( strin==  "1"){
      arr.push("Beep!");
    }

    else{
      arr.push(i);


    }

}
return (arr);

}






//This is informing the document to get ready for a type of function that will access the code inside of it
$(document).ready(function(){
  //This is selecting the id and telling it to be ready for something to go down
  $("#formOne").on("submit",function(event){

    // We are gathering the value of the input and creating a variable name for it to access it
    var InPut= $("#beep-boop").val();
    // This is so it does not go back to its original state and in a way give it a diffrent route to take
    event.preventDefault();
    // this is to see if my input shows up in the back end "in a way"

    var bop = beep(InPut);
    $("#show_Output").text(bop);
  });
});


//$("#Questions").click(function(event){


//var question_1 = $("select#Question_1").val();
//var question_2 = $("select#Question_2").val();
$(document).ready(function(){
$("#Questions").on("submit",function(event){
//if(question_1 >= question_2){
  //$('#Num1').show()







$('#show').hide()
$('#off').show();
});
});
