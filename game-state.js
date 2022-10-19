// <!-- GAME STATE -->
const States = {
	Start: 1,
	Pause: 2,
	Restart: 3,
}

AFRAME.registerComponent('game-state', {
    init: function() {
        let sceneEl = document.querySelector('a-scene');
        gamestate = document.createElement('a-entity');
        gamestate.setAttribute('id', 'gamestate');
        gamestate.setAttribute('text',"value: GO MONKEY!; color: #000000; font: mozillavr; letterSpacing: 1; align: center;");
        gamestate.setAttribute('position','0 2 0');
        gamestate.setAttribute('scale', '6 6 6');
        sceneEl.appendChild(gamestate);                
    }
});