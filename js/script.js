window.addEventListener("load", function() {
    
    quick_progress();
    progress_ring();
    
});

// loads up the progress ring and count in 1s;
function progress_ring () {
    
    var ring = document.getElementsByClassName("progress");
    let radius;
    let percent;

    // loop through each one
    for (var j = 0; j < ring.length; j++) {

        radius = ring[j].getAttribute('r') / 2;
        percent = ring[j].getAttribute('data-percent');
            
        let circumference = 2 * radius * Math.PI;
        let draw = (percent * circumference) / 100;

        ring[j].setAttribute("stroke-dasharray", `${draw}`);
        
    }

}

// this function translate all quick up when window is loaded;
function quick_progress () {

    var container = document.getElementsByClassName("quick-facts");

    for (var j = 0; j < container.length; j++) {

        container[j].style.transform = "translateY(0)";

        // controls the time of it
        container[j].style.transitionDuration = "3s";

        // controls visibility
        container[j].style.opacity = "1";

    }

}

