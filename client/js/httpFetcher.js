
(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  
})();

var postData = {
    
    create: function(successCB) {
      $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:3000',
        contentType: "application/json",
        success: function(message) {
          successCB(message);
          console.log('hello')
        },
        error: function() {
          console.log('FAILED TO CREATE MESSAGE');
        }
     });
    }
  }