document.addEventListener('DOMContentLoaded', (event) => {
    fetch('utility/templates/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav_placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});