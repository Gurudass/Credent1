let btn_prev = document.querySelector("#gallery .buttons  .prev");
    // ===============================================================
    // (for EI change "querySelector" on "getElementById")
    // ================================================================
    let btn_next = document.querySelector("#gallery .buttons  .next");

    let images = document.querySelectorAll("#gallery .photos img");
    let i = 0;

    btn_prev.onclick = function () {
      images[i].className = "";
      i--;
      if (i < 0) {
        i = images.length - 1;
      }
      images[i].className = "showed";
    };
    btn_next.onclick = function () {
      images[i].className = "";
      i++;
      if (i >= images.length) {
        i = 0;
      }
      images[i].className = "showed";
    };
