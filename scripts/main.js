function showTab(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
      section.style.display = 'none';
      section.classList.remove('show');
  });
  document.getElementById(sectionId).style.display = 'block';
  document.getElementById(sectionId).classList.add('show');
}