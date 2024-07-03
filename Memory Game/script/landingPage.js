"use strict";

function saveUser(event) {
  event.preventDefault();
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let user = localStorage.getItem(email);

  if (name && email && password) {
    if (user) {
      user = JSON.parse(user);
      if (user.password != password) {
        document.getElementById("errorMessage").textContent =
          "invalid password";
        return;
      }
    } else {
      localStorage.setItem(
        email,
        JSON.stringify({
          name: name,
          email: email,
          password: password,
        })
      );
    }
    // window.location.replace("./ ");
  }
}
document.querySelector("button").addEventListener("click", saveUser);
