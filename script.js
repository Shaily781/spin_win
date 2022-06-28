function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[currentIndex],
      array[currentIndex],
    ];
  }
  return array;
}
function spin() {
  wheel.play();
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";
  let one = shuffle([1890, 2250, 2610]);
  let two = shuffle([1850, 2210, 2570]);
  let three = shuffle([1770, 2130, 2490]);
  let four = shuffle([1810, 2170, 2530]);
  let five= shuffle([1750, 2110, 2470]);
  let six = shuffle([1630, 1990, 2350]);
  let seven = shuffle([1570, 1930, 2290]);

  let results = shuffle([
    one[0],
    two[0],
    three[0],
    four[0],
    five[0],
    six[0],
    seven[0],
  ]);

  if (one.includes(results[0])) SelectedItem = "50% OFF";
  if (two.includes(results[0])) SelectedItem = "20% OFF";
  if (three.includes(results[0])) SelectedItem = "Cashback";
  if (four.includes(results[0])) SelectedItem = "Buy 1+1 Free";
  if (five.includes(results[0])) SelectedItem = "Buy @49";
  if (six.includes(results[0])) SelectedItem = "Reward Point";
  if (seven.includes(results[0])) SelectedItem = "10% OFF";

  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + results[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  setTimeout(function () {
    //alert
    applause.play();
    Swal.fire({
      title: "Congo!!!",
      html:
        "You Won." + SelectedItem + " | " + '<a href="#">Claim Your Prize</a>',
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }, 5500);
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}
