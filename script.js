document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`¡Gracias por tu mensaje, ${name}!\nPronto nos pondremos en contacto contigo.`);
});
