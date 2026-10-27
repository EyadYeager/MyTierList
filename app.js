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

