document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
  });

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              if (entry.target.classList.contains('left-right')) {
                  entry.target.classList.add('left-right-visible');
              } else {
                  entry.target.classList.add('visible');
              }
          } else {
              if (entry.target.classList.contains('left-right')) {
                  entry.target.classList.remove('left-right-visible');
              } else {
                  entry.target.classList.remove('visible');
              }
          }
      });
  });

  const hiddenElements = document.querySelectorAll('.hidden, .left-right');
  hiddenElements.forEach(el => observer.observe(el));
});


document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              if (entry.target.classList.contains('right-left')) {
                  entry.target.classList.add('right-left-visible');
              } else {
                  entry.target.classList.add('visible');
              }
          } else {
              if (entry.target.classList.contains('right-left')) {
                  entry.target.classList.remove('right-left-visible');
              } else {
                  entry.target.classList.remove('visible');
              }
          }
      });
  });

  const hiddenElements = document.querySelectorAll('.hidden, .right-left');
  hiddenElements.forEach(el => observer.observe(el));
});

function toggleMenu() {
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}