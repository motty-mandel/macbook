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
const controlPanel = document.querySelector('.control-panel');


finderIcon.addEventListener('click', () => {
    createFinderApp(finderIcon.id);
})

tvIcon.addEventListener('click', () => {
    createTvApp(tvIcon.id);
})

function createFinderApp(appName) {
    let appOpened = localStorage.getItem('finderAppOpen');

    if (appOpened == 0 || appOpened == null) {
        finderAppWindow = document.createElement('div');
        finderAppWindow.classList.add('app-window');

        finderCloseResize = document.createElement('div');
        finderCloseResize.classList.add('close-resize');
        finderAppWindow.appendChild(finderCloseResize);

        red = document.createElement('span');
        red.classList.add('red');
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
        finderAppWindow.appendChild(appHeader);

        document.body.appendChild(finderAppWindow);
        localStorage.setItem('finderAppOpen', 1);
    } else {
        localStorage.setItem('finderAppOpen', 0);
        document.body.removeChild(finderAppWindow);
    }
    finderAppDragging();
}

function finderAppDragging() {
    finderAppWindow.style.zIndex = '1';

    let isDraggingFinder = false;
    let offsetXFinder, offsetYFinder;
    // Start dragging
    finderCloseResize.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDraggingFinder = true;
        offsetXFinder = e.clientX - finderAppWindow.offsetLeft;
        offsetYFinder = e.clientY - finderAppWindow.offsetTop;
        finderAppWindow.style.cursor = 'grabbing';
    });

    // Dragging
    document.addEventListener('mousemove', (e) => {
        if (isDraggingFinder) {
            const newTop = e.clientY - offsetYFinder;

            // Prevent dragging higher than the control panel
            const controlPanelHeight = controlPanel.offsetHeight;
            if (newTop >= controlPanelHeight) {
                finderAppWindow.style.top = `${newTop}px`;
            }

            finderAppWindow.style.left = `${e.clientX - offsetXFinder}px`;
        }
    });

    // Stop dragging
    document.addEventListener('mouseup', () => {
        isDraggingFinder = false;
        finderAppWindow.style.cursor = 'default';
    });
}
// -----------------------------------------------------------

// ------------ Tv app opening and dragging ------------------

function createTvApp(appName) {
    let appOpened = localStorage.getItem('tvAppOpen');
    if (appOpened == 3 || appOpened == null) {
        tvAppWindow = document.createElement('div');
        tvAppWindow.classList.add('app-window');

        tvCloseResize = document.createElement('div');
        tvCloseResize.classList.add('close-resize');
        tvAppWindow.appendChild(tvCloseResize);

        red = document.createElement('span');
        red.classList.add('red');
        tvCloseResize.appendChild(red);

        yellow = document.createElement('span');
        yellow.classList.add('yellow');
        tvCloseResize.appendChild(yellow);

        green = document.createElement('span');
        green.classList.add('green');
        tvCloseResize.appendChild(green);

        appHeader = document.createElement('p');
        appHeader.classList.add('app-header');
        appHeader.textContent = `${appName}`;
        tvAppWindow.appendChild(appHeader);

        document.body.appendChild(tvAppWindow);
        localStorage.setItem('tvAppOpen', 2);
    } else {
        localStorage.setItem('tvAppOpen', 3);
        document.body.removeChild(tvAppWindow);
    }
    tvAppDragging();
}

function tvAppDragging() {
    tvAppWindow.style.zIndex = '1';

    let isDraggingTv = false;
    let offsetXTv, offsetYTv;
    // Start dragging
    tvCloseResize.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDraggingTv = true;
        offsetXTv = e.clientX - tvAppWindow.offsetLeft;
        offsetYTv = e.clientY - tvAppWindow.offsetTop;
        tvAppWindow.style.cursor = 'grabbing';
    });

    // Dragging
    document.addEventListener('mousemove', (e) => {
        if (isDraggingTv) {
            const newTop = e.clientY - offsetYTv;

            // Prevent dragging higher than the control panel
            const controlPanelHeight = controlPanel.offsetHeight;
            if (newTop >= controlPanelHeight) {
                tvAppWindow.style.top = `${newTop}px`;
            }

            tvAppWindow.style.left = `${e.clientX - offsetXTv}px`;
        }
    });

    // Stop dragging
    document.addEventListener('mouseup', () => {
        isDraggingTv = false;
        tvAppWindow.style.cursor = 'default';
    });
}

// ----------------------------------------------------------