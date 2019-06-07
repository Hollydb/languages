$(document).ready(function() {
  console.log("Jquery is loaded");
  $("#submitbtn").click(function(event){
  event.preventDefault()
    var name = $('input#name').val();
    var experience = parseInt($('select#experience').val());
    var why = parseInt($('select#why').val());
    var how = parseInt($('select#how').val());
    var background = parseInt($('select#background').val());
    var work = parseInt($('select#work').val());
    var total = experience + why + how + background + work;
    
    $('#outputname').text(name + ", ");
   
   if (total <= 8){
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#result4").hide();
      $("#missed").hide();
    } else if (total >=9 && total<=12){
      $("#result2").show();
      $("#result1").hide();
      $("#result3").hide();
      $("#result4").hide();
      $("#missed").hide();
    } else if (total >=13 && total<=17){
      $("#result3").show();
      $("#result2").hide();
      $("#result1").hide();
      $("#result4").hide();
      $("#missed").hide();
    } else if (total >=18 && total<=20){
      $("#result4").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#result1").hide();
      $("#missed").hide();
    } else {
      $("#missed").show();
      $("#result1").hide();
      $("#result2").hide();
      $("#result3").hide();
      $("#result4").hide();
    }
});
$(document).ready(function() {
  console.log("pizza time")
$("#submitbtnpizza").click(function(event){
  event.preventDefault()
    var priceten = parseInt($('input#ten').val());
    var pricetwelve = parseFloat($('input#twelve').val());
    var pricefourteen = parseFloat($('input#fourteen').val());
    console.log ('ten button is working');
    
  //   var value10 = (priceten / 314.16).val());
  //   var value12 = (pricetwelve / 452.39).val());
  //   var value14 = (pricefourteen / 615.75).val());
  // console.log (value 14);
  // if (total <= 8){
  //     $("#result1").show();
  //     $("#result2").hide();
  //     $("#result3").hide();
  //     $("#result4").hide();
  //     $("#missed").hide();
  //   } else if (total >=9 && total<=12){
  //     $("#result2").show();
  //     $("#result1").hide();
  //     $("#result3").hide();
  //     $("#result4").hide();
  //     $("#missed").hide();
  //   } else if (total >=13 && total<=17){
  //     $("#result3").show();
  //     $("#result2").hide();
  //     $("#result1").hide();
  //     $("#result4").hide();
  //     $("#missed").hide();
  //   } else if (total >=18 && total<=20){
  //     $("#result4").show();
  //     $("#result2").hide();
  //     $("#result3").hide();
  //     $("#result1").hide();
  //     $("#missed").hide();
  //   } else {
  //     $("#missed").show();
  //     $("#result1").hide();
  //     $("#result2").hide();
  //     $("#result3").hide();
  //     $("#result4").hide();
  //   }
});

});
});