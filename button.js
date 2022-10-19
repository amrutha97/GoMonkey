// <!-- BUTTON -->
AFRAME.registerComponent('button', {
    init: function() {
        let sceneEl = document.querySelector('a-scene');
        let sky = document.querySelector('a-sky');

        button = document.createElement('a-entity');
        button.setAttribute('class', 'button');
        button.setAttribute('text',"value: START; width: 2; color: #000000; font: mozillavr; align: center;");
        button.setAttribute('position','0.75 1.5 0');
        button.setAttribute('material','color: blue');
        button.setAttribute('geometry','primitive: plane; width: 0.5; height: 0.25');
        button.setAttribute('clickable','');
        sky.setAttribute('event-set__mouseenter','color: green');
        sky.setAttribute('event-set__mouseleave','color: blue');

        sceneEl.appendChild(button);    
    }
});