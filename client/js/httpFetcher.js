
(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  var postData = {
    
    create: function(message, successCB, errorCB = null) {
      $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:3000',
        data: JSON.stringify(message),
        contentType: "application/json",
        success: successCB,
        error: errorCB || function(error) {
          console.error('FAILED TO CREATE MESSAGE');
        }
     });
    }
  }
  
})();
