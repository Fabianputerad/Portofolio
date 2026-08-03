/**
 * Start of script file
 */
window.addEventListener('load', function() {
    if (window.localStorage.getItem('onboarded') != 1) {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('title').textContent = 'Hello World!';
      document.getElementById('image').innerHTML = '';
      document.getElementById('detail').textContent = 'Welcome to My Personal Website';
      document.getElementById('description').textContent = 'Here you can see my latest project and portfolio';
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
      title: 'Programming',
      image: 'assets/img/image-1.jpeg',
      detail: 'About Programming',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab numquam quisquam veritatis minima iusto!'
    },
    {
      title: 'Communication',
      image: 'assets/img/image-2.jpeg',
      detail: 'About Communication',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab numquam quisquam veritatis minima iusto!'
    },
    {
      title: 'Design',
      image: 'assets/img/image-3.jpeg',
      detail: 'About Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab numquam quisquam veritatis minima iusto!'
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
