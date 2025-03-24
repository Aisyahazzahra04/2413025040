'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const message = `
    Full Name: ${formData.get("fullname")}
    Email: ${formData.get("email")}
    Message: ${formData.get("message")}
  `;

  // send email
  window.location.href = `mailto:aisyahazzahratbb@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(message)}`;
});


