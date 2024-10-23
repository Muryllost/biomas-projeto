document.addEventListener('DOMContentLoaded', function() {
    // Função para verificar o estado de login ao carregar a página
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn === 'true') {
            alert("Você já está logado!");
            // Aqui você pode redirecionar o usuário para outra página
        }
    }

    // Checar estado de login quando a página é carregada
    checkLoginStatus();

    // Adiciona o event listener para o formulário de login
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir o envio tradicional do formulário

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificação simples (pode ser substituída por uma lógica real)
        if (username === 'admin' && password === '1234') {
            localStorage.setItem('isLoggedIn', 'true'); // Armazena o estado de login no localStorage
            alert("Login bem-sucedido!");
            // Aqui você pode redirecionar o usuário após o login
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });
});