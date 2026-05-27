$(() => {
  displayWord('.time');
  setInterval(displayTime, 1000);
  new FormInput('#search_form', '.holder');

  $('.close').click(() => {
    $('.side_bar').hide();
  });

  $(document).keydown((e) => {
    if (e.ctrlKey && e.keyCode === 78) {
      $('.side_bar').toggle();
    }
  });
});
