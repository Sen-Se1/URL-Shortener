let err = new URLSearchParams(window.location.search).get("err");
let message = new URLSearchParams(window.location.search).get("msg");
let btn = document.getElementById("btn");
if (err || message) {
  document.addEventListener("DOMContentLoaded", function () {
    showPopup();
  });
}
function deleteUrl(id) {
  fetch("/" + id, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete URL");
      }
      window.location.href = 'http://localhost';
    })
    .catch((error) => console.error("Error:", error));
}

function showPopup() {
  var popup = document.getElementById("alertPopup");
  if (err) {
    document.getElementById("alertMessage").innerText = err;
    popup.style.backgroundColor = "#dc3545";
  } else {
    document.getElementById("alertMessage").innerText = message;
    popup.style.backgroundColor = "#28a745";
  }
  popup.style.display = "block";
  setTimeout(hidePopup, 3000);
}

function hidePopup() {
  var popup = document.getElementById("alertPopup");
  popup.style.display = "none";
}
