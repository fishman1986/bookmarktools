javascript: (function(w, d) {
  var reminder =
      "1.Copy the content<br/>2.Click on the QR bookmark<br/>3.Press Ctrl+V<br/><br/> Or select content and then click on the QR bookmark",
    txt = w.getSelection() || d.selection.createRange().text;
  var container = d.createElement("div");
  container.style.cssText =
    "border:solid 2px #888;background-color:#eee;padding:8px;position:fixed;left:300px;top:100px;z-index:9999";
  container.innerHTML = reminder;
  d.body.appendChild(container);
  var limg = function() {
    container.innerHTML = "I'm loading madly...";
    var img = new Image();
    img.src =
      "http://qr.liantu.com/api.php?text=" +
      encodeURIComponent(txt) +
      "&a=" +
      Math.random();
    img.onload = function() {
      container.innerHTML = "";
      container.appendChild(img);
    };
  };
  if (txt == "") {
    if (w.clipboardData) {
      txt = w.clipboardData.getData("text");
    } else {
      d.onpaste = function(e) {
        txt = e.clipboardData.getData("text/plain");
        limg();
      };
    }
    if (txt != "") {
      limg();
    }
  } else {
    limg();
  }
  var oC = d.onclick;
  d.onclick = function() {
    d.body.removeChild(container);
    d.onclick = oC;
    d.onpaste = null;
  };
})(window, document);
