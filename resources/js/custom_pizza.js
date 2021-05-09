var mainArea = document.getElementById("mainArea");

var width = mainArea.clientWidth;
var height = mainArea.clientHeight;

const canvasArea = document.getElementById("customPizzaCanvas");
canvasArea.width = width;
canvasArea.height = height;
const canvas_ctx = canvasArea.getContext("2d");

width = height;
height = height;
Bwidth = height + height / 7;
Bheight = height + height / 7;


//   var crustArray = new Array(
//   "image/crust/1.png",
//   "image/crust/2.png",
//   "image/crust/3.png",
//   "image/crust/4.png"
// );

var crustArray = new Array();

Layers[3].items.forEach(element => {
  crustArray.push(element.image)
});
console.log(Layers[3])
//var souceArray = new Array("image/souce/1.png", "image/souce/2.png");

var souceArray = new Array();

Layers[0].items.forEach(element => {
  souceArray.push(element.image)
});
//var souceArray = new Array();



var cheeseArray = new Array("image/cheese/1.png", "image/cheese/2.png");

var toppingArray = new Array(
  "image/topping/1.png",
  "image/topping/2.png",
  "image/topping/3.png",
  "image/topping/4.png",
  "image/topping/5.png",
  "image/topping/6.png",
  "image/topping/7.png",
  "image/topping/8.png"
);

var displayedToppingArray = new Array();
var displayedToppingArrayBack = new Array();

for (let i = 0; i < toppingArray.length; i++) {
  displayedToppingArray[i] = new Image();
  displayedToppingArrayBack[i] = new Image();
  displayedToppingArrayBack[i].src = toppingArray[i];
  if (i == 0) {
    displayedToppingArray[i].src = toppingArray[i];
  }
  displayedToppingArray[i].addEventListener(
    "load",
    function () {
      drawPizzaLayers();
    },
    false
  );
}

var crustImage = new Image();
crustImage.width = 50;
crustImage.height = 50;
crustImage.src = crustArray[0];
crustImage.addEventListener(
  "load",
  function () {
    drawPizzaLayers();
  },
  false
);

var SouceImage = new Image();
SouceImage.width = 50;
SouceImage.height = 50;
SouceImage.src = souceArray[0];
SouceImage.addEventListener(
  "load",
  function () {
    drawPizzaLayers();
  },
  false
);

var cheeseImage = new Image();
cheeseImage.width = 50;
cheeseImage.height = 50;
cheeseImage.src = cheeseArray[0];
cheeseImage.addEventListener(
  "load",
  function () {
    drawPizzaLayers();
  },
  false
);

var toppingImage = new Image();
toppingImage.width = 50;
toppingImage.height = 50;
toppingImage.src = toppingArray[0];
toppingImage.addEventListener(
  "load",
  function () {
    drawPizzaLayers();
  },
  false
);

var btnPrev = document.getElementById("btnPrev");
var btnNext = document.getElementById("btnNext");

addPizzaCrust();
drawPizzaLayers();

function addPizzaCrust() {
  addelementToContainer(...crustArray, drawPizzaCrust);
  btnPrev.onclick = function () {};
  btnNext.onclick = function () {
    removeElementsfromContainer();
    addPizzaSouce();
  };
}

function addPizzaSouce() {
  addelementToContainer(...souceArray, drawPizzaSouce);
  btnPrev.onclick = function () {
    removeElementsfromContainer();
    addPizzaCrust();
  };
  btnNext.onclick = function () {
    removeElementsfromContainer();
    addPizzaCheese();
  };
}

function addPizzaCheese() {
  addelementToContainer(...cheeseArray, drawPizzaCheese);
  btnPrev.onclick = function () {
    removeElementsfromContainer();
    addPizzaSouce();
  };
  btnNext.onclick = function () {
    removeElementsfromContainer();
    addPizzaTopping();
  };
}

function addPizzaTopping() {
  addelementToContainer(...toppingArray, drawPizzaTopping);
  btnPrev.onclick = function () {
    removeElementsfromContainer();
    addPizzaCheese();
  };
  btnNext.onclick = function () {
    // removeElementsfromContainer();
    alert("Well done! you have ordered custom Pizza");
  };
}

function addelementToContainer(...elementImageArray) {
  let container = document.getElementById("cpelement_ul");
  for (i = 0; i < elementImageArray.length - 1; i++) {
    let list = document.createElement("li");
    list.classList.add("cpelement_li");
    let image = document.createElement("IMG");
    image.classList.add("content-img");
    image.src = elementImageArray[i];
    image.onclick = function () {
      elementImageArray[elementImageArray.length - 1](image);
    };
    list.appendChild(image);
    let itemDetail = document.createElement("h5");
    itemDetail.classList.add("content_price");
    itemDetail.classList.add("card-body");
    itemName = document.createTextNode("Thin crust ");
    priceTagsymbol = document.createTextNode(" ₹: ");
    priceTagText = document.createTextNode((i + 1) * 5);
    itemDetail.appendChild(itemName);
    itemDetail.appendChild(priceTagsymbol);
    itemDetail.appendChild(priceTagText);
    list.appendChild(itemDetail);
    container.appendChild(list);
  }
}

function drawPizzaLayers() {
  canvas_ctx.clearRect(0, 0, canvasArea.width, canvasArea.height);
  canvas_ctx.drawImage(
    crustImage,
    canvasArea.width / 2 - Bwidth / 2,
    canvasArea.height / 2 - Bheight / 2,
    Bwidth,
    Bheight
  );
  canvas_ctx.drawImage(
    SouceImage,
    canvasArea.width / 2 - width / 2,
    canvasArea.height / 2 - height / 2,
    width,
    height
  );
  canvas_ctx.drawImage(
    cheeseImage,
    canvasArea.width / 2 - width / 2,
    canvasArea.height / 2 - height / 2,
    width,
    height
  );

  for (let i = 0; i < toppingArray.length; i++) {
    canvas_ctx.drawImage(
      displayedToppingArray[i],
      canvasArea.width / 2 - width / 2,
      canvasArea.height / 2 - height / 2,
      width,
      height
    );
  }
}

function drawPizzaCrust(image) {
  crustImage.src = image.src;
}

function drawPizzaSouce(image) {
  SouceImage.src = image.src;
  drawPizzaLayer(image);
}

function drawPizzaCheese(image) {
  cheeseImage.src = image.src;
  drawPizzaLayer(image);
}

function drawPizzaTopping(image) {
  for (let i = 0; i < displayedToppingArray.length; i++) {
    if (displayedToppingArrayBack[i].src == image.src) {
      // displayedToppingArray[i].src = toppingArray[i];
      if (displayedToppingArray[i].src == image.src) {
        displayedToppingArray[i].src = "image/topping/null.png";
      } else {
        displayedToppingArray[i].src = displayedToppingArrayBack[i].src;
      }
    }
  }
}

function removeElementsfromContainer() {
  let container = document.getElementById("cpelement_ul");
  container.innerHTML = "";
}

window.addEventListener("resize", function () {
  location.reload();
});
