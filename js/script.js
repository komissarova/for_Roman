// пункт 1 задания
let basket = {

  goodList: [],

  countTotalPrice() {
    let result = 0;
    for (let i = 0; i < this.goodList[0].length; i++) {
      result += this.goodList[0][i].price * this.goodList[0][i].count;
    }

    return result;
  },

  countTotalNumber() {
    let totalNumber = 0;
    for (let i = 0; i < this.goodList[0].length; i++) {
      totalNumber += this.goodList[0][i].count;
    }

    return totalNumber;
  },

  putToBasket(obj) {
    //let putGood = this.goodList.concat(obj);
    return this.goodList.concat(obj);
  }
};

//console.log(basket.countTotalPrice());
//console.log(basket.countTotalNumber());

let goods = [{
    name: "яблоко",
    price: 12,
    count: 3
  },
  {
    name: "груша",
    price: 18,
    count: 5
  },
  {
    name: "киви",
    price: 20,
    count: 10
  },
  {
    name: "апельсин",
    price: 16,
    count: 2
  },
  {
    name: "мандарин",
    price: 14,
    count: 12
  },
  {
    name: "грейпфрут",
    price: 30,
    count: 5
  },
  {
    name: "арбуз",
    price: 40,
    count: 1
  },
  {
    name: "манго",
    price: 19,
    count: 8
  },
  {
    name: "хурма",
    price: 23,
    count: 14
  },
  {
    name: "помело",
    price: 35,
    count: 5
  },
  {
    name: "дыня",
    price: 32,
    count: 1
  },
  {
    name: "банан",
    price: 15,
    count: 4
  }
];

console.log(basket.putToBasket(goods));
//старый код не заполняет корзину
// basket.goodList.push({
//   name: this.name,
//   price: this.price
// });
//
basket.goodList.push(basket.putToBasket(goods)); //так в карзину кладём массив объектов
console.log(basket.goodList[0]);
console.log(basket.goodList[0].count);
//console.log(basket.goodList[1].count);

// let odd = [];
// let even = [];
// //зачем это разделение на два массива?
// goods.forEach(function(item, index) {
//   if (index % 2 == 1) {
//     odd.push(item)
//   }
//   if (index % 2 == 0) {
//     even.push(item)
//   }
// });
//
// function getRandomArray(arr, obj) {
//   let tempArr = Array(arr.length);
//   for (let i = 0; i < obj; i++) {
//     let random = getRandomInt(0, arr.length);
//     tempArr[random] = arr[random];
//   }
//
//   return tempArr;
// }
//
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// console.log(odd);
// console.log(even);
// console.log(getRandomArray(odd, 2));
// console.log(getRandomArray(even, 1));

console.log("Стоимость всех товаров в Вашей корзине: " + basket.countTotalPrice());
console.log("Всего товаров в Вашей корзине: " + basket.countTotalNumber());


let myBasket = document.getElementById("myBasket");
if (basket.goodList == 0) {
  myBasket.innerText = "Корзина пуста";
} else {
  myBasket.innerText = "В корзине: " + basket.countTotalNumber() + " товаров на сумму " + basket.countTotalPrice() + " рублей";
  console.log(myBasket);
}


let myButton = document.createElement("button");
console.log(myButton);
document.body.appendChild(myButton);
myButton.innerHTML = "Купить";
myButton.style.color = "red";
myButton.setAttribute("id", "buy_button");

let myGood = document.createElement("ul");
document.body.insertBefore(myGood, myButton);
myGood.innerHTML = "Товар: ";
myGood.setAttribute("id", "good_list");


let listItem = document.createElement("li");

myGood.appendChild(listItem);
listItem.setAttribute("class", "good_item");
let products = document.getElementsByClassName("good_item");
//переменная i не объявлена
//products.innerHTML = "<li>" + basket.goodList[i].name + basket.goodList[i].price + basket.goodList[i].count + "</li>";

myButton.addEventListener('click', function(event) {
  //alert("Кошка");
  basket.putToBasket(goods);
  let placeForGoods = document.getElementById("good_list");
  placeForGoods = "";
  placeForGoods += "<ul>";
  for (let i = 0; i < basket.goodList[0].length; i++) {
    placeForGoods += "<li>" + basket.goodList[0][i].name + basket.goodList[0][i].price + basket.goodList[0][i].count + "</li>";
  }
  console.log(basket.goodList[0]);
})
