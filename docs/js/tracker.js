var page = window.location.pathname.replace(/\//g, '').replace('.html', '') || 'index';
fetch('https://javsideline.com/pony/tracker.php?id=RTD_papas-freezeria-app&cl=' + encodeURIComponent(page), { mode: 'no-cors' });
