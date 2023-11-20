document.getElementById("btn-R").onclick = function () {
  let hour = +document.getElementById("hour-R").value;
  let min = +document.getElementById("min-R").value;
  let price = +document.getElementById("price-R").value;

  let time = hour + min / 60;
  let result = Math.ceil((time / 7) * 80 * price); // 7 giờ trong trong 1 ca

  document.getElementById("result-R").innerHTML =
    result.toLocaleString() + " VND";
};
