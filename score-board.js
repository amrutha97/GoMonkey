// <!-- SCORE BOARD -->
AFRAME.registerComponent('score-board', {
    init: function() {
        let sceneEl = document.querySelector('a-scene');
        score = document.createElement('a-entity');
        scoreData = 0;
        score.setAttribute('id', 'score');
        score.setAttribute('text',"value: SCORE " + scoreData + "; color: red; font: mozillavr; letterSpacing: 1; align: center;");
        score.setAttribute('position','0 1.7 0');
        score.setAttribute('scale', '2.5 2.5 2.5');
        sceneEl.addEventListener('hitstart', 
            function () {
                scoreData += 1;
                score.setAttribute('text','value: SCORE ' + scoreData + '; color: red; font: mozillavr; letterSpacing: 1; align: center;');
            }
        );
        sceneEl.appendChild(score);                
    }
});