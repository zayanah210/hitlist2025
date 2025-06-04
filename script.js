const question = document.getElementById("revenge-question")
const teamRadios = document.getElementsByName("team")

teamRadios.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.checked && radio.value == "Team Friendly") {
           question.innerHTML = `How likely RU to <b>friendly fire</b> <br>
            (be honest pleaseee! this doesn't matter that much, I attack characters I like, but I still want to know the honest answer)`;
        } else if (radio.checked && radio.value == "Team Attack") {
            question.innerHTML = `How likely RU to <b>revenge</b> <br>
            (be honest pleaseee! this doesn't matter that much, I attack characters I like, but I still want to know the honest answer)`;
        } else {
            question.innerHTML = `How likely RU to <b>revenge/friendly fire</b> <br>
            (be honest pleaseee! this doesn't matter that much, I attack characters I like, but I still want to know the honest answer)`;
        }
    })
})

https://script.google.com/macros/s/AKfycbwUO6a5EG_EK56u_M7w5uB4Ai67nIG7NQ2UVsU9hx-Pl39v7VWbvfDPziu9qD3zzYbDEw/exec


document.getElementById("hitlistForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  // Collect form data
  const formData = new URLSearchParams();

  // Add individual fields
  formData.append("aflink", form.aflink.value);
  formData.append("team", form.team.value);
  formData.append("rating", form.rating.value);
  formData.append("discord", form.discord.value);
  formData.append("favchara", form.favchara.value);
  formData.append("extrainfo", form.extrainfo.value);

  // Collect checked checkboxes for 'faves'
  const faves = [];
  form.querySelectorAll('input[name="faves"]:checked').forEach(cb => faves.push(cb.value));
  formData.append("faves", faves.join(", "));

  // ✅ Send the POST request
  fetch("https://script.google.com/macros/s/AKfycbyJVoMBXpbdXbA5DpYpkNX8AG8Z6wSEzf-ZkmFkb-QlHfNjZMrbHiS3SaIEyUSJDkeyGA/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  })
    .then(response => response.text())
    .then(result => {
      alert("Form submitted successfully!");
      form.reset();
    })
    .catch(error => {
      alert("There was an error submitting the form.");
      console.error(error);
    });
});


