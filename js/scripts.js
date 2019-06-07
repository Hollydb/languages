$(document).ready(function() {
  console.log("Jquery is loaded");
  $("#submitbtn").click(function(event){
  event.preventDefault();
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


  $("button#btnpizza").click(function(event){
  event.preventDefault();
    var priceten = parseInt($('input#ten').val());
    var pricetwelve = parseFloat($('input#twelve').val());
    var pricefourteen = parseFloat($('input#fourteen').val());
    var valueten = (priceten/314.16);
    var valuetwelve = (pricetwelve/452.39);
    var valuefourteen = (pricefourteen/615.75);
    console.log (valueten);
    if (valueten < valuetwelve || valueten < valuefourteen){
      $("#result10").show();
      $("#result12").hide();
      $("#result14").hide();
      $("#missed").hide();
    } else if (valuetwelve < valueten || valuetwelve < valuefourteen){
      $("#result12").show();
      $("#result10").hide();
      $("#result14").hide();
      $("#missed").hide();
    } if (valuefourteen < valuetwelve || valuefourteen < valuefen){
      $("#result14").show();
      $("#result12").hide();
      $("#result10").hide();
      $("#missed").hide();
    }

});
});