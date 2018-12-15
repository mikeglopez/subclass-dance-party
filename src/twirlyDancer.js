var MakeTwirlyDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="twirlyDancer"></span>');
  this.setPosition(top, left);
};

MakeTwirlyDancer.prototype = Object.create(MakeDancer.prototype);
MakeTwirlyDancer.prototype.constructor = MakeTwirlyDancer;