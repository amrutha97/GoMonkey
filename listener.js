AFRAME.registerComponent('x-button-listener', {
    init: function () {
        var el = this.el;
        el.addEventListener('xbuttondown', function (evt) {
            let button = document.getElementById('#button');
            button.setAttribute('text',"value: X; width: 2; color: #000000; font: mozillavr; align: center;");
        });
    },
});

AFRAME.registerComponent('a-button-listener', {
    init: function () {
        var el = this.el;
        el.addEventListener('abuttondown', function (evt) {
            let button = document.getElementById('#button');
            button.setAttribute('text',"value: A; width: 2; color: #000000; font: mozillavr; align: center;");        });
    }
});

document.querySelector("#left-hand").setAttribute('x-button-listener', '');
document.querySelector("#right-hand").setAttribute('a-button-listener', '');