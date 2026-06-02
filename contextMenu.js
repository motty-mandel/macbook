const customContextMenu = document.getElementById('customContextMenu');
const contextMenuBorder = document.getElementById('contextMenuBorder');

document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Prevent default browser context menu

  // Position the custom menu
  customContextMenu.style.top = `${event.clientY}px`;
  customContextMenu.style.left = `${event.clientX}px`;

  // contextMenuBorder.style.top = `${event.clientY}px`;
  // contextMenuBorder.style.left = `${event.clientX}px`;

  // Show the custom menu
  customContextMenu.classList.add('show');
  // contextMenuBorder.classList.add('show');

});

// Hide the custom menu when clicking anywhere else
document.addEventListener('click', () => {
  customContextMenu.classList.remove('show');
  // contextMenuBorder.classList.remove('show');
});

// Add functionality to menu items (example)
customContextMenu.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked: ${item.textContent}`);
    customContextMenu.classList.remove('show'); // Hide after selection
  });
});