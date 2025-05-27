document.querySelectorAll('.register-btn').forEach(btn => {
    btn.onclick = () => alert('Registered!');
});

document.querySelector('#categoryFilter').onchange = (e) => {
    console.log('Filter by:', e.target.value);
};

document.querySelector('#searchInput').onkeydown = (e) => {
    console.log('Search term:', e.target.value);
};
