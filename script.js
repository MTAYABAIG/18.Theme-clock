// Selecting elements from the DOM
const hourEl = document.querySelector('.hour');
const mintEl = document.querySelector('.mint');
const secEl = document.querySelector('.sec');
const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time');
const toggle = document.querySelector('.toggle');

// Array of days and months
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Toggle button event listener for dark/light mode
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
});

// Initial call to setTime function
setTime();

// Function to set and update the time
function setTime() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const din = date.getDate();
    const hours = date.getHours();
    const hoursForClock = hours % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Rotating clock hands based on time
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    mintEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    // Displaying formatted time
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;

    // Displaying formatted date
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${din}</span>`;
}

// Updating the time every second
setInterval(setTime, 1000);

// Function to scale values from one range to another
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
