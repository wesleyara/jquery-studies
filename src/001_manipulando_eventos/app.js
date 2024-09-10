$("#sum").on("click",() => {
  const value1 = $("#value1").val();
  const value2 = $("#value2").val();

  const sum = parseInt(value1) + parseInt(value2);

  $("#result").text(sum);
});
