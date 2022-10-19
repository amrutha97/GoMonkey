// <!-- TIMER -->
AFRAME.registerComponent('timer', {
    init: function() {
        let sceneEl = document.querySelector('a-scene');
        timer = document.createElement('a-entity');
        timer.setAttribute('id', 'timer');
        timer.setAttribute('text',"value: 0:00; color: #000000; font: mozillavr; letterSpacing: 1; align: center;");
        timer.setAttribute('position','0 1.3 0');
        timer.setAttribute('scale', '2 2 2');
        sceneEl.appendChild(timer);    

        seconds = 60;
        function onTimer() {
            timer.setAttribute('text',"value: "+ seconds +"; color: #000000; font: mozillavr; letterSpacing: 1; align: center;");
            seconds--;
            if (seconds < 0) {
                timer.setAttribute('text',"value: GAME OVER; color: #000000; font: mozillavr; letterSpacing: 1; align: center;");
            }
            else {
                setTimeout(onTimer, 1000);
            }
        }
        // TODO: Only call this on click of start button and/or change of game state
        onTimer()
    }
});

