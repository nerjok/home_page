window.addEventListener('scroll', function(e) {
    let sY = window.scrollY;
    if (sY > 180) {
      document.getElementsByClassName('navigation__nav')[0].style.background = '#000';          
      document.getElementsByClassName('to-top')[0].style.opacity = 1;
    } else {
      document.getElementsByClassName('navigation__nav')[0].style.background = 'transparent';
      document.getElementsByClassName('to-top')[0].style.opacity = 0;
    }
    
  })



$(window).on('scroll' , function(){
  var scroll_pos = $(window).scrollTop() + $(window).height();
  var element_pos = $('.about-me').offset().top + $('.about-me').height() ;
  if (scroll_pos > element_pos) {
      $('.about-me').addClass('sliding-up slide-show');
  };

  var h_experience = $('.experience').offset().top + $('.experience').height() ;
  if (scroll_pos > element_pos) {
      $('.experience').addClass('sliding-bottom-right slide-show');
  };

  var h_services = $('.services').offset().top + $('.services').height() ;
  if (scroll_pos > h_services) {
      $('.services').addClass('sliding-up slide-show');
  };

  var h_portfolio = $('.portfolio').offset().top + $('.portfolio').height() ;
  if (scroll_pos > h_portfolio) {
      $('.portfolio').addClass('sliding-bottom-right slide-show');
  };

  var h_contacts = $('.contacts').offset().top + $('.contacts').height() ;
  if (scroll_pos > h_contacts) {
      $('.contacts').addClass('sliding-up slide-show');
  };
})