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
