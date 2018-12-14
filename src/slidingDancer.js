var MakeSlidingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="slidingDancer"></span>');
  this.setPosition(top, left);
};

MakeSlidingDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlidingDancer.prototype.constructor = MakeSlidingDancer;

MakeSlidingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);

  this.$node.slideDown(5, function() {
    // console.log('meow'); try a different method api
  });
};