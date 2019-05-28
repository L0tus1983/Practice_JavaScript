/**
 *
 * @param {*} name 与えられた名前
 * @param {*} attributes 属性、子ノードを持つ要素を作成して返す関数
 */
function elt(name, attributes) {
  let node = document.createElement(name);
  if (attributes) {
    for (let attr in attributes) {
      if (attributes.hasOwnProperty(attr)) {
        node.setAttribute(attr, attributes[attr]);
      }
    }
  }
  for (let i = 2; i < arguments.length; i++) {
    let child = arguments[i];
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }
    node.appendChild(child);
  }
  return node;
}
