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
var reduceProductNum = document.getElementsByClassName(reduceProductNum);
var increaseProductNum = document.getElementsByClassName(increaseProductNum)

function main() {
    loadProducts();

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
        var addSinglePrice = '<td>' + carProducts[i].price + '</td>';
        var addProductNum = '<td><button type="button" class="reduceProductNum">-</button>' + carProducts[i].count + '<button type="button" class="increaseProductNum">+</button></td>';
        var addTotalPrice = '<td>' + carProducts[i].price * carProducts[i].count + '</td>';

        tr.innerHTML = addChecked + addProductName + addSinglePrice + addProductNum + addTotalPrice;
        tbody.appendChild(tr);
    }
    var carConclusion = document.getElementById("car-conclusion")
    carConclusion.innerHTML = "共计2件商品，11￥";

}
main();