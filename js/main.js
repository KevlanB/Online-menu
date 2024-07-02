import { category } from "./components/category.js";
import { item } from "./components/item.js";
import { list } from "./components/list.js";
import { insert, id } from "./methods/dom.js";
import { block, none, visibility } from "./methods/style.js";
import { waAPI } from "./methods/whatsAppAPI.js";

export { waAPI };
export { category };
export { item };

id("list-btn").addEventListener("click", () => {
  list.def();
  if (list.$address.value != "") {
    waAPI.go(list.$content);
  }
});

none(id("list"));
id("cart-finish").addEventListener("click", () => {
  visibility(id("list"));
});

document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
