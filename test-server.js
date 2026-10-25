const http = require('http');

const endpoints = [
  '/index.html',
  '/about.html',
  '/courses.html',
  '/clinical-training.html',
  '/placements.html',
  '/admissions.html',
  '/contact.html',
  '/css/style.css',
  '/js/main.js',
  '/images/logo.svg',
  '/images/trust_logo.svg',
  '/images/hero_students.jpg',
  '/images/college_building.jpg',
  '/images/student_bsc_portrait.jpg',
  '/images/simulation_training_group.jpg',
  '/images/college_bus.jpg',
  '/images/anatomy_museum.jpg',
  '/images/nutrition_lab.jpg',
  '/images/maternity_lab.jpg',
  '/images/library_room.jpg',
  '/images/computer_lab.jpg',
  '/images/community_health.jpg',
  '/images/alumni_priya.jpg',
  '/images/alumni_sneha.jpg',
  '/images/alumni_anjali.jpg',
  '/images/partners/apollo.svg',
  '/images/partners/manipal.svg',
  '/images/partners/narayana.svg',
  '/images/partners/fortis.svg',
  '/images/partners/aster.svg',
  '/images/partners/max.svg',
  '/images/partners/kims.svg',
  '/images/partners/hcg.svg',
  '/images/partners/blk_max.svg',
  '/images/partners/medanta.svg'
];

async function checkAll() {
  for (const ep of endpoints) {
    await new Promise(resolve => {
      http.get(`http://localhost:8080${ep}`, res => {
        console.log(`Endpoint ${ep.padEnd(40)} => ${res.statusCode} ${res.headers['content-type']}`);
        resolve();
      }).on('error', err => {
        console.error(`Error on ${ep}:`, err.message);
        resolve();
      });
    });
  }
}

checkAll();
