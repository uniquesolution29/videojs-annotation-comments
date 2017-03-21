"use strict";

const PlayerComponent = require("./player_component").class;

class AnnotationShape extends PlayerComponent {

  constructor(shape, playerId) {
  	super(playerId);
    this.shape = shape;
    this.$parent = this.$player;
    this.draw();
  }

  draw () {
    if(!this.shape) return;
    
    this.$el = $("<div/>").addClass("vac-shape");
    this.setDimsFromShape();
    this.$parent.append(this.$el);
  }

  setDimsFromShape () {
    this.$el.css({
      left: this.shape.x1 + "%",
      top: this.shape.y1 + "%",
      width: (this.shape.x2-this.shape.x1) + "%",
      height: (this.shape.y2-this.shape.y1) + "%"
    });
  }

  teardown () {
    if(this.shape){
      this.$el.remove();
    }
  }

}

module.exports = {
	class: AnnotationShape
};
