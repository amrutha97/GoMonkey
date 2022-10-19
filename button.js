// <!-- BUTTON -->
AFRAME.registerComponent('button', {
    init: function() {
        let sceneEl = document.querySelector('a-scene');
        button = document.createElement('a-entity');
        button.setAttribute('id', 'button');
        button.setAttribute('class', 'button');
        button.setAttribute('text',"value: START; width: 2; color: #000000; font: mozillavr; align: center;");
        button.setAttribute('position','0.75 1.5 0');
        button.setAttribute('material','color: blue');
        button.setAttribute('geometry','primitive: plane; width: 0.5; height: 0.25');
        sceneEl.appendChild(button);    
    }
});