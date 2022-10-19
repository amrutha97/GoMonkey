// <!-- GAME STATE -->
const States = {
	Start: 1,
	Pause: 2,
	Restart: 3,
}

AFRAME.registerComponent('game-state', {
    init: function() {
        let sceneEl = document.querySelector('a-scene');
        label = document.createElement('a-entity');
        label.setAttribute('id', 'label');
        label.setAttribute('text',"value: GO MONKEY!; color: #000000; font: mozillavr; letterSpacing: 1; align: center;");
        label.setAttribute('position','0 2 0');
        label.setAttribute('scale', '6 6 6');
        sceneEl.appendChild(label);                
    }
});