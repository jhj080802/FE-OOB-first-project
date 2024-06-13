document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('.login-button');

    function updateButtonState() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username.length >= 2 && password.length >= 8) {
            loginButton.classList.add('active');
            loginButton.removeAttribute('disabled');
        } else {
            loginButton.classList.remove('active');
            loginButton.setAttribute('disabled', 'true');
        }
    }

    usernameInput.addEventListener('input', updateButtonState);
    passwordInput.addEventListener('input', updateButtonState);

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (loginButton.classList.contains('active')) {
            const username = usernameInput.value;
            const password = passwordInput.value;

            // Fetch API를 사용하여 로그인 요청을 보냅니다.
            fetch('https://example.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    alert('로그인 성공');
                    // 홈 페이지로 이동합니다.
                    window.location.href = 'home.html';
                    // window.location.href = 'home.html';
                } else {
                    alert('로그인 실패: ' + data.message);
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                alert('로그인 중 오류가 발생했습니다.');
            });
        } else {
            alert('아이디와 비밀번호를 6자 이상 입력해주세요');
        }
    });
});
