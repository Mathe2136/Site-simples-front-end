'use strict';

// Selecionamos especificamente o botão de tema (btn-um)
const switcher = document.querySelector('.btn-um');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    
    // Muda o texto do botão conforme o tema
    this.textContent = isDark ? 'Sol' : 'Lua';
});
