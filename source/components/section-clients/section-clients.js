module.exports = (function(){
  $('#clients').owlCarousel({
    loop:true,
    dots: false,
    nav:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        margin:10
      },
      768:{
        items:2,
        margin: 30        
      },
      1200: {
        items:3,
        margin:50
      }
    }
  });

  $('#form-callback').submit(function(e) { 
    e.preventDefault();

    if ($(this)[0].name.value == '' || $(this)[0].phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "callback.php",
      data: $(this).serialize()
    }).done(function() {
      $('.js-thank-you').fadeIn();
      let timeout = window.setTimeout(()=>{
        $('.js-thank-you').fadeOut();
      }, 2000);     
     
      $('#form-callback').trigger('reset');
    });
    return false;
  });

  $(function($){
    $('[name="phone"]').mask("+7(999) 999-9999");
  });

})();