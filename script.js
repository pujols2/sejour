document.getElementById('projetBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h2>Projet Pédagogique</h2><p>Contenu du projet pédagogique...</p>';
});

document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h2>Contact</h2><p>Nom1 (rôle) :  <a href="mailto:contact@example.com">contact@example.com</a> <a href="tel:+1234567890">+1234567890</a></br>';
    document.getElementById('content').innerHTML += 'Nom2 (rôle) :  <a href="mailto:contact@example.com">contact@example.com</a> <a href="tel:+1234567890">+1234567890</a></br></br>';
    document.getElementById('content').innerHTML += 'Nom3 (rôle) :  <a href="mailto:contact@example.com">contact@example.com</a> <a href="tel:+1234567890">+1234567890</a></br></p>';
});
