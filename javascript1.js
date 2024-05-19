document.addEventListener("DOMContentLoaded", function() {
  function validateForm() {
    const stevilkaInput = document.getElementById('stevilka');
    const pasInput = document.getElementById('email');
    const emailValue = pasInput.value; 

    if (stevilkaInput.value.length === 7) {
      if (emailValue.endsWith('@gmail.com')) { 
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'We have sent the instructions to reset your password to your Gmail address.',
        });
      } else if (stevilkaInput.value.length < 7) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Input',
          text: 'Your membership ID must be 7 characters long!',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Input',
          text: 'Please enter a valid Gmail address!',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Your membership ID must be 7 characters long!',
      });
    }
  }
  document.getElementById('submit').addEventListener('click', validateForm);
});


function omejiDolzino(input, maxLength) {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }
  
function showAlert() {
    switch (page) {
      case 'terms':
        Swal.fire("", "Reselling of the tickets is NOT allowed. Any illegal activities will be prosecuted.", "info");
        break;
      case 'privacy':
        Swal.fire("Privacy Policy", "The Arsenal Football Club Limited is responsible for protecting your personal data. All rights reserved.", "info");
        break;
       case 'contact':
        const contactContent = `
          Our postal address:<br>
		  Arsenal Box Office<br>
          75 Drayton Park<br>
          London N5 1BU<br><br>
          Our E-mail: support@arsenal.com
        `;
        Swal.fire("Contact Us", contactContent, "info");
        break;
      case 'ticketing':
        Swal.fire("Ticketing FAQs", "If you have any questions or reports regarding purchasing tickets do not hesitate to contatct us! We are not responsible for tickets sold from third parties.", "info");
        break;
      case 'cookies':
        Swal.fire("Cookies", "When you use our site, we may collect information by using 'cookies'.", "info");
        break;
      default:
        Swal.fire("Error", "Page not found.", "error");
        break;
    }
}


