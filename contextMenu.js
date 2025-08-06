const customContextMenu = document.getElementById('customContextMenu');

document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Prevent default browser context menu

  // Position the custom menu
  customContextMenu.style.top = `${event.clientY}px`;
  customContextMenu.style.left = `${event.clientX}px`;

  // Show the custom menu
  customContextMenu.classList.add('show');
});

// Hide the custom menu when clicking anywhere else
document.addEventListener('click', () => {
  customContextMenu.classList.remove('show');
});

// Add functionality to menu items (example)
customContextMenu.querySelectorAll('div').forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked: ${item.textContent}`);
    customContextMenu.classList.remove('show'); // Hide after selection
  });
});