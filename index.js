const changeImageBtn = document.getElementById("changeImageBtn");
const image = document.getElementById("CardImg");
const image1 = "./images//image1.jpeg";
const image2 = "./images//image2.jpg";
const image3 = "./images//image3.jpg";
const image4 = "./images//image4.jpg";
const image5 = "./images//image5.jpg";
const image6 = "./images//image6.jpg";
const image7 = "./images//image7.jpg";
const image8 = "./images//image8.jpg";
const image9 = "./images//image9.jpg";
const image10 = "./images//image10.jpg";
const image11 = "./images//image11.jpg";

const Images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

const changeImage = () => {
  let x = Math.floor(Math.random() * 10 + 1);
  image.src = Images[x];
};

changeImageBtn.addEventListener("click", changeImage);
