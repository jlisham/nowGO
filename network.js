function detectOffline() {
  if (navigator.onLine) {
    // alert("online");
    document.documentElement.style.backgroundColor = "palevioletred";
  } else {
    alert("offline");
    document.documentElement.style.backgroundColor = "silver";
  }
}
window.addEventListener("load", detectOffline);
window.addEventListener("onLine", detectOffline);
window.addEventListener("offLine", detectOffline);
