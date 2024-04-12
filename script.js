document.addEventListener('DOMContentLoaded', function() {
  // Effetto di digitazione per il ruolo
  const roles = ['Full Stack Developer', 'Mobile Developer'];
  let currentRole = 0;
  let currentChar = 0;
  let currentText = '';
  let deleting = false;
  const speed = 100;
  const pauseEnd = 3000;
  const immediateChange = 10;

  function typeEffect() {
    const role = roles[currentRole];

    if (!deleting) {
        currentText = role.slice(0, ++currentChar);
    } else {
        currentText = role.slice(0, --currentChar);
    }

    // Aggiorna l'HTML di role per includere il cursore
    document.getElementById('role').innerHTML = currentText + '<span class="cursor">|</span>';

    if (!deleting && currentText === role) {
        // Testo completo: inizia a cancellare dopo una pausa
        setTimeout(() => { deleting = true; typeEffect(); }, pauseEnd);
    } else if (deleting && currentText === '') {
        // Testo completamente cancellato: cambia il ruolo e inizia a digitare nuovamente
        deleting = false;
        currentRole = (currentRole + 1) % roles.length;
        setTimeout(typeEffect, immediateChange);
    } else {
        // Continua a digitare o a cancellare
        setTimeout(typeEffect, deleting ? speed : speed);
    }
}

  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  function changeLinkState() {
      let index = sections.length;

      while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

      links.forEach((link) => link.classList.remove('active'));
      links[index].classList.add('active');
  }

  changeLinkState();
  window.addEventListener('scroll', changeLinkState);

  typeEffect(); // Avvia l'effetto di digitazione
});
