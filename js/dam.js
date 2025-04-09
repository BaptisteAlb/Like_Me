document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.like-container').forEach(container => {
        const icon = container.querySelector('.like-icon');
        const text = container.querySelector('.like-text');

        container.addEventListener('click', () => {
            const isLiked = container.classList.toggle('liked');
            icon.src = isLiked ? "img/miniature_like.png" : "img/miniature_unlike.png";
            text.style.color = isLiked ? "#007bff" : "";
        });
    });
});