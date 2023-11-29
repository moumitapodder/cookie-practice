function cart() {
  let imgSrc = document.getElementById("img").getAttribute("src");
  let title = document.getElementById("card1").innerText;
  let text = document.getElementById("card2").innerText;
  let img1Src = document.getElementById("img1").getAttribute("src");

  let merge = `IMAGE PATH =${imgSrc}IMAGE TITLE=  ${title}image description= ${text}`;
  document.cookie = "product1= " + merge + "; max-age=" + 60 * 60 * 5;
}

const img = {
  src: "https://images.unsplash.com/photo-1519141416000-2083999999999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  alt: "image",
};
