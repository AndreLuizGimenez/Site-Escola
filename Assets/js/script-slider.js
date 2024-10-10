const slideshowContainer = document.querySelector('.slideshow-container');
const slidesSections = document.querySelectorAll('.slides-section');
const dots = document.querySelectorAll('.dot');
const courseTabs = document.querySelectorAll('.course-tab');

let currentSection = 0;
let currentSlide = 0;

// Atualiza a visibilidade dos slides
function updateSlidesVisibility() {
  slidesSections.forEach((section, index) => {
    section.style.display = index === currentSection ? 'flex' : 'none';
  });
}

// Atualiza a navegação dos slides
function updateSlideshow() {
  const section = slidesSections[currentSection];
  section.style.transform = `translateX(${-currentSlide * 100}%)`; // Ajusta para 100% por slide
  updateDots();
}

// Atualiza os pontos de navegação
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Função para atualizar a seção e o slide com base no ID clicado
function navigateToSection(sectionId) {
  const sectionMap = {
    'analise': 0,
    'quimica': 1,
    'agronegocios': 2,
    'farmacia': 3,
    'vestuario': 4,
    'marketing': 5,
    'seguranca': 6,
    'recursos-humanos': 7,
    'formacao': 8
  };

  const index = sectionMap[sectionId];
  if (index !== undefined) {
    currentSection = index;
    currentSlide = 0; // Reinicia para o primeiro slide
    updateSlidesVisibility();
    updateSlideshow();
    courseTabs.forEach(t => t.classList.remove('active'));
    courseTabs[index].classList.add('active'); // Marca a aba como ativa
  }
}

// Eventos para os botões de curso
courseTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    currentSection = index;
    currentSlide = 0; // Reinicia para o primeiro slide
    updateSlidesVisibility();
    updateSlideshow();
    courseTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Adiciona eventos de clique para cada ID de seção
const sectionIds = ['analise', 'quimica', 'agronegocios', 'farmacia', 'vestuario', 'marketing', 'seguranca', 'recursos-humanos', 'formacao'];
sectionIds.forEach(id => {
  document.getElementById(id).addEventListener('click', () => navigateToSection(id));
});

// Navegação entre os slides
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % 2; 
  updateSlideshow();
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + 2) % 2; 
  updateSlideshow();
});


updateSlidesVisibility();
updateSlideshow();
