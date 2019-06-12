$(document).ready(function(){

  //Banner Carousel
  $('.sliders').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: 'auto',
    slidesToShow: 1,
    dots: true,
    arrows: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: 'auto',
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 'auto',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 380,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 'auto',
        slidesToShow: 1
      }
    }
  ]
});


//Make the boxes do the hover thing
  $('.experience').hover(function() {
   $(this).children('section').slideToggle(300)

  });

  const togglePaper = function(){
   if ($(window).width() > 480) {
    $('.resume-paper').hide();
    $('.resume-paper').slideDown(300);
   } else {return};
  }

  const toggleResume = function (job) {
    if (job === 'ipAE') {
      togglePaper();
      document.getElementById('job-title').innerHTML = 'Account Executive';
      document.getElementById('where').innerHTML = 'International Paper <br> Memphis, TN';
      document.getElementById('skillset').innerHTML = '<section id="ae-skillset"> <i class="skill fas fa-phone-alt"></i> <em>Cold Calls, Customer Service</em> <br> \
      <i class="skill far fa-file-excel"></i>  <em>Data Management, Spreadsheets</em> <br>\
      <i class="skill fas fa-users"></i> <em>Teamwork, Leadership, Project Management</em> <br>\
      <i class="skill fas fa-globe-americas"></i> <em>Supply Chain Acumen</em> </section>'
      document.getElementById('job-desc').innerHTML =  'Made proactive, customer service phone calls for the purpose of selling inventory and acquiring new Sales relationships. <br><br> Performed order entry and order management for over 30 unique accounts with a 98% team accuracy rate. <br><br>\
      \
      Used project management tools to create and sustain improvements to the supply chain, including customer service and cost savings.'
    }

    else if (job === 'nicsHR') {
      togglePaper();
      document.getElementById('job-title').innerHTML = 'Human Resources Associate';
      document.getElementById('where').innerHTML = 'Network of International Christian Schools <br> Southaven, MS';
      //Change THESE!!!!!!!!!!!!!!!!!!!!!!!!!
      document.getElementById('skillset').innerHTML = '<i class="skill far fa-file-excel"></i> <em>Excel Database, Spreadsheets</em> <br>\
      <i class="skill fab fa-mailchimp"></i> <em>Email Campaigns</em> <br>\
      <i class="skill fas fa-phone-alt"></i> <em>Phone Reception</em> <br>\
      <i class="skill fas fa-tasks"></i> <em>Event Planning</em>'
      document.getElementById('job-desc').innerHTML =  'Served as a liaison between new hires and the HQ prior to onboarding. <br><br>\
      \
      Collected, digitized, and validated new hire documentation for relocation. <br><br> Secondary duties: recruiting, application screening, and assisting in leadership training events.'
    }

    else if (job === 'skills-certs') {
      togglePaper();
      document.getElementById('job-title').innerHTML = 'Key Skills';
      document.getElementById('where').innerHTML = '& Certifications';
      document.getElementById('skillset').innerHTML = '<i class="skill fas fa-language"></i>Intermediate Mandarin Language <br> \
      <i class="skill fas fa-users"></i> Working in Team Environments <br>\
      <i class="skill fas fa-code"></i> Intermediate Web Development <br>\
      <i class="skill fab fa-microsoft"></i>Microsoft Office Suite'
      document.getElementById('job-desc').innerHTML = '<strong>Codecademy</strong> - Build Websites from Scratch <br> <em>Demonstrated proficiency with HTML, CSS, JavaScript, etc.</em> <br> -	https://www.credential.net/k3l7b6hb <br><br>\
      \
      <strong>Codecademy</strong> - Build Front-End Web Applications from Scratch <br> <em>Developing interactive front-end applications using JavaScript and ReactJS</em> -	https://www.credential.net/6gksy59g'
      
    }

    else if (job === 'awards') {
      togglePaper();
      document.getElementById('job-title').innerHTML = 'Leadership';
      document.getElementById('where').innerHTML = '& Awards';
      document.getElementById('skillset').innerHTML = null;
      document.getElementById('job-desc').innerHTML = ' <strong><i class="skill fas fa-hard-hat"></i>Business Continuity Project Lead – International Paper</strong> <br> Managed the project to update IP Supply Chain’s business-wide emergency procedures, led the business through a company-wide mock emergency event. <br><br>  \
      \
      <strong><i class="skill fas fa-trophy"></i>Lifeblood “Newcomer of the Year” 2013</strong> <br> Used position as fraternity VP of Philanthropy to revitalize the University’s annual blood drive tradition, which led to award-winning results.<br><br>\
      \
      <strong><i class="skill fas fa-user-graduate"></i>University College Highest GPA, 2014</strong> <br> Earned the highest cumulative GPA in my specific college\'s(U of M\'s University College) graduating class.'
    }
  };

$('#ipAE').click(function() {
  toggleResume('ipAE');
});
$('#nicsHR').click(function() {
  toggleResume('nicsHR')
});
$('#skills-certs').click(function() {
  toggleResume('skills-certs')
});
$('#awards').click(function() {
  toggleResume('awards')
});


$('.ribbon').hover(function() {
  $(this).children('section').slideToggle(300)

 });


  var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 60){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 60) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollTop = scrollTop;
      
    }
  });

  
});