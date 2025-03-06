// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page chargée, script.js opérationnel !');

  // Sélectionne la section contenant les icônes
  const socialLinks = document.querySelector('.social-links');
  if (socialLinks) {
    // On applique un léger effet "perspective" quand on survole le conteneur
    socialLinks.addEventListener('mouseover', () => {
      socialLinks.style.transition = 'transform 0.6s ease';
      socialLinks.style.transform = 'perspective(600px) rotateX(5deg)';
    });
    socialLinks.addEventListener('mouseout', () => {
      socialLinks.style.transform = 'perspective(600px) rotateX(0deg)';
    });
  }
});
