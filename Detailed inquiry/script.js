document.addEventListener('DOMContentLoaded', () => {
    const postId = 1; // 예시로 설정한 게시글 ID
    const currentUserId = 1; // 예시로 설정한 현재 사용자 ID
    const postAuthorId = 1; // 예시로 설정한 게시글 작성자 ID

    const editButton = document.getElementById('edit-button');
    const deleteButton = document.getElementById('delete-button');
    const postLikeButton = document.getElementById('post-like-button');
    const postLikeCount = document.getElementById('post-like-count');
    const replyLikeButtons = document.querySelectorAll('.reply-like-button');
    
    // 작성자일 경우에만 수정/삭제 버튼 표시
    if (currentUserId === postAuthorId) {
        editButton.style.display = 'inline-block';
        deleteButton.style.display = 'inline-block';
    }

    // 게시물 좋아요 버튼 클릭 이벤트
    postLikeButton.addEventListener('click', () => {
        let likes = parseInt(postLikeCount.innerText);
        likes += 1;
        postLikeCount.innerText = likes;
        // 서버에 좋아요 증가 요청을 보내는 코드 추가 필요
    });

    // 댓글 좋아요 버튼 클릭 이벤트
    replyLikeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCountElement = button.nextElementSibling;
            let likes = parseInt(likeCountElement.innerText);
            likes += 1;
            likeCountElement.innerText = likes;
            // 서버에 좋아요 증가 요청을 보내는 코드 추가 필요
        });
    });
});
