$(document).ready(function(){
  
  $('.bars-wrapper').click(function(e){
    e.stopPropagation();
    $('#mobile-nav').toggleClass('active');
  });

  $(document).click(function(){
    $('#mobile-nav').removeClass('active');
  })

})