document.getElementById("submit_btn").addEventListener("click", () => {
  const email = document.getElementById("email_id").value;
  const password = document.getElementById("password_id").value;

  document.getElementById("email_id").value = "";
  document.getElementById("password_id").value = "";

  if (email === "user@gmail.com" && password === "1234") {
    location.href = "bank.html";
  } else {
    alert("Invalid user id ❌");
  }
});
