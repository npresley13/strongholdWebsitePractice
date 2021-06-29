const products = [
    {
        prodSKU: "46-243-L",
        prodName: "Heavy Duty 14 GA Cabinet with 3 Shelves - 48 In. W x 24 In. D x 75 In. H",
        prodPrice: "$1,633.00",
        prodImg: "images/prodImages/46-243-L-RAL7035_front-open_light-gray"
    },
    {
        prodSKU: "46-244-6/5DB-L",
        prodName: "Heavy Duty 14 GA Cabinet with 6 Half-Width Drawers, 4 Shelves - 48 In. W x 24 In. D x 75 In. H",
        prodPrice: "$3,064.00",
        prodImg: "images/prodImages/46-244-6.5DB-L-RAL7037_front-open_light-gray"
    },
    {
        prodSKU: "46-243-PX-L",
        prodName: "Heavy Duty 14 GA Cabinet with 3 Shelves Secured by Electronic Lock & Card Reader - 48 In. W x 24 In. D x 75 In. H",
        prodPrice: "$3,284.00",
        prodImg: "images/prodImages/46-243-PX-L-RAL7037_closed-front_light-gray"
    },
    {
        prodSKU: "46-244",
        prodName: "Extra Heavy Duty 12 GA Cabinet with 4 Shelves - 48 In. W x 24 In. D x 78 In. H",
        prodPrice: "$2,068.00",
        prodImg: "images/prodImages/46-244-RAL7024_front-open_dark-gray"
    },
    {
        prodSKU: "46-244-6/5DB",
        prodName: "Extra Heavy Duty 12 GA Cabinet with 6 Half-Width Drawers, 4 Shelves - 48 In. W x 24 In. D x 78 In. H",
        prodPrice: "$3,802.00",
        prodImg: "images/prodImages/46-244-6.5DB-RAL7024_front-open_dark-gray"
    },
    {
        prodSKU: "46-244-AT",
        prodName: "Extra Heavy Duty 12 GA Cabinet with 4 Shelves Secured by Electronic Lock with Digital Screen - 48 In. W x 24 In. D x 78 In. H",
        prodPrice: "$3,073.00",
        prodImg: "images/prodImages/46-244-AT-RAL7037_closed-front_light-gray"
    }
]
    

let prodFeed = document.getElementById('product-store');
let div = document.createElement('div');
let par = document.createElement('p');

products.forEach(function(product) {
    newDiv = prodFeed.appendChild(div);
    newDiv.appendChild(par).innerHTML = product.prodSKU;
    newDiv.appendChild(par).innerHTML = product.prodName;
});