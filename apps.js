const finderIcon = document.querySelector('.finder-icon');
const tvIcon = document.querySelector('.tv-icon');
const appStoreIcon = document.querySelector('.app-store-icon');

const controlPanel = document.querySelector('.control-panel');

finderIcon.addEventListener('click', () => {
    createApp(finderIcon.id);
})

tvIcon.addEventListener('click', () => {
    createApp(tvIcon.id);
})

appStoreIcon.addEventListener('click', () => {
    createApp(appStoreIcon.id);
})

// -----------------------------------------------Creating the app

resizeRight = document.createElement('div');
resizeLeft = document.createElement('div');
resizeRight.classList.add('resize-handle', 'right');
resizeLeft.classList.add('resize-handle', 'left');

function createApp(appName, appWindow) {
    let appOpened = localStorage.getItem(appName);

    if (appOpened == 0 || appOpened == null) {
        appWindow = document.createElement('div');
        appWindow.classList.add('app-window');
        appWindow.setAttribute('data-app', appName);
        appWindow.style.display = 'flex';


        appWindow.appendChild(resizeRight);
        appWindow.appendChild(resizeLeft);

        finderCloseResize = document.createElement('div');
        finderCloseResize.classList.add('close-resize');
        appWindow.appendChild(finderCloseResize);

        // Creating the trafficlight buttons
        var red = document.createElement('span');
        red.innerHTML = `<svg enable-background="new 0 0 85.4 85.4" viewBox="0 0 85.4 85.4" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z" fill="#e24b41"/><path d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z" fill="#ed6a5f"/></g></svg>`
        red.classList.add('red');
        finderCloseResize.appendChild(red);
        red.addEventListener('mouseenter', () => {
            red.innerHTML = `<svg enable-background="new 0 0 85.4 85.4" viewBox="0 0 85.4 85.4" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z" fill="#e24b41"/><path d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z" fill="#ed6a5f"/><g fill="#460804"><path d="m22.5 57.8 35.3-35.3c1.4-1.4 3.6-1.4 5 0l.1.1c1.4 1.4 1.4 3.6 0 5l-35.3 35.3c-1.4 1.4-3.6 1.4-5 0l-.1-.1c-1.3-1.4-1.3-3.6 0-5z"/><path d="m27.6 22.5 35.3 35.3c1.4 1.4 1.4 3.6 0 5l-.1.1c-1.4 1.4-3.6 1.4-5 0l-35.3-35.3c-1.4-1.4-1.4-3.6 0-5l.1-.1c1.4-1.3 3.6-1.3 5 0z"/></g></g></svg>`
        });
        red.addEventListener('mouseleave', () => {
            red.innerHTML = `<svg enable-background="new 0 0 85.4 85.4" viewBox="0 0 85.4 85.4" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z" fill="#e24b41"/><path d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z" fill="#ed6a5f"/></g></svg>`
        });

        var yellow = document.createElement('span');
        yellow.innerHTML = `<svg enable-background="new 0 0 85.4 85.4" viewBox="0 0 85.4 85.4" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z" fill="#e1a73e"/><path d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z" fill="#f6be50"/></g></svg>`
        yellow.classList.add('yellow');
        finderCloseResize.appendChild(yellow);
        yellow.addEventListener('mouseenter', () => {
            yellow.innerHTML = `<svg enable-background="new 0 0 85.4 85.4" viewBox="0 0 85.4 85.4" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z" fill="#e1a73e"/><path d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z" fill="#f6be50"/><path d="m17.8 39.1h49.9c1.9 0 3.5 1.6 3.5 3.5v.1c0 1.9-1.6 3.5-3.5 3.5h-49.9c-1.9 0-3.5-1.6-3.5-3.5v-.1c0-1.9 1.5-3.5 3.5-3.5z" fill="#90591d"/></g></svg>`
        });
        yellow.addEventListener('mouseleave', () => {
            yellow.innerHTML = `<svg enable-background="new 0 0 85.4 85.4" viewBox="0 0 85.4 85.4" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z" fill="#e1a73e"/><path d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z" fill="#f6be50"/></g></svg>`
        });

        var green = document.createElement('span');
        green.innerHTML = `<svg enable-background="new 0 0 85.4 85.4" viewBox="0 0 85.4 85.4" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z" fill="#2dac2f"/><path d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z" fill="#61c555"/></g></svg>`
        green.classList.add('green');
        finderCloseResize.appendChild(green);
        green.addEventListener('mouseenter', () => {
            green.innerHTML = `<svg enable-background="new 0 0 85.4 85.4" viewBox="0 0 85.4 85.4" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z" fill="#2dac2f"/><path d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1c0 21.5 17.5 39.1 39.1 39.1z" fill="#61c555"/><path d="m31.2 20.8h26.7c3.6 0 6.5 2.9 6.5 6.5v26.7zm23.2 43.7h-26.8c-3.6 0-6.5-2.9-6.5-6.5v-26.8z" fill="#2a6218"/></g></svg>`
        });
        green.addEventListener('mouseleave', () => {
            green.innerHTML = `<svg enable-background="new 0 0 85.4 85.4" viewBox="0 0 85.4 85.4" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z" fill="#2dac2f"/><path d="m42.7 81.8c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z" fill="#61c555"/></g></svg>`
        });

        // Setting app header name
        appHeader = document.createElement('p');
        appHeader.classList.add('app-header');
        appHeader.style.fontFamily = '-apple-system, BlinkMacSystemFont, sans-serif';
        appHeader.textContent = `${appName}`;
        finderCloseResize.appendChild(appHeader);

        document.body.appendChild(appWindow);
        document.getElementById(`${appName}`).classList.add('active');
        localStorage.setItem(appName, 1);
    } else {
        const existingWindow = document.querySelector(`.app-window[data-app="${appName}"]`);
        if (existingWindow) {
            document.body.removeChild(existingWindow);
            document.getElementById(`${appName}`).classList.remove('active');
        }
        localStorage.setItem(appName, 0);
    }
    appDragging(appWindow, finderCloseResize);
    openClose(red, appWindow, appName);
    setupResizing(appWindow);
};

// --------------------------------------------------Resizing

function setupResizing(appWindow) {
    const rightHandle = appWindow.querySelector('.right');
    
    if (!rightHandle) return;

    let resizing = false;
    let startX;
    let startWidth;

    rightHandle.addEventListener("pointerdown", e => {
        resizing = true;

        startX = e.clientX;
        startWidth = appWindow.offsetWidth;
    });

    document.addEventListener("pointermove", e => {
        if (!resizing) return;

        const dx = e.clientX - startX;

        appWindow.style.width = startWidth + dx + "px";
        appWindow.style.cursor = "ew-resize";
    });

    document.addEventListener("pointerup", () => {
        resizing = false;
    });
}

// --------------------------------------------------Dragging

function appDragging(appWindow) {

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

// ----------------------------------------------Closing

function openClose(closeButton, appWindow, appName) {
    closeButton.addEventListener('click', () => {
        document.body.removeChild(appWindow);
        localStorage.setItem(appName, 0);
        appWindow.style.cursor = 'default';
    });
};

// -----------------------------------------------Shadow effect

