// const popup = document.getElementsByClassName("sb-popup")[0];
// const open = document.getElementsByClassName("sb-popup__button--open");
// const close = popup.getElementsByClassName("sb-popup__button--close")[0];
//
// close.addEventListener('click', (e) => {
//     e.preventDefault();
//     popup.classList.toggle('sb-popup--active');
// });
//
//
// for (let i = 0; i < open.length; i++) {
//     open[i].addEventListener('click', (e) => {
//         e.preventDefault();
//         popup.classList.toggle('sb-popup--active');
//     });
// }


// Закрыть попап «спасибо»
  $('.js-overlay-thank-you').click(function() { // по клику на крестик
    $('.js-overlay-thank-you').fadeOut();
    //$('#fullpage').removeClass('no-scroll');
  });

$(document).mouseup(function (e) { // по клику вне попапа
  let popup = $('.popup');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-thank-you').fadeOut();
  }
  //$('#fullpage').removeClass('no-scroll');
});