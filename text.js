// Contact form validation (client-only demo)
const contactForm = $("#contactForm");
const status = $("#formStatus");
const isEmail = (v) => /.+@.+\..+/.test(v);
contactForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const message = $("#message").value.trim();

  let ok = true;
  $("#err-name").hidden = !!name;
  if (!name) ok = false;
  $("#err-email").hidden = isEmail(email);
  if (!isEmail(email)) ok = false;
  $("#err-message").hidden = !!message;
  if (!message) ok = false;

  if (!ok) {
    status.textContent = "Please fix the errors above.";
    return;
  }
  status.textContent = "Thanks! Your message has been captured locally.";
  contactForm.reset();
});
