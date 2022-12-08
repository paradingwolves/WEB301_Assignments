// Example starter JavaScript for disabling form submissions if there are invalid fields
$(document).ready( function() {
  'use strict'
  $('.alert').hide();  

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      event.stopPropagation()
      if (form.checkValidity()) {
        // validation passed, so we can open a modal
        // This link leads to the documentation on how to create a modal in JavaScript
        // https://getbootstrap.com/docs/5.2/components/modal/#via-javascript
        // Given the code found there, first create your new instance of a Modal, by selecting your pages HTML modal (you don't need to pass in options)
        
        console.log("valid");
        // then open it by using the show() method

        $("#myModal").toggle();
        $(".close").on('click', function (){
          $("#myModal").hide();
        });
        

      }
      else {
        /* Add alert if invalid submission */
          $('.alert').show();       
        console.log("nah");
      }
      form.classList.add('was-validated')
    }, false)
  })
}) 
  
