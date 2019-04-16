function save() {
    html2canvas(document.querySelector("#text")).then(canvas => {
        var a = document.createElement("a");
        a.href = canvas
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");

        a.download = "iphone-memo.jpg";
        
        a.click();
    });
}
