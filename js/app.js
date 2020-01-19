//Smooth Scroll 
const scroll = new SmoothScroll('#navbar a[href*="#"]', {
    speed: 800
});


//Fade in Subtitle and Social img  
fadeIn = () => {
    document.getElementById("hidden-title").style.opacity = "1";
    document.getElementById("social").style.opacity = "1";
}

//run fadeIn after 1 second
setTimeout(fadeIn,1000);


//Display relevant greeting based on current time
displayGreeting = () => {
    let today = new Date();
    let currentTime = today.getHours();
    let greeting;

    if (currentTime > 17) {
        greeting = "Good Evening!";
    } else if (currentTime > 12) {
    greeting = "Good Afternoon!"
    } else if (currentTime > 0) {
    greeting = "Good Morning!"
    } else {
    greeting = "Hello!"
    }

    let about = document.getElementById("greeting").innerHTML = greeting + " My name is Ross Goodliffe";
}

//run greeting function on page load
window.onload = displayGreeting();

// window.onload;