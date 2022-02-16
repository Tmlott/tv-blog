async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const review_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(comment_text, review_id);
    if (comment_text) {
        const response = await fetch('/api/review', {
            method: 'POST',
            body: JSON.stringify({
                review_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }

}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);