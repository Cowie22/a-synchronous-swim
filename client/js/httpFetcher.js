
(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  var postData = {
    
    create: function(successCB, errorCB = null) {
      $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:3000',
        contentType: "application/json",
        success: function(message) {
          successCB(message);
        },
        error: errorCB || function(error) {
          console.error('FAILED TO CREATE MESSAGE');
        }
     });
    }
  }
  
})();
