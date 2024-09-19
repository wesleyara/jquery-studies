const content = $("#content");
const box = $("#box");

box.on({
  click: onClick,
  mouseover: onMouseOver,
  mouseout: onMouseOut,
});

function onClick() {
  content.text("Clicou");
}

function onMouseOver() {
  content.text("Passou o mouse");
}

function onMouseOut() {
  content.text("Tirou o mouse");
}
