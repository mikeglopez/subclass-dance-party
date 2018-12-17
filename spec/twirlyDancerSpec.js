describe('twirlyDancer', function() {

  var twirlyDancer;
  var blinkyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    twirlyDancer = new MakeTwirlyDancer(10, 20, timeBetweenSteps);
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(twirlyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should be an instance of MakeDancer', function() {
    expect(twirlyDancer).to.be.an.instanceof(MakeDancer);
  });

  it('should have positional values for each instance', function() {
    expect(twirlyDancer.left).to.exist;
  });

  it('should have different $node values', function() {
    expect(twirlyDancer.$node).to.not.equal(blinkyDancer.$node);
  });

});