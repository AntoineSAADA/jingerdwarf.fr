// Exemple de petit script d’animation supplémentaire ou d'interactions
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page chargée, script.js opérationnel !');

  // On pourrait appliquer un effet plus avancé, par exemple ajouter une classe 
  // d’animation en différé, jouer avec le scroll, etc.
  const socialLinks = document.querySelector('.social-links');
  if (socialLinks) {
    // On applique un effet d’échelle au survol, par exemple
    socialLinks.addEventListener('mouseover', () => {
      socialLinks.style.transition = 'transform 0.5s ease';
      socialLinks.style.transform = 'rotate(2deg)';
    });
    socialLinks.addEventListener('mouseout', () => {
      socialLinks.style.transform = 'rotate(0deg)';
    });
  }
});
