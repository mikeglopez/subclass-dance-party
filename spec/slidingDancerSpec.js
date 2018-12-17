describe('slidingDancer', function() {
  var slidingDancer;
  var slidyDancer;
  var timeBetweenSteps = Math.random() * 1000;
  var top = 10 * Math.random();
  var left = 10 * Math.random();

  beforeEach(function() {
    slidingDancer = new MakeSlidingDancer(top, left, timeBetweenSteps);
    slidyDancer = new MakeSlidingDancer(10 * Math.random(), 10 * Math.random(), timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slidingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should be an instance of MakeDancer', function() {
    expect(slidingDancer).to.be.an.instanceof(MakeDancer);
  });

  it('should have positional values for each instance', function() {
    expect(slidingDancer.top).to.exist;
  });

  it('should have randomized positional values', function() {
    expect(slidingDancer.left).to.not.equal(slidyDancer.left);
  });

});
