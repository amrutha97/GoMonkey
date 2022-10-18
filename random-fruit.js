// <!-- FRUIT -->
AFRAME.registerComponent('random-fruit', {
    init: function() {
        let totalFruit = 30;
        let fruit = [];
        let size = 0.125;
        let sceneEl = document.querySelector('a-scene');

        // Random time to spawn fruit
        random_time = Math.random() * 500;
        setTimeout(function() {
            // Make fruit
            for (let i=0; i<totalFruit; i++) {
                fruit[i] = document.createElement('a-entity');
                fruit[i].setAttribute('class', 'fruit');
                fruit[i].setAttribute('mixin','dynamic');
                // fruit[i].setAttribute('dynamic-body', 'mass:0.5');

                // Strawberry
                if (i % 3) {
                    fruit[i].setAttribute('gltf-model', '#strawberry');
                    fruit[i].setAttribute('scale', '0.001 0.001 0.001');
                } 
                // Orange
                else if (i % 5) {
                    fruit[i].setAttribute('gltf-model', '#orange');
                    fruit[i].setAttribute('scale', '0.003 0.003 0.003');
                } 
                // Banana
                else if (i % 7) {
                    fruit[i].setAttribute('gltf-model', '#banana');
                    fruit[i].setAttribute('scale', '0.001 0.001 0.001');
                } 
                // Jellyfish
                else {
                    fruit[i].setAttribute('gltf-model', '#jellyfish');
                    fruit[i].setAttribute('scale', '0.05 0.05 0.05');
                }

                // Random fruit rotation                    
                x_rot = Math.random() * 360;
                y_rot = Math.random() * 360;
                z_rot = Math.random() * 360;

                fruit[i].setAttribute('animation', 'property: rotation; to: ' + x_rot + ' ' + y_rot + ' ' + z_rot + '; loop: true; dur: 10000');
                x_initial = Math.random()* (5 - (-5)) + (-5);
                y_initial = 10; 
                z_initial = Math.random()* (5 - (-5)) + (-5);
                x_final = Math.random()* (5 - (-5)) + (-5);
                y_final = 0;
                z_final = Math.random()* (5 - (-5)) + (-5);
                
                // Fruit Falling
                random_dur = Math.random() * (30000 - (20000)) + 20000;
                fruit[i].setAttribute('position', x_initial + ' ' + y_initial + ' ' + z_initial);
                fruit[i].setAttribute('animation__2', 'property: position; to: ' + x_final + ' ' + y_final + ' ' + z_final + '; loop: true; dur: ' + random_dur);

                // fruit[i].addEventListener('hitstart', function() {

                // });

                // Randomize the times
                random_time = Math.random() * (300 - (200)) + 200;
                setTimeout(function() {
                    sceneEl.appendChild(fruit[i]);
                }, random_time);
            }
        }, random_time);	
    }
});