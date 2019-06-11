
const toggleResume = function (job) {
  if (job === 'ipAE') {
    document.getElementById('job-title').innerHTML = 'Account Executive';
    document.getElementById('where').innerHTML = 'International Paper <br> Memphis, TN';
    document.getElementById('skillset').innerHTML = '<section id="ae-skillset"> <i class="skill fas fa-phone-alt"></i> <em>Cold Calls, Customer Service</em> <br> <i class="skill far fa-file-excel"></i>  <em>Data Management, Spreadsheets</em> <br> <i class="skill fas fa-users"></i> <em>Teamwork, Leadership, Project Management</em> <br> <i class="skill fas fa-globe-americas"></i> <em>Supply Chain Acumen</em> </section>'
    document.getElementById('job-desc').innerHTML =  'Made proactive, customer service phone calls for the purpose of selling inventory and acquiring new Sales relationships. <br><br> Performed order entry and order management for over 30 unique accounts with a 98% team accuracy rate. <br><br> Used project management tools to create and sustain improvements to the supply chain, including customer service and cost savings.'
  }
}
