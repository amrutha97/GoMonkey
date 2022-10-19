// <!-- BUTTON -->
AFRAME.registerComponent('button', {
    init: function() {
        let sceneEl = document.querySelector('a-scene');
        button = document.createElement('a-entity');
        button.setAttribute('class', 'button');
        button.setAttribute('text',"value: START; width: 2; color: #000000; font: mozillavr; align: center;");
        button.setAttribute('position','2 2 0');
        button.setAttribute('material','color: blue');
        button.setAttribute('geometry','primitive: plane; width: 0.5; height: 0.25');
        button.setAttribute('clickable','');
        // button.setAttribute('aabb-collider','objects:');

        sceneEl.appendChild(button);    
        
        // fruit[i].setAttribute('aabb-collider', 'objects: .monkey');

        sceneEl.addEventListener('onclick', 
            function () {
                let sky = document.querySelector('a-sky');
                sky.setAttribute('color','#FF0000');
            }
        );
    }
});