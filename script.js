// ------------ Setting date and time --------------------
const date = document.getElementById('date');
const time = document.getElementById('time');

const dateObj = new Date();
const monthNameShort = dateObj.toLocaleString('en-US', {month: 'short'});
const dayNameShort = dateObj.toLocaleString('en-US', {weekday: 'short'});

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
setInterval(() => {
    time.innerHTML = formatAMPM(new Date());
}, 1000);

date.innerHTML = dayNameShort + " " + monthNameShort + " " + dateObj.getDate();
// ------------------------------------------------------

// ------------- Adding app grabbing -------------
const appWindow = document.querySelector('.app-window');
const closeResize = document.querySelector('.close-resize');
const controlPanel = document.querySelector('.control-panel');

let isDragging = false;
let offsetX, offsetY;

// Start dragging
closeResize.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    offsetX = e.clientX - appWindow.offsetLeft;
    offsetY = e.clientY - appWindow.offsetTop;
    appWindow.style.cursor = 'grabbing';
});

// Dragging
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const newTop = e.clientY - offsetY;

        // Prevent dragging higher than the control panel
        const controlPanelHeight = controlPanel.offsetHeight;
        if (newTop >= controlPanelHeight) {
            appWindow.style.top = `${newTop}px`;
        }

        appWindow.style.left = `${e.clientX - offsetX}px`;
    }
});

// Stop dragging
document.addEventListener('mouseup', () => {
    isDragging = false;
    appWindow.style.cursor = 'default';
});
// -------------------------------------------------------

// ------------- Working on app opening ---------------------
const finderIcon = document.querySelector('.finder-icon');
const tvIcon = document.querySelector('.tv-icon');
const appHeader = document.querySelector('.app-header')

finderIcon.addEventListener('click', () => {
    if (appWindow.style.display == "" || appWindow.style.display == "none") {
        appWindow.style.display = 'flex';
        appHeader.textContent = "Finder"
    } else {
        appWindow.style.display = 'none'
    }
})

tvIcon.addEventListener('click', () => {
    if (appWindow.style.display == "" || appWindow.style.display == "none") {
        appWindow.style.display = 'flex';
        appHeader.textContent = "Tv"
    } else {
        appWindow.style.display = 'none'
    }
})