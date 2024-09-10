// A function abaixo vai aguardar o carregamento do document para poder inserir o texto no HTML, podendo assim importar o script antes do body sem ter problemas com renderização.
$(document).ready(makeText);

function makeText() {
  $("#text").text("Document Ready");
}
