/**
 * Start of script file
 */
window.addEventListener('load', function() {
    if (window.localStorage.getItem('onboarded') != 1) {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('title').textContent = 'Welcome!';
      document.getElementById('image').innerHTML = '';
      document.getElementById('detail').textContent = 'Fabian Putera Djaja Portfolio';
      document.getElementById('description').textContent = 'Here you can see my skills, selected projects, and contact information.';
      window.localStorage.setItem('onboarded', 1);
    } else {
      console.log('not show modal');
    }
  });
  
  function handleClose() {
    document.getElementById('modal').style.display = 'none';
  }
  
  const listSkills = [
    {
      title: 'Full-stack Development',
      image: 'assets/img/image-1.jpeg',
      detail: 'Next.js, Go, PostgreSQL, Git, Docker',
      description: 'Develops and optimizes websites, CRM, CMS, and internal business systems. Experienced in translating business requirements into practical technical solutions.'
    },
    {
      title: 'Mobile Development',
      image: 'assets/img/image-2.jpeg',
      detail: 'Flutter, Clean Architecture, GetX',
      description: 'Builds mobile and tablet applications, including an Office Management System with visitor management, employee/non-employee flows, and vehicle logging.'
    },
    {
      title: 'Leadership',
      image: 'assets/img/image-3.jpeg',
      detail: 'Sprint planning, task allocation, technical guidance',
      description: 'Leads development teams by coordinating sprints, distributing workload fairly, guiding technical decisions, and collaborating with users and management.'
    },
    {
      title: 'cbn.id',
      image: 'assets/img/project-cbn-website.png',
      detail: 'Customer-facing website for CBN',
      description: 'Developed and optimized the cbn.id website by implementing new features to improve the digital customer experience using Next.js, Flutter, and Go across related CBN platforms.'
    },
    {
      title: 'diCBN Mobile App',
      image: 'assets/img/project-dicbn-mobile.png',
      detail: 'Mobile app for CBN customers',
      description: 'Contributed to the development and optimization of the diCBN mobile application, helping enhance customer-facing digital services with Flutter and supporting backend systems.'
    },
    {
      title: 'LingoPal',
      image: 'assets/img/project-lingopal.jpeg',
      detail: 'AI-powered English learning app',
      description: 'Designed and developed as a thesis project using Azure AI, LLMs, and NLP to support AI-assisted conversations and personalized English-learning feedback.'
    },
    {
      title: 'CBN Championship',
      image: 'assets/img/project-cbn-championship.png',
      detail: 'Gaming tournament microsite',
      description: 'Built a centralized platform for the CBN gaming community, including online tournament registration, announcements, schedules, and results.'
    },
    {
      title: 'Office Management System',
      image: 'assets/img/project-oms.png',
      detail: 'Tablet-based office operations app',
      description: 'Created an OMS application using Flutter with Clean Architecture and GetX for visitor management and vehicle logging/tracking workflows.'
    },
  ];
  
  function handleClick(index) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('title').textContent = listSkills[index].title;
    document.getElementById('image').innerHTML = `<img src="${listSkills[index].image}" alt="${listSkills[index].title}" />`;
    document.getElementById('detail').textContent = listSkills[index].detail;
    document.getElementById('description').textContent = listSkills[index].description;
  }

  document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target.id === 'modal') {
      handleClose();
    }
  });

  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      handleClose();
    }
  });

  function slideProjects(direction) {
    const slider = document.getElementById('projectSlider');
    const card = slider.querySelector('.card');
    const gap = 22;
    const distance = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction * distance,
      behavior: 'smooth'
    });
  }
