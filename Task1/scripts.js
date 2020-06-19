document.getElementById("header-news").addEventListener('click', () => {
  document.getElementById("board-first").scrollIntoView();
});

$(document).ready(function(){
  $(".logo-image").click(function(){
    $(".logo-image").animate({
      opacity: '0.5',
      height: '150px',
      width: '120%'
    });
  });

  $(".planet-table").click(function(){
    $(".planet-table").css({'font-size': 24});
  });

});
