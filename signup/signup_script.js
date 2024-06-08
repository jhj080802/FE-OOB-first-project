document.getElementById('togglePassword').addEventListener('click', function() {
    const password = document.getElementById('password');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
    const confirmPassword = document.getElementById('confirmPassword');
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const idPattern = /^[a-zA-Z0-9]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    if (!idPattern.test(id)) {
        alert('아이디는 영문자와 숫자만 사용 가능합니다.');
        event.preventDefault();
        return;
    }

    if (!passwordPattern.test(password)) {
        alert('비밀번호는 영문자, 숫자, 특수문자 중 두 가지 이상을 포함해야 합니다.');
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        event.preventDefault();
    }
});
