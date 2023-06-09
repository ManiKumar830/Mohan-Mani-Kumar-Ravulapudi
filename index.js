// Get all draggable items
const items = document.querySelectorAll('.item');

// Add event listeners for drag events
items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

// Store the dragged item
let draggedItem = null;

// Handle drag start event
function dragStart() {
    draggedItem = this;
    this.classList.add('dragging');
}

// Handle drag end event
function dragEnd() {
    this.classList.remove('dragging');
}

// Add event listeners for drop events
const dropzone = document.querySelector('.dropzone');
dropzone.addEventListener('dragover', dragOver);
dropzone.addEventListener('dragenter', dragEnter);
dropzone.addEventListener('dragleave', dragLeave);
dropzone.addEventListener('drop', drop);

// Handle drag over event
function dragOver(e) {
    e.preventDefault();

}

// Handle drag enter event
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('dragover');


}

// Handle drag leave event
function dragLeave() {
    this.classList.remove('dragover');

}

// Handle drop event
function drop() {
    this.classList.remove('dragover');
    this.innerHTML = draggedItem.innerHTML;
    draggedItem = null;
    showSuccessMessage();
}

function showSuccessMessage() {
    var successMessage = document.createElement('p');
    var main = document.getElementById("main");
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Item dropped successfully!';
    document.body.appendChild(successMessage);

    setTimeout(function() {
        successMessage.remove();
    }, 2000);
}

// Reset the containers to their original state
function resetContainers() {
    dropzone.innerHTML = 'Drop items here';
    items.forEach(item => {
        item.classList.remove('dragging');
    });


}