// <!-- FRUIT -->
const Fruit = {
	Strawberry: 1,
	Banana: 2,
	Orange: 3,
	Jellyfish: 4,
}

function randomRotation() {
    return Math.random() * 360;
}

function randomFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

AFRAME.registerComponent('random-fruit', {

    init: function() {
        const NUM_FRUIT = 30;
        const Y_INITIAL = 10;
        const Y_FINAL = 0;

        const MIXIN = 'dynamic';
        const CLASS = 'fruit';
        const LOOP = '; loop: true;';
        const PROPERTY_POSITION = 'property: position; to: ';
        const PROPERTY_ROTATION = 'property: rotation; to: ';


        let fruit = [];
        let sceneEl = document.querySelector('a-scene');

        // Make fruit
        for (let i = 0; i < NUM_FRUIT; i++) {
            const POSITION = randomFromInterval(-5,5) + ' ' + Y_INITIAL + ' ' + randomFromInterval(-5,5);
            const ANIMATE_POSITION = PROPERTY_POSITION + randomFromInterval(-5,5) + ' ' + Y_FINAL + ' ' + randomFromInterval(-5,5) + '; dur: ' + randomFromInterval(20000,30000) + LOOP;
            const ANIMATE_ROTATION = PROPERTY_ROTATION + randomFromInterval(0,360) + ' ' + randomFromInterval(300,360) + ' ' + randomFromInterval(300,360) + ' dur: 10000' + LOOP;

            fruit[i] = document.createElement('a-entity');
            fruit[i].setAttribute('class', CLASS);
            fruit[i].setAttribute('mixin', MIXIN);
            fruit[i].setAttribute('animation', ANIMATE_ROTATION);
            fruit[i].setAttribute('position', POSITION);
            fruit[i].setAttribute('animation__2', ANIMATE_POSITION);

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

            // Randomize the times
            setTimeout(function() {
                sceneEl.appendChild(fruit[i]);
            }, randomRotation());
        }
    }
});