document.getElementById("btn-11banh").onclick = function () {
  let hour = +document.getElementById("hour-11banh").value;
  let min = +document.getElementById("min-11banh").value;
  let price = +document.getElementById("price-11banh").value;

  let time = hour + min / 60;
  let result = Math.ceil((time / 7) * 17 * price); // 7 giờ trong trong 1 ca

  document.getElementById("result-11banh").innerHTML =
    result.toLocaleString() + " VND";
};
