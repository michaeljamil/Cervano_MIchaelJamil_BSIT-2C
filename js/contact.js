
   
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); 

     
      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');
      var messageInput = document.getElementById('message');
      var errorMessages = [];

      if (nameInput.value.trim() === '') {
        errorMessages.push('Please enter your name.');
      }

      if (emailInput.value.trim() === '') {
        errorMessages.push('Please enter your email.');
      } else if (!validateEmail(emailInput.value.trim())) {
        errorMessages.push('Please enter a valid email address.');
      }

      if (messageInput.value.trim() === '') {
        errorMessages.push('Please enter a message.');
      }

     
      var errorContainer = document.getElementById('error-container');
      if (errorMessages.length > 0) {
        errorContainer.innerHTML = '';
        errorMessages.forEach(function(message) {
          errorContainer.innerHTML += '<p class="error">' + message + '</p>';
        });
      } else {
        errorContainer.innerHTML = '';
        
        var successMessage = document.createElement('p');
        successMessage.textContent = 'Form submitted successfully!';
        successMessage.style.color = 'green';
        successMessage.style.fontWeight = 'bold';
        errorContainer.appendChild(successMessage);
       
        document.getElementById('contact-form').reset();
      }
    });

    
    function validateEmail(email) {
        
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
