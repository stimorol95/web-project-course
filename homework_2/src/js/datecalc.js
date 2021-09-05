import { formatError } from "./common.js";
import { diffDate, diffToHTML } from "./diff.js";

export const dateCalcForm = document.getElementById("datecalc_form");
const dateCalcResult = document.getElementById("datecalc_result");

dateCalcForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  dateCalcResult.innerHTML = "";
  let { firstDate, secondDate } = event.target.elements;

  firstDate = firstDate.value;
  secondDate = secondDate.value;

  if (firstDate > secondDate) {
    [firstDate, secondDate] = [secondDate, firstDate];
  }

  if (firstDate && secondDate) {
    const result = diffToHTML(diffDate(firstDate, secondDate));
    console.log(result);
    dateCalcResult.innerHTML = result;
  } else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    );
}
