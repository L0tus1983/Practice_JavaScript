window.onload = function() {
  createIconEditor(document.body, 16, 16);
};

function createIconEditor(parent, nx, ny) {
  //
  let color = elt("input", { type: "color" });
  //
  let clear = elt("input", { type: "button", value: "全消去" });
  clear.addEventListener("click", e =>
    cells.forEach(td => (td.style.backgroundColor = "white"))
  );
  //
  let table = elt("table");
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "5px";
  let cells = [];
  for (let j = 0; j < ny; j++) {
    let tr = elt("tr");
    table.appendChild(tr);
    for (let i = 0; j < nx; i++) {
      let td = elt("td");
      cells.push(td);
      td.style.width = td.style.height = "15px";
      td.style.border = "1px solid gray";
      tr.appendChild(td);
      //
      td.addEventListener(
        "click",
        e => (e.target.style.backgroundColor = color.value)
      );
    }
    //
    parent.appendChild(color);
    parent.appendChild(clear);
    parent.appendChild(table);
  }
}
