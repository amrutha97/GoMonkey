// <!-- FRUIT -->
const Fruit = {
	Strawberry: 1,
	Banana: 2,
	Orange: 3,
	Jellyfish: 4,
}

function randomFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomRotation() {
    return Math.random() * 360;
}

AFRAME.registerComponent('random-fruit', {
    init: function() {
        const NUM_FRUIT = 50;
        const Y_INITIAL = 10;
        const Y_FINAL = 0;

        const SCALE_1 = '0.001 0.001 0.001';
        const SCALE_2 = '0.003 0.003 0.003';
        const SCALE_3 = '0.04 0.04 0.04';

        const MIXIN = 'dynamic';
        const CLASS = 'fruit';
        const LOOP = '; loop: true;';
        const PROPERTY_POSITION = 'property: position; to: ';
        const PROPERTY_ROTATION = 'property: rotation; to: ';


        let fruit = [];
        let sceneEl = document.querySelector('a-scene');

        // Make fruit
        for (let i = 0; i < NUM_FRUIT; i++) {
            setTimeout(function() {
                // Randomize Position and Rotation
                const INITIAL_POSITION = randomFromInterval(-3,3) + ' ' + Y_INITIAL + ' ' + randomFromInterval(-3,3);
                const ANIMATE_POSITION = PROPERTY_POSITION + randomFromInterval(-3,3) + ' ' + Y_FINAL + ' ' + randomFromInterval(-3,3) + '; dur: ' + randomFromInterval(5000,20000) + LOOP;
                const ANIMATE_ROTATION = PROPERTY_ROTATION + randomRotation() + ' ' + randomRotation() + ' ' + randomRotation() + '; dur: ' + randomFromInterval(5000,20000) + LOOP;

                // Set Generic Attributes
                fruit[i] = document.createElement('a-entity');
                fruit[i].setAttribute('class', CLASS);
                fruit[i].setAttribute('mixin', MIXIN);
                fruit[i].setAttribute('animation', ANIMATE_ROTATION);
                fruit[i].setAttribute('position', INITIAL_POSITION);
                fruit[i].setAttribute('animation__2', ANIMATE_POSITION);
                fruit[i].setAttribute('aabb-collider', 'objects: .monkey');
                fruit[i].setAttribute('play-sound-on-event', 'mode: toggle-stop; event: hitstart');
                fruit[i].setAttribute('sound', 'src: #monkeysound');

                // Select the fruit type
                var randomFruit = randomFromInterval(1,4);
                if (randomFruit === Fruit.Strawberry) {
                    fruit[i].setAttribute('gltf-model', '#strawberry');
                    fruit[i].setAttribute('scale', SCALE_1);
                } 
                else if (randomFruit === Fruit.Orange) {
                    fruit[i].setAttribute('gltf-model', '#orange');
                    fruit[i].setAttribute('scale', SCALE_2);
                } 
                if (randomFruit === Fruit.Banana) {
                    fruit[i].setAttribute('gltf-model', '#banana');
                    fruit[i].setAttribute('scale', SCALE_1);
                } 
                if (randomFruit === Fruit.Jellyfish) {
                    fruit[i].setAttribute('gltf-model', '#jellyfish');
                    fruit[i].setAttribute('scale', SCALE_3);
                    fruit[i].setAttribute('sound', 'src: #jellyfishsound');
                }
                // Randomize the times
                setTimeout(function() {
                    sceneEl.appendChild(fruit[i]);
                }, randomRotation());
            }, randomRotation());
        }
    }
});