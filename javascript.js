var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-600px";
    y.style.left = "0px";
    z.style.left = "150px";
    document.getElementById("drugigumb").style.color = "white";
	 document.getElementById("prvigumb").style.color = "black";
}

	function login() {
    x.style.left = "0px";
    y.style.left = "600px";
    z.style.left = "0px";
    document.getElementById("prvigumb").style.color = "white";
	    document.getElementById("drugigumb").style.color = "black";

}

	function validateLoginForm() {
    const stevilkaInput = document.getElementById('stevilka');
    const pasInput = document.getElementById('pas');

    if (stevilkaInput.value.length === 7) {
    if (pasInput.value.length >= 10) {
     Swal.fire({
          icon: 'success',
		  iconColor: 'white',
        title: 'Successful login!',
        text: 'Welcome back!',
     imer: 1500,  
       showConfirmButton: false,  
	timerProgressBar: true  
     });
    } else {
         Swal.fire({
       icon: 'error',
	   iconColor: 'white',
        title: 'Invalid Input',	
        text: 'Your password must be at least 10 characters long!',
            });
        }
    } else {
        Swal.fire({
        icon: 'error',
		iconColor: 'white',
        title: 'Invalid Input',
          text: 'Your membership ID should be 7 characters long!',
        });
    }

    
    return false;
}

function login() {
    x.style.left = "0px";
    y.style.left = "600px";
    z.style.left = "0px";
    document.getElementById("prvigumb").style.color = "white";
    document.getElementById("drugigumb").style.color = "black";
}

function validateRegisterForm() {
    const emailInput = document.getElementById('email');
    const pasInput = document.getElementById('pas2');
    const checkbox = document.getElementById('check');

    if (!emailInput.checkValidity()) {
        Swal.fire({
            icon: 'error',
            iconColor: 'white',
            title: 'Invalid Email',
            text: 'Please enter a valid email address!',
        });
        return false;
    }

    if (pasInput.value.length < 10) {
        Swal.fire({
            icon: 'error',
            iconColor: 'white',
            title: 'Invalid Password',
            text: 'Your password must be at least 10 characters long!',
        });
        return false;
    }

    if (!checkbox.checked) {
        Swal.fire({
            icon: 'error',
            iconColor: 'white',
            title: 'Checkbox not selected',
            text: 'Please agree to the terms of service before registering!',
        });
        return false;
    }

    emailInput.value = '';
    pasInput.value = '';
    checkbox.checked = false;

    Swal.fire({
        icon: 'success',
        iconColor: 'white',
        title: 'You have been registered!',
        text: 'Welcome!',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
    }).then(() => {
        login();
    });

    

    return false;
}



function omejiDolzino(input, maxLength) {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }
  
 function showAlert(page) {
    const commonOptions = {
        iconColor: 'white',
		
    };

    switch (page) {
			case 'terms':
            Swal.fire({
             ...commonOptions,
				
			title: "Terms & Conditions",
            text: "Reselling of the tickets is NOT allowed. Any illegal activities will be prosecuted.",
            icon: 'info',
            });
            break;
			case 'privacy':
            Swal.fire({
                ...commonOptions,
                title: "Privacy Policy",
                text: "The Arsenal Football Club Limited is responsible for protecting your personal data. All rights reserved.",
                icon: 'info',
            });
            break;
			case 'contact':
            const contactContent = `
              Our postal address:<br>
              Arsenal Box Office<br>
              75 Drayton Park<br>
              London N5 1BU<br><br>
              Our E-mail: support@arsenal.com
            `;
            Swal.fire({
                ...commonOptions,
                title: "Contact Us",
                html: contactContent,
                icon: 'info',
            });
            break;
			case 'ticketing':
            Swal.fire({
                ...commonOptions,
                title: "Ticketing FAQs",
                text: "If you have any questions or reports regarding purchasing tickets do not hesitate to contact us! We are not responsible for tickets sold from third parties.",
                icon: 'info',
            });
            break;
			case 'cookies':
            Swal.fire({
                ...commonOptions,
                title: "Cookies",
                text: "When you use our site, we may collect information by using 'cookies'.",
                icon: 'info',
            });
            break;
			default:
            Swal.fire({
                ...commonOptions,
                title: "Error",
                text: "Page not found.",
                icon: 'error',
            });
            break;
    }
}


function pokaziSweet() {
	const bela = {
        iconColor: 'white',
		
    };
	const vsebina = `
              Credits:<br>
			  Samuel Logar, 4.ra<br>
			  Program: Tehnik Racunalnistva<br>
			  Sola: ERS Nova Gorica<br>
			  Mentor: prof. Andrlic
            `;

        Swal.fire({
			...bela,
            title: 'Sweet Alert!',
            html:vsebina,
            icon: 'info',
            confirmButtonText: 'OK'
        });
    }