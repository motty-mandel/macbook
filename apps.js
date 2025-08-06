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
        finderEx.style.fontFamily = " monospace";
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
        appHeader.style.fontFamily = '-apple-system, BlinkMacSystemFont, sans-serif';
        appHeader.style.marginRight = '10px';
        appHeader.textContent = `${appName}`;
        appWindow.appendChild(appHeader);

        document.body.appendChild(appWindow);
        localStorage.setItem(appName, 1);
    } else {
        const existingWindow = document.querySelector(`.app-window[data-app="${appName}"]`);
        if (existingWindow) {
            document.body.removeChild(existingWindow);
        }
        localStorage.setItem(appName, 0);
    }
    finderAppDragging(appWindow);
    openClose(finderEx, appWindow, appName);
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

function openClose(closeButton, appWindow, appName) {
    closeButton.addEventListener('click', () => {
        document.body.removeChild(appWindow);
        localStorage.setItem(appName, 0);
        appWindow.style.cursor = 'default';
    });
};