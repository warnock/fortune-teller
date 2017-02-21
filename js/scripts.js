var goodFortune = 0, badFortune = 0;

$(function(){
  $("#fortune").submit(function(){
    event.preventDefault();
    $("input:checkbox[name=good-fortune]:checked").each(function(){
      goodFortune++;
    });
    $("input:checkbox[name=bad-fortune]:checked").each(function(){
      badFortune++;
    });

    var total = goodFortune - badFortune;

    $("#output").show();
    if(total > 0){
      $("#fortune1").show();
      $("#fortune1").text("Good fortune!");
    } else {
      $("#fortune2").show();
      $("#fortune2").text("Do not leave your house! You are very unlucky!");
    }
  });
});
