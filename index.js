var carProducts = [{
        "id": 1,
        "name": "英雄牌 钢笔",
        "count": 1,
        "price": 69,
        "checked": false
    },
    {
        "id": 2,
        "name": "晨光牌 铅字笔",
        "count": 2,
        "price": 5.5,
        "checked": true
    },
    {
        "id": 3,
        "name": "晨光牌 铅笔",
        "count": 1,
        "price": 2,
        "checked": false
    },
    {
        "id": 4,
        "name": "狗熊牌 橡皮擦",
        "count": 1,
        "price": 1,
        "checked": false
    },
    {
        "id": 5,
        "name": "瑞士牌 双肩书包",
        "count": 1,
        "price": 199,
        "checked": true
    },
    {
        "id": 6,
        "name": "晨光牌 作业本",
        "count": 5,
        "price": 2.5,
        "checked": false
    }
]

var tbody = document.getElementsByTagName("tbody")[0];
var carConclusion = document.getElementById("car-conclusion")

function main() {
    loadProducts();

    tbody.addEventListener("click", function(event) {
        var mouseTarget = event.target;
        var tdIndex = mouseTarget.parentNode;
        if ("reduceProductNum" == mouseTarget.className) {
            reduceProduct(tdIndex);
            calculateSingleItemPrice(tdIndex);
            calculateSum()
        } else if ("increaseProductNum" === mouseTarget.className) {
            increaseProduct(tdIndex);
            calculateSingleItemPrice(tdIndex);
            calculateSum();
        } else if ("choose" === mouseTarget.className) {
            calculateSum();
        }

    })
}

function loadProducts() {
    for (var i = 0; i < carProducts.length; i++) {
        var tr = document.createElement("tr");
        var checked = "";
        if (true === carProducts[i].checked) {
            checked = ' checked="checked"'
        }
        var addChecked = '<td><input class="choose" type="checkbox"' + checked + '></td>';
        var addProductName = '<td>' + carProducts[i].name + '</td>';
        var addSinglePrice = '<td class="item-price">' + carProducts[i].price + '</td>';
        var addProductNum = '<td><button type="button" class="reduceProductNum">-</button><span class="item-count">' + carProducts[i].count + '</span><button type="button" class="increaseProductNum">+</button></td>';
        var addTotalPrice = '<td><span class="single-item-price">' + carProducts[i].price * carProducts[i].count + '</span></td>';

        tr.innerHTML = addChecked + addProductName + addSinglePrice + addProductNum + addTotalPrice;
        tbody.appendChild(tr);
    }
    carConclusion.innerHTML = "共计2件商品，11￥";

}

function reduceProduct(tdIndex) {
    var count = tdIndex.querySelector("span");
    if (count.innerText == 1) {
        console.log(tdIndex.parentNode);
        tbody.removeChild(tdIndex.parentNode);
    } else {
        count.innerText--;
    }
}

function increaseProduct(tdIndex) {
    var count = tdIndex.querySelector("span");
    count.innerText++;
}

function calculateSingleItemPrice(tdIndex) {
    var rowChoosen = tdIndex.parentNode;
    var itemCount = rowChoosen.getElementsByTagName("td")[3].getElementsByTagName("span")[0].innerText;
    var itemSinglePrice = rowChoosen.getElementsByTagName("td")[2].innerText;
    var singleItemPrice = rowChoosen.getElementsByTagName("td")[4].getElementsByTagName("span")[0];
    singleItemPrice.innerText = parseInt(itemCount) * parseInt(itemSinglePrice);
}
var choose = document.getElementsByClassName("choose");
var itemCount = document.getElementsByClassName("item-count");
var singleItemPrice = document.getElementsByClassName("single-item-price");

function calculateSum() {
    var totalCount = 0;
    var totalPrice = 0;
    for (var i = 0; i < choose.length; i++) {
        if (choose[i].checked) {
            totalPrice += parseFloat(singleItemPrice[i].innerText),
                totalCount += parseFloat(itemCount[i].innerText);
        }
    }
    carConclusion.innerHTML = '共计<span class="total-count">' + totalCount + '</span>件商品，¥<span class="total-price">' + totalPrice + '</span>';
}


main();