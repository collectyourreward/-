function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      
      {
      alert('This was a phishing test');
      return true;
      }
      else
      {
      alert('Your name should contain alphabet characters only');
      return false;
      }
      }
      