import "./datecalc.js";
import "./switch.js";

export function formatError(text) {
  return `<span style="color:blue"> ${text} </span>`;
}

export function toggleRoutes(elemToHide, elemToVisible) {
  elemToHide.classList.add("visibility");
  elemToVisible.classList.remove("visibility");
}
