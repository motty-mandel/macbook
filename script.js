if (window.performance && window.performance.getEntriesByType) {
    const navigationEntries = window.performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
        const navType = navigationEntries[0].type;
        if (navType === 'reload') {
            localStorage.setItem('Finder', 0);
            localStorage.setItem('Tv', 0);
            localStorage.setItem('App', 0);
        } else {
            console.log('This page was not reloaded (e.g., first load, back/forward navigation).');
        }
    }
}
// ------------ Setting date and time ----------------------
const date = document.getElementById('date');
const time = document.getElementById('time');

const dateObj = new Date();
const monthNameShort = dateObj.toLocaleString('en-US', { month: 'short' });
const dayNameShort = dateObj.toLocaleString('en-US', { weekday: 'short' });

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
setInterval(() => {
    time.innerHTML = formatAMPM(new Date());
}, 1000);

date.innerHTML = dayNameShort + " " + monthNameShort + " " + dateObj.getDate();
// -----------------------------------------------------------

// ------------- Finder app opening and dragging -------------
const finderIcon = document.querySelector('.finder-icon');
const tvIcon = document.querySelector('.tv-icon');
const appStoreIcon = document.querySelector('.app-store-icon');

const controlPanel = document.querySelector('.control-panel');

finderIcon.addEventListener('click', () => {
    createFinderApp(finderIcon.id);
})

tvIcon.addEventListener('click', () => {
    createFinderApp(tvIcon.id);
})

appStoreIcon.addEventListener('click', () => {
    createFinderApp(appStoreIcon.id);
})

function createFinderApp(appName, appWindow) {
    let appOpened = localStorage.getItem(appName);

    if (appOpened == 0 || appOpened == null) {
        appWindow = document.createElement('div');
        appWindow.classList.add('app-window');
        appWindow.setAttribute('data-app', appName);
        appWindow.style.display = 'flex';

        finderCloseResize = document.createElement('div');
        finderCloseResize.classList.add('close-resize');
        appWindow.appendChild(finderCloseResize);

        red = document.createElement('span');
        red.classList.add('red');
        finderEx = document.createElement('p');
        finderEx.innerHTML = 'x';
        finderEx.style.lineHeight = '0.5';
        finderEx.style.fontSize = 'smaller';
        finderEx.style.fontFamily = " monospace"
        red.appendChild(finderEx);
        finderCloseResize.appendChild(red);

        yellow = document.createElement('span');
        yellow.classList.add('yellow');
        finderCloseResize.appendChild(yellow);

        green = document.createElement('span');
        green.classList.add('green');
        finderCloseResize.appendChild(green);

        appHeader = document.createElement('p');
        appHeader.classList.add('app-header');
        appHeader.textContent = `${appName}`;
        appWindow.appendChild(appHeader);

        document.body.appendChild(appWindow);
        console.log(appWindow)
        localStorage.setItem(appName, 1);
    } else {
        const existingWindow = document.querySelector(`.app-window[data-app="${appName}"]`);
        if (existingWindow) {
            document.body.removeChild(existingWindow);
        }
        localStorage.setItem(appName, 0);
    }
    finderAppDragging(appWindow);
}

function finderAppDragging(appWindow) {

    let isDraggingFinder = false;
    let offsetXFinder, offsetYFinder;
    // Start dragging
    finderCloseResize.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDraggingFinder = true;
        offsetXFinder = e.clientX - appWindow.offsetLeft;
        offsetYFinder = e.clientY - appWindow.offsetTop;
        appWindow.style.cursor = 'grabbing';

        document.querySelectorAll('.app-window').forEach(win => {
            win.style.zIndex = '0';
        });

        appWindow.style.zIndex = '1';
        appWindow.style.cursor = 'grabbing';
    });

    // Dragging
    document.addEventListener('mousemove', (e) => {
        if (isDraggingFinder) {
            const newTop = e.clientY - offsetYFinder;

            // Prevent dragging higher than the control panel
            const controlPanelHeight = controlPanel.offsetHeight;
            if (newTop >= controlPanelHeight) {
                appWindow.style.top = `${newTop}px`;
            }

            appWindow.style.left = `${e.clientX - offsetXFinder}px`;
        }
    });

    // Stop dragging
    document.addEventListener('mouseup', () => {
        isDraggingFinder = false;
        appWindow.style.cursor = 'default';
    });
}
// -----------------------------------------------------------