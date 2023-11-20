// lu 2 bánh, 3 bánh và 9 bánh
document.getElementById("btn-lu2&3Banh").onclick = function () {
  let hour = +document.getElementById("hour-lu2&3Banh").value;
  let min = +document.getElementById("min-lu2&3Banh").value;
  let price = +document.getElementById("price-lu2&3Banh").value;

  let time = hour + min / 60;
  let result = Math.ceil((time / 7) * 13 * price);

  document.getElementById("result-lu2&3Banh").innerHTML =
    result.toLocaleString() + " VND";
};
