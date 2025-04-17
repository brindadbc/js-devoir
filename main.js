document.addEventListener('DOMContentLoaded', function() {
    // Récupération des formulaires
    const loginForm = document.getElementById('login-form');//recuperation du formulaire de connection
    const registerForm = document.getElementById('register-form');//recuperation du formulaire d'inscription
    
    // Gestion de la connexion
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const messageElement = document.getElementById('login-message');
            
            // Récupération des utilisateurs depuis le localStorage
            const users = JSON.parse(localStorage.getItem('users')) ;
            
            // Vérification des identifiants
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Enregistrement de l'utilisateur connecté dans le localStorage
                const currentUser = {
                    username: user.username,
                    email: user.email
                };
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                // Message de réussite
                messageElement.textContent = 'Connexion réussie! Redirection...';
                messageElement.className = 'message success';
                
                // Redirection vers la page d'accueil 
                setTimeout(() => {
                    window.location.href = 'index.html';
                });
            } else {
                // Message d'erreur
                messageElement.textContent = 'Email ou mot de passe incorrect.';
                messageElement.className = 'message error';
            }
        });
    }
    
    // Gestion de l'inscription
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            const messageElement = document.getElementById('register-message');
            
            // Récupération des utilisateurs depuis le localStorage
            const users = JSON.parse(localStorage.getItem('users')) ;
            
            // Vérification si l'email est déjà utilisé
            if (users.some(user => user.email === email)) {
                messageElement.textContent = 'Cet email est déjà utilisé.';
                messageElement.className = 'message error';
                return;
            }
            
            // Vérification de la confirmation du mot de passe
            if (password !== confirmPassword) {
                messageElement.textContent = 'Les mots de passe ne correspondent pas.';
                messageElement.className = 'message error';
                return;
            }
            
            // Ajout du nouvel utilisateur
            const newUser = {
                username,
                email,
                password
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Message de réussite
            messageElement.textContent = 'Inscription réussie! Redirection vers la page de connexion...';
            messageElement.className = 'message success';
            
            // Redirection vers la page de connexion 
            setTimeout(() => {
                window.location.href = 'login.html';
            });
        });
    }
});





