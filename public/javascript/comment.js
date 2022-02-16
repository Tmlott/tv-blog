async function commentFormHandler(event) {
    event.preventDefault();

    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();

    const tv_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(comment);
    if (comment) {
        const response = await fetch('/api/review', {
            method: 'POST',
            body: JSON.stringify({
                tv_id,
                comment
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