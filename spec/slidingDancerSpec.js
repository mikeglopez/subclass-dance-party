describe('slidingDancer', function() {

  var slidingDancer;
  var slidyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    slidingDancer = new MakeSlidingDancer(10, 20, timeBetweenSteps);
    slidyDancer = new MakeSlidingDancer(10, 20, timeBetweenSteps);
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

});
