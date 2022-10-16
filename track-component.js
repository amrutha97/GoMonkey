// SRC: https://glitch.com/edit/#!/rowan-woolen?path=track-component.js%3A9%3A3
AFRAME.registerComponent('track', {
    init: function () {
       this.trackedEl = document.querySelector('[camera]');
    },
    
    tick: function () {
      this.el.object3D.position.x = this.trackedEl.object3D.position.x;
    }
  });