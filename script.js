document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('username-error');
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const existingUsernames = ["user1", "user2"]; // 기존 사용자 아이디 목록 (예시)

    // 아이디 검증 (영문, 숫자)
    if (!usernameRegex.test(username)) {
        usernameError.textContent = '아이디는 영문과 숫자만 사용할 수 있습니다.';
        usernameError.style.display = 'block';
        return;
    } else if (existingUsernames.includes(username)) {
        usernameError.textContent = '이미 사용 중인 아이디입니다.';
        usernameError.style.display = 'block';
        return;
    } else {
        usernameError.style.display = 'none';
    }

    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d|(?=.*[@$!%*#?&]))[A-Za-z\d@$!%*#?&]{8,}$/;
    
    // 비밀번호 검증 (영문, 숫자, 특수문자 중 2개 이상)
    if (!passwordRegex.test(password)) {
        passwordError.textContent = '비밀번호는 영문과 숫자 또는 특수문자를 포함해야 합니다.';
        passwordError.style.display = 'block';
        return;
    } else {
        passwordError.style.display = 'none';
    }

    const confirmPassword = document.getElementById('confirm-password').value;
    const confirmPasswordError = document.getElementById('confirm-password-error');
    
    // 비밀번호 재입력 검증
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = '비밀번호가 일치하지 않습니다.';
        confirmPasswordError.style.display = 'block';
        return;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    // 모든 검증 통과
    alert('회원가입이 완료되었습니다!');
    document.getElementById('signup-form').reset();
});

function togglePasswordVisibility(fieldId, toggleIcon) {
    const field = document.getElementById(fieldId);
    if (field.type === 'password') {
        field.type = 'text';
        toggleIcon.textContent = '🙈';
    } else {
        field.type = 'password';
        toggleIcon.textContent = '👁️';
    }
}