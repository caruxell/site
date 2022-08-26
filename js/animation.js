var elements = [];
var g1 = [250, 30],
  g2 = [100, 50],
  g3 = [20, 0],
  g4 = [400, 300],
  g5 = [260, 150];

var randomizeValues = () => {
  for (var i = 0; i < elements.length; ++i) {
    elements[i].style.right =
      ((Math.floor(Math.random() * window.innerWidth) +
        Math.floor(window.innerWidth / 4)) %
        ((3 * window.innerWidth) / 4)) +
      "px";
    elements[i].style.top =
      Math.floor(Math.random() * window.innerHeight) - 186 + "px";
  }
};
for (var i = 1; i < 6; ++i) {
  elements.push(document.querySelector(".g" + i));
}
randomizeValues();
if (!window.animation) {
  window.animation = setInterval(() => {
    randomizeValues();
  }, 3000);
  window.onunload = () => {
    clearInterval(window.animation);
    window.animation = null;
  };
}
