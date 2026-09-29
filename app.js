let draggedItem = null;
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', () => { draggedItem = item; });
});
document.querySelectorAll('[data-dropzone]').forEach(zone => {
    zone.addEventListener('dragover', event => { event.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', event => {
        event.preventDefault();
        zone.classList.remove('drag-over');
        if (draggedItem) zone.appendChild(draggedItem);
    });
});
document.getElementById('search').addEventListener('input', event => {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll('#pool .item').forEach(item => {
        item.hidden = !item.textContent.toLowerCase().includes(query);
    });
});
document.getElementById('add-item').addEventListener('click', () => {
    const name = prompt('What item would you like to add?');
    if (!name || !name.trim()) return;
    const item = document.createElement('div');
    item.className = 'item';
    item.draggable = true;
    item.textContent = name.trim();
    item.addEventListener('dragstart', () => { draggedItem = item; });
    document.getElementById('pool').appendChild(item);
});
document.getElementById('reset').addEventListener('click', () => {
    document.querySelectorAll('.tier-items .item').forEach(item => document.getElementById('pool').appendChild(item));
});
document.getElementById('save').addEventListener('click', () => {
    const results = [...document.querySelectorAll('.tier')].map(tier =>
        `${tier.dataset.tier}: ${[...tier.querySelectorAll('.item')].map(item => item.textContent).join(', ') || '—'}`
    ).join('\n');
    alert('Your tier list\n\n' + results);
});
