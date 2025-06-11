document.addEventListener('DOMContentLoaded', function() {
    
    const themeToggleBtn = document.getElementById('themeToggle');
    
    // CLAVE ÚNICA PARA TODAS LAS PÁGINAS
    const THEME_KEY = 'portfolio_theme_mode';
    
    // Verificar preferencia guardada o usar light como default
    const currentMode = localStorage.getItem(THEME_KEY) || 'light';
    
    // Aplicar el tema inmediatamente
    document.body.classList.add(currentMode + '-mode');
    updateButtonText(currentMode);
    
    // Event listener para el botón
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            let newMode;
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                newMode = 'light';
            } else {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                newMode = 'dark';
            }
            
            // Guardar con la clave única
            localStorage.setItem(THEME_KEY, newMode);
            updateButtonText(newMode);
        });
    }
    
    
    function updateButtonText(mode) {
        if (themeToggleBtn) {
            themeToggleBtn.textContent = mode === 'dark' ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙';
            // También podemos cambiar las clases de Bootstrap para el estilo
            themeToggleBtn.className = 'btn btn-sm ' + (mode === 'dark' ? 'btn-light' : 'btn-dark');
        }
    }
    
    
    document.body.style.visibility = 'visible';
});

// Con esto evito el FOUC
(function() {
    const THEME_KEY = 'portfolio_theme_mode';
    const savedMode = localStorage.getItem(THEME_KEY) || 'light';
    document.body.classList.add(savedMode + '-mode');
    document.body.style.visibility = 'hidden';
})();
