const contactForm = document.querySelector(".contact-form");

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText === "success") {
      alert("E-Mail Sent");
      name.value = "";
      email.value = "";
      subject.value = "";
    }
  };

  xhr.send(JSON.stringify(formData));
});
