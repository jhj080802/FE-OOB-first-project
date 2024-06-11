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
    }
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

document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('comment-text');

    function autoResize() {
        textarea.style.height = 'auto'; // Temporarily reduces the height
        textarea.style.height = textarea.scrollHeight + 'px'; // Sets the height to scrollHeight
    }

    textarea.addEventListener('input', autoResize);
    textarea.addEventListener('input', handleExcessCharacters);

    // Initialize the textarea size
    autoResize();
});

function handleExcessCharacters() {
    const textarea = document.getElementById('comment-text');
    const commentText = textarea.value;

    if (commentText.length > 100) {
        textarea.value = commentText.slice(0, 100);
        textarea.setAttribute('maxlength', '100');
    } else {
        textarea.removeAttribute('maxlength');
    }
}
