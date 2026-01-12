/* =====================================================
   Instructor-Provided JavaScript (Disabled Intentionally)
   -----------------------------------------------------
   This code validates form input and displays a message
   on submission. It has been preserved for reference
   but disabled as part of an intentional design choice
   for this project.
   ===================================================== */

/*
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nameInput = document.getElementById('name');
    const userName = nameInput.value;

    const messageArea = document.getElementById('messageArea');

    if (userName.trim() !== "") {
        messageArea.textContent = `Thank you, ${userName}! Your form has been submitted successfully.`;
        nameInput.value = ''; 
    } else {
        messageArea.textContent = 'Please enter your name before submitting.';
        messageArea.style.color = 'red';
    }
});
*/


/* =====================================================
   Active JavaScript – Chaos Mode Enabled
   -----------------------------------------------------
   The Vigilant Waffle does not send emails.
   Submissions are acknowledged through interpretive
   dance and unexpected musical redirection.
   ===================================================== */

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Immediate Rick Roll. No emails. No regrets.
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
