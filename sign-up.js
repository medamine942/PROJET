const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // le formulaire ne s'envoie pas automatiquement quand on appui dessus

    let isValid = true;

    // Rinitialiser les messages d'ereur
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));

    const nom = form.nom.value.trim();//trim est utilisé pour eliminer les espaces
    const prenom = form.prenom.value.trim();
    const email = form.email.value.trim();
    const tel = form.telephone.value.trim();
    const sujet = form.sujet.value.trim();
    const message = form.message.value.trim();
    const privacyChecked = document.getElementById('privacy').checked;

    // Validation Nom
    if (nom === '') {
      document.getElementById('nomError').textContent = "Le nom est obligatoire.";
      form.nom.classList.add('error');
      isValid = false;
    }

    // Validation Prénom
    if (prenom === '') {
      document.getElementById('prenomError').textContent = "Le prénom est obligatoire.";
      form.prenom.classList.add('error');
      isValid = false;
    }

    // Validation Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
      document.getElementById('emailError').textContent = "L'email est obligatoire.";
      form.email.classList.add('error');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = "Veuillez entrer un email valide.";
      form.email.classList.add('error');
      isValid = false;
    }

    // Validation Téléphone
    const phonePattern = /^[0-9]{12}$/;
    if (tel === '') {
      document.getElementById('telError').textContent = "Le téléphone est obligatoire.";
      form.telephone.classList.add('error');
      isValid = false;
    } else if (!phonePattern.test(tel)) {
      document.getElementById('telError').textContent = "Le téléphone doit contenir exactement 12 chiffres.";
      form.telephone.classList.add('error');
      isValid = false;
    }

    // Validation Sujet
    if (sujet === '') {
      document.getElementById('sujetError').textContent = "Le sujet est obligatoire.";
      form.sujet.classList.add('error');
      isValid = false;
    }

    // Validation Message
    if (message === '') {
      document.getElementById('messageError').textContent = "Le message est obligatoire.";
      form.message.classList.add('error');
      isValid = false;
    }

    // Validation Privacy Checkbox
    if (!privacyChecked) {
      document.getElementById('privacyError').textContent = "Vous devez accepter la politique de confidentialité.";
      isValid = false;
    }

    if (isValid) {
      form.submit(); // si tous est respecté le formulaire est envoye
    }
  });
