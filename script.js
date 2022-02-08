let bioImgState = true;

document.getElementById("biohazard-btn").addEventListener("click", () => {
  if (bioImgState) {
    document.getElementById("pyramid-img").style.filter = "unset";
    bioImgState = false;
  } else {
    document.getElementById("pyramid-img").style.filter = "blur(13px)";
    bioImgState = true;
  }
});
