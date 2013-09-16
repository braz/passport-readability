var chai = require('chai')
  , ReadabilityStrategy = require('../lib/strategy');


describe('Strategy', function() {
    
  var strategy = new ReadabilityStrategy({
      consumerKey: 'ABC123',
      consumerSecret: 'secret'
    },
    function() {});
  
  strategy._oauth.getOAuthRequestToken = function(extraParams, callback) {
    callback(null, 'hh5s93j4hdidpola', 'hdhd0244k9j7ao03', {});
  }
  
  describe('handling a request to be redirected with provider-specific params', function() {
    var url;
  
    before(function(done) {
      chai.passport(strategy)
        .redirect(function(u) {
          url = u;
          done();
        })
        .req(function(req) {
          req.session = {};
        })
        .authenticate();
    });
  
    it('should be redirected', function() {
      expect(url).to.equal('https://www.readability.com/api/rest/v1/oauth/authorize?oauth_token=hh5s93j4hdidpola');
    });
  });
  
});
