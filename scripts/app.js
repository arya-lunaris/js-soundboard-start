
const buttons = document.querySelectorAll("button");

const handleSoundButton = (event) => {
    if (event.target.id === "work-it") {
        const workIt = new Audio("sounds/work_it.wav");
        workIt.play();
    } else if (event.target.id === "make-it") {
        const makeIt = new Audio("sounds/make_it.wav");
        makeIt.play();
    } else if (event.target.id === "do-it") {
        const doIt = new Audio("sounds/do_it.wav");
        doIt.play();
    } else if (event.target.id === "makes-us") {
        const makesUs = new Audio("sounds/makes_us.wav");
        makesUs.play();
    } else if (event.target.id === "harder") {
        const harder = new Audio("sounds/harder.wav");
        harder.play();
    } else if (event.target.id === "better") {
        const better = new Audio("sounds/better.wav");
        better.play();
    } else if (event.target.id === "faster") {
        const faster = new Audio("sounds/faster.wav");
        faster.play();
    } else if (event.target.id === "stronger") {
        const stronger = new Audio("sounds/stronger.wav");
        stronger.play();
    } else if (event.target.id === "more-than") {
        const moreThan = new Audio("sounds/more_than.wav");
        moreThan.play();
    } else if (event.target.id === "hour") {
        const hour = new Audio("sounds/hour.wav");
        hour.play();
    } else if (event.target.id === "our") {
        const our = new Audio("sounds/our.wav");
        our.play();
    } else if (event.target.id === "never") {
        const never = new Audio("sounds/never.wav");
        never.play();
    } else if (event.target.id === "ever") {
        const ever = new Audio("sounds/ever.wav");
        ever.play();
    } else if (event.target.id === "after") {
        const after = new Audio("sounds/after.wav");
        after.play();
    } else if (event.target.id === "work-is") {
        const workIs = new Audio("sounds/work_is.wav");
        workIs.play();
    } else if (event.target.id === "over") {
        const over = new Audio("sounds/over.wav");
        over.play();
    }
}

const handleHoverOver = (event) => {
    event.target.style.backgroundImage = "url('images/daftpunk.gif')";
    event.target.style.backgroundSize = "cover";
    event.target.style.backgroundRepeat = "no-repeat";
}


const handleHoverAway = (event) => {
    event.target.style.backgroundImage = "none";
}

buttons.forEach(button => {
    button.addEventListener("click", handleSoundButton);
})

buttons.forEach(button => {
    button.addEventListener("mouseenter", handleHoverOver);
})

buttons.forEach(button => {
    button.addEventListener("mouseleave", handleHoverAway);
})

