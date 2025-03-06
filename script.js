document.addEventListener('DOMContentLoaded', () => {
  console.log('La page est chargée, script.js opérationnel !');

  // Appliquer un effet de perspective sur le conteneur des réseaux sociaux
  const socialLinks = document.querySelector('.social-links');
  if (socialLinks) {
    socialLinks.addEventListener('mouseenter', () => {
      socialLinks.style.transition = 'transform 0.6s ease';
      socialLinks.style.transform = 'perspective(600px) rotateX(5deg)';
    });
    socialLinks.addEventListener('mouseleave', () => {
      socialLinks.style.transform = 'perspective(600px) rotateX(0deg)';
    });
  }
});
