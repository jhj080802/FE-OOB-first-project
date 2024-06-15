document.getElementById('registrationForm').addEventListener('input', function() {
    const nickname = document.getElementById('nickname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const submitBtn = document.getElementById('submitBtn');

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const togglePasswordButton = document.getElementById('togglePassword');
    const toggleConfirmPasswordButton = document.getElementById('toggleConfirmPassword');

    const showPasswordIcon = document.getElementById('showPassword');
    const showConfirmPasswordIcon = document.getElementById('showConfirmPassword');

    const hidePasswordIcon = document.getElementById('hidePassword');
    const hideConfirmPasswordIcon = document.getElementById('hideConfirmPassword');


    const nicknameError = document.getElementById('nicknameError');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    const isNicknameValid = /^[a-zA-Z0-9]+$/.test(nickname) && nickname.length >= 2 && nickname.length <= 15;
    const isUsernameValid = /^[a-zA-Z0-9]+$/.test(username) && username.length >= 2 && username.length <= 15;
    
    const hasLetter = /[A-Za-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);
    const isPasswordValid = password.length >= 8 && (
        (hasLetter && hasDigit) || 
        (hasLetter && hasSpecialChar) || 
        (hasDigit && hasSpecialChar)
    );
    
    const doPasswordsMatch = password === confirmPassword;

    if (!isNicknameValid) {
        document.getElementById('nickname').classList.add('error');
        nicknameError.textContent = '닉네임는 영문, 숫자만 사용하여 2글자 이상 15글자 이하여야합니다.';
        document.querySelector('label[for="nickname"]').classList.add('error');

    } else {
        document.getElementById('nickname').classList.remove('error');
        nicknameError.textContent = '';
        document.querySelector('label[for="nickname"]').classList.remove('error');
    }

    if (!isUsernameValid) {
        document.getElementById('username').classList.add('error');
        usernameError.textContent = '아이디는 영문, 숫자만 사용하여 2글자 이상 15글자 이하여야합니다.';
        document.querySelector('label[for="username"]').classList.add('error');

    } else {
        document.getElementById('username').classList.remove('error');
        usernameError.textContent = '';
        document.querySelector('label[for="username"]').classList.remove('error');
    }

    if (!isPasswordValid) {
        document.getElementById('password').classList.add('error');
        passwordError.textContent = '비밀번호는 영문, 숫자, 특수문자 중 2개 이상 포함하여 8글자 이상이어야 합니다.';
        document.getElementById('confirmPassword').classList.add('error');
        document.querySelector('label[for="password"]').classList.add('error');
    } else {
        document.getElementById('password').classList.remove('error');
        passwordError.textContent = '';
        document.getElementById('confirmPassword').classList.remove('error');
        document.querySelector('label[for="password"]').classList.remove('error');
    }

    if (!doPasswordsMatch) {
        document.getElementById('confirmPassword').classList.add('error');
        confirmPasswordError.textContent = '비밀번호가 일치하지 않습니다.';
        document.querySelector('label[for="confirmPassword"]').classList.add('error');
    } else {
        document.getElementById('confirmPassword').classList.remove('error');
        confirmPasswordError.textContent = '';
        document.querySelector('label[for="confirmPassword"]').classList.remove('error');
    }

    if (isUsernameValid && isPasswordValid && doPasswordsMatch) {
        submitBtn.classList.add('active');
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.remove('active');
        submitBtn.disabled = true;
    }

    usernameInput.addEventListener('input', updateButtonState);
    passwordInput.addEventListener('input', updateButtonState);
    confirmPasswordInput.addEventListener('input', updateButtonState);
    
    togglePasswordButton.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        if (type === 'text') {
            showPasswordIcon.style.display = 'inline';
            hidePasswordIcon.style.display = 'none';
        } else {
            showPasswordIcon.style.display = 'none';
            hidePasswordIcon.style.display = 'inline';
        }
    });

    toggleConfirmPasswordButton.addEventListener('click', () => {
        const type = confirmPasswordInput.getAttribute('type') === 'confirmPassword' ? 'text' : 'confirmPassword';
        confirmPasswordInput.setAttribute('type', type);

        if (type === 'text') {
            showConfirmPasswordIcon.style.display = 'inline';
            hideConfirmPasswordIcon.style.display = 'none';
        } else {
            showConfirmPasswordIcon.style.display = 'none';
            hideConfirmPasswordIcon.style.display = 'inline';
        }
    });
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    // const username = document.getElementById('username').value;
    // const nickname = document.getElementById('nickname').value;
    // const password = document.getElementById('password').value;
    // const confirmPassword = document.getElementById('confirmPassword').value;
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const nicknameInput = document.getElementById('nickname');
    
    if(password !== confirmPassword) return;

    const userData = {
        name: usernameInput.value,
        nickname: nicknameInput.value,
        password: passwordInput.value
    };

    const signupUrl = "https://localhost:8080/api/signup";

    fetch(signupUrl, {
        method: "POST", // POST 방식으로 요청
        headers: {
            "Content-Type": "application/json", // JSON 형식으로 데이터 전송
        },
        body: JSON.stringify(userData), // 데이터를 JSON 문자열로 변환하여 전송
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // JSON 형식으로 파싱된 응답 반환
        })
        .then((data) => {
            console.log("회원가입 성공:", data); // 서버에서 반환한 데이터 출력 (예: 성공 메시지 등)
        })
        .catch((error) => {
            console.error("회원가입 에러:", error); // 에러 발생 시 에러 메시지 출력
        });

    event.preventDefault();
    alert("회원가입 완료");
});

