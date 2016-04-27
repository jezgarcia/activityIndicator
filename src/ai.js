var AI = {
  show: function(style){
  	$(".fadeBox").remove();
    var mu = "<div class='fadeBox'> <div class='spinner" + style +"'> </div> <br><center><a class='button' href='javascript:AI.hide()'>Hide</a></center></div>";
    document.body.innerHTML += mu;
  },
  hide: function(){
    $(".fadeBox").remove();
  }
}
