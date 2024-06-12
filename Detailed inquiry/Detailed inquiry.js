document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const commentText = document.getElementById('comment-text').value;
    if (commentText.trim() !== "") {
        const commentList = document.getElementById('comment-list');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p>${commentText}</p>`;
        commentList.appendChild(newComment);

        document.getElementById('comment-text').value = "";
        updateCharCount(); // Clear the char count after submitting
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('comment-text');
    const charCount = document.getElementById('char-count');
    const initialHeight = textarea.clientHeight; // Store the initial height of the textarea

    function autoResize() {
        textarea.style.height = "50px"; // Temporarily reduce the height
        textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to scrollHeight
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

    // Initialize the textarea size and char count
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
