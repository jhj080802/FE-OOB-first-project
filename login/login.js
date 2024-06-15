document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('.login-button');

    function updateButtonState() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username.length >= 2 && username.length <= 15 && password.length >= 8) {
            loginButton.classList.add('active');
            loginButton.removeAttribute('disabled');
        } else {
            loginButton.classList.remove('active');
            loginButton.setAttribute('disabled', 'true');
        }
    }

    usernameInput.addEventListener('input', updateButtonState);
    passwordInput.addEventListener('input', updateButtonState);

    loginForm.addEventListener("submit", (event) => {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
    
        const loginData = {
            username: usernameInput,
            password: passwordInput,
        };
    
        const loginUrl = "https://localhost:8080/api/login";
    
        fetch(loginUrl, {
            method: "POST", // POST 방식으로 요청
            headers: {
                "Content-Type": "application/json", // JSON 형식으로 데이터 전송
            },
            body: JSON.stringify(loginData), // 데이터를 JSON 문자열로 변환하여 전송
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // JSON 형식으로 파싱된 응답 반환
            })
            .then((data) => {
                console.log("로그인 성공:", data); 
            })
            .catch((error) => {
                console.error("로그인 에러:", error); 
            });
            event.preventDefault();
    });
});