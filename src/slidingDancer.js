var MakeSlidingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="slidingDancer"></span>');
  this.setPosition(top, left);
};

MakeSlidingDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlidingDancer.prototype.constructor = MakeSlidingDancer;
