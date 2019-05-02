
//Smooth Scroll 
const scroll = new SmoothScroll('#navbar a[href*="#"]', {
    speed: 800
});



//Display text on Landing
displayText = () => {
    document.getElementById("hidden").style.display = "block";

}

//Fade Text in when arriving
fadeIn = () => {
    //document.getElementById("navbar").style.opacity = "1";
    document.getElementById("hidden").style.opacity = "1";
    document.getElementById("social").style.opacity = "1";
}

//run fadeIn after 4 seconds
setTimeout(fadeIn,4000);

//display relevant greeting based on current time
displayGreeting = () => {
    let today = new Date();
    let currentTime = today.getHours();
    let greeting;

    if (currentTime > 18) {
        greeting = "Good Evening!";
    } else if (currentTime > 12) {
    greeting = "Good Afternoon!"
    } else if (currentTime > 0) {
    greeting = "Good Morning!"
    } else {
    greeting = "Hello!"
    }

    let about = document.getElementById("about-head").innerHTML = greeting + " My name is Ross Goodliffe";
}

//run greeting function on page load
window.onload = displayGreeting;

//thank you for submitting form
thankYou = () => {
    document.getElementById("contact").innerHTML = "<p>Thank you for getting in contact! I will be in touch shortly</p>";

}



