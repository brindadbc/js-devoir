document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments 
    const btnLogin = document.getElementById('btn-login');
    const btnRegister = document.getElementById('btn-register');
    const userInfo = document.getElementById('user-info');
    const username = document.getElementById('username');
    const btnLogout = document.getElementById('btn-logout');
    
    // Vérifier si l'utilisateur est connecté
    checkAuthStatus();
    
   // Événements des boutons
    if (btnLogin){
        btnLogin.addEventListener('click', () =>{
            window.location.href = 'login.html';
        });
    }
    
    if (btnRegister) {
        btnRegister.addEventListener('click', () => {
            window.location.href = 'register.html';
        });
    }
    
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            // Supprimer les informations de connexion du localStorage
            localStorage.removeItem('currentUser');
            // Actualiser la page
            window.location.reload();
        });
    }
    
    // Fonctions
    function checkAuthStatus() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const authButtons = document.querySelector('.auth-buttons');
        
        if (currentUser) {
            // Utilisateur connecté
            if (authButtons) authButtons.classList.add('hidden');
            if (userInfo) {
                userInfo.classList.remove('hidden');
                username.textContent = currentUser.username;
            }
         } else {
            // Utilisateur non connecté
            if (authButtons) authButtons.classList.remove('hidden');
            if (userInfo) userInfo.classList.add('hidden');
        }
    }
});
