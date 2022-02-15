async function loginFormHandler(event) {
    event.preventDefault();

    console.log('clicked');
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    const response = await fetch(`/api/users`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

document.querySelector('#loginSubmit').addEventListener('click', loginFormHandler);