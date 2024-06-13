function fetchData() {
    fetch('https://api.example.com/profile')
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 응답이 실패했습니다');
            }
            return response.json(); // JSON 응답일 경우; 텍스트 응답은 .text()를 사용합니다
        })
        .then(data => {
            // 받은 JSON 데이터 처리
            console.log(data); // 데이터 처리 로직을 여기에 넣으세요
        })
        .catch(error => {
            console.error('데이터 가져오기 오류:', error);
        });
}

document.querySelector('.title').addEventListener('click', function() {
    window.location = '/'; // 홈 페이지 URL
});

document.querySelector('#writing').addEventListener('click', function() {
    window.location = '/writing'; // 글 작성 페이지 URL
});

document.querySelector('#myProfile').addEventListener('click', function(event) {
    event.preventDefault();
    fetch('https://api.example.com/profile') // 프로필 데이터 가져오는 URL
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 응답이 실패했습니다');
            }
            return response.json(); // 프로필 데이터가 JSON으로 반환될 경우
        })
        .then(profileData => {
            // 프로필 데이터 처리 및 프로필 페이지로 이동
            console.log(profileData); // 데이터 처리 로직을 여기에 넣으세요
            // 예시: 데이터를 가져온 후 프로필 페이지로 이동
            window.location = '/profile'; // 프로필 페이지 URL
        })
        .catch(error => {
            console.error('프로필 데이터 가져오기 오류:', error);
        });
});

// title 누르면 home페이지로 이동 
// writing 누르면 글작성 페이지로 이동
// myProfile 누르면 마이페이지로 이동

document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let commentText = document.getElementById('comment-text').value;
    if (commentText.trim() !== "") {
        commentText = commentText.replaceAll("\n","<br>");
        const commentList = document.getElementById('comment-list');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="black"/>
            </svg>
            <span class="userName">나</span>
            <p>${commentText}</p>`;
        commentList.appendChild(newComment);

        document.getElementById('comment-text').value = "";

        const textarea = document.getElementById('comment-text');
        textarea.style.height = "50px";
        const charCount = document.getElementById('char-count');
        charCount.style.display = 'none';

        
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('comment-text');
    const charCount = document.getElementById('char-count');
    const initialHeight = textarea.clientHeight;

    function autoResize() {
        textarea.style.height = "50px";
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    function handleExcessCharacters() {
        const commentText = textarea.value;

        if (commentText.length > 100) {
            textarea.value = commentText.slice(0, 100);
        }
    }

    function updateCharCount() {
        const remaining = 100 - textarea.value.length;
        const currentHeight = textarea.clientHeight;

        if (currentHeight > initialHeight || textarea.value.includes('\n')) {
            charCount.textContent = `${remaining}`;
            charCount.style.display = 'block';
        } else {
            charCount.style.display = 'none';
        }
    }

    textarea.addEventListener('input', autoResize);
    textarea.addEventListener('input', handleExcessCharacters);
    textarea.addEventListener('input', updateCharCount);

    autoResize();
    updateCharCount();
});

document.addEventListener("DOMContentLoaded", function() {
    const commentText = document.getElementById("comment-text");
    const charCount = document.getElementById("char-count");
    const maxChars = 100;
    const initialHeight = commentText.clientHeight;

    commentText.addEventListener("input", function() {
        const textLength = commentText.value.length;
        charCount.textContent = maxChars - textLength;

        if (textLength > maxChars) {
            commentText.classList.add("excess");
        } else {
            commentText.classList.remove("excess");
        }

        if (commentText.scrollHeight > initialHeight) {
            charCount.style.display = "block";
        } else {
            charCount.style.display = "none";
        }
    });
});

let heartClicked = false;
document.getElementById('heart-button').addEventListener('click', function() {
    const heartCount = document.getElementById('heart-count');
    const currentCount = parseInt(heartCount.textContent);

    if (!heartClicked) {
        heartCount.textContent = currentCount + 1;
        this.classList.add('active');
    } else {
        heartCount.textContent = currentCount - 1;
        this.classList.remove('active');
    }
    heartClicked = !heartClicked;
});
