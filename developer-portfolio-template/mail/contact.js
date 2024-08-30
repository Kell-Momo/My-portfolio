 // contact
 const myEmail = "kellmomo055@gmail.com";

 function afficherEmail() {
     // Get form field values
     const nom = document.getElementById('nom').value;
     const email = document.getElementById('email').value;
     const sujet = document.getElementById('sujet').value;
     const message = document.getElementById('message').value;
     
      // Construct the mailto link
 const mailtoLink = `mailto:${myEmail}?subject=${sujet}&body=${encodeURIComponent(
     `Salut, je suis ${nom} (${email}) et je viens vous parler de ${sujet}. ${message}`
 )}`;

 // Open the mail client with the constructed mailto link
 window.location.href = mailtoLink;
 }