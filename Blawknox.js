// blaw-know
document.getElementById("btn-11").onclick = function () {
  let hour = +document.getElementById("hour-11").value;
  let min = +document.getElementById("min-11").value;
  let price = +document.getElementById("price-11").value;

  let time = hour + min / 60;
  let result = Math.ceil((time / 7) * 65 * price);

  document.getElementById("result-11").innerHTML =
    result.toLocaleString() + " VND";
};
