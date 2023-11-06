function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simples validação de usuário e senha (apenas para fins de exemplo)
    if (isValidEmail(email) && isValidPassword(password)) {
        alert('Login bem-sucedido!');
    } else {
        errorMessage.innerHTML = 'Email ou senha inválidos';
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

function showRecoveryForm() {
    hideAllForms();
    document.getElementById('recovery-form').style.display = 'block';
}

function recoverPassword() {
    var recoveryEmail = document.getElementById('recovery-email').value;
    // Lógica de recuperação de senha (simulação)
    alert('Um e-mail de recuperação foi enviado para ' + recoveryEmail);
}

function showRegisterForm() {
    hideAllForms();
    document.getElementById('register-form').style.display = 'block';
}

function register() {
    var registerEmail = document.getElementById('register-email').value;
    var registerPassword = document.getElementById('register-password').value;
    // Lógica de cadastro (simulação)
    alert('Cadastro bem-sucedido para ' + registerEmail);
}

function showLoginForm() {
    hideAllForms();
    document.getElementById('login-form').style.display = 'block';
}

function hideAllForms() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('recovery-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
}
