module.exports = (function(){
  $('#form').submit(function(e) { 
    e.preventDefault();

    if ($(this)[0].name.value == '' || $(this)[0].phone.value == '' || $(this)[0].mark.value == '' || $(this)[0].model.value == '' || $(this)[0].year.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('.js-thank-you').fadeIn();
      let timeout = window.setTimeout(()=>{
        $('.js-thank-you').fadeOut();
      }, 2000);
      
      $('#form').trigger('reset');
    });
    return false;
  });

  new WOW().init();
})();