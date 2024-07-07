document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(searchParams.entries());

    if (path.startsWith('/channel/')) {
        loadTemplate('templates/channel.html');
    } else if (path === '/search') {
        loadTemplate('templates/search.html');
    } else if (path.startsWith('/watch')) {
        const videoID = params.v;
        if (videoID) {
            loadTemplate('templates/video.html');
        } else {
            loadTemplate('templates/APIwait.html');
        }
    } else {
        // その他のパスに対する処理
        console.log('Unknown path:', path);
    }
});

function loadTemplate(templatePath) {
    fetch(templatePath)
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading template:', error);
        });
}
