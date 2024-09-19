$(document).on("keydown", (e) => {
  $("#content").text("Keydown: " + e.key);

  if (e.which === 13) {
    alert("Enter key pressed");
  }
});
