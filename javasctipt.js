let product_total_amt = document.getElementById("product_amount");
let shipping_charge = document.getElementById("shipping_charge");
let total_cart_amt = document.getElementById("total_cart_amt");
let discountCode = document.getElementById('discount_code1');
let discount = document.getElementById('discountAmountArea');


// STATES //
// let totalAmount = 0;
const productsData = [
    {
        name: "lynin shirt",
        price: 15
    },
    {
        name: "cotton shirt",
        price: 20
    }
];
let productTotalAmount = parseFloat(product_total_amt.innerText);
couponApplied = false;
appliedCouponDiscound = 0;

const applyShippingCharges = (totalAmount, quantity) => {
    if (productTotalAmount || quantity != '0') {
        totalAmount = 50;
        shipping_charge.innerText = `${totalAmount}`;
        // discount.classList.remove('hide');

        return totalAmount;
    } else {
        totalAmount = 0;
        shipping_charge.innerText = `${totalAmount}`;
        // window.alert("Discount can't be added to 0 quantiy");
        // discount.classList.add('hide');
        // document.getElementById('discountAmount').innerText = 0;

        return totalAmount;
    }

}


const increaseNumber = (IncDec, priceinc, productName) => {
    let quantity = document.getElementById(IncDec);
    let amount = document.getElementById(priceinc);
    let totalAmount = 0;

    if (quantity.value >= 5) {
        quantity.value = 5;
        quantity.style.backgroundColor = "red";
        quantity.style.color = "white";
        alert("quantity cant be more than 5");

    } else {
        quantity.value = parseInt(quantity.value) + 1;
        let products = productsData.find((product) => product.name === productName);
        amount.innerText = parseFloat(quantity.value) * products?.price;
        productTotalAmount += products?.price;
        product_total_amt.innerText = productTotalAmount;
        totalAmount = applyShippingCharges(totalAmount, quantity.value);
        totalAmount += productTotalAmount;
        if (couponApplied) {
            //    couponApplied = false;

            totalAmount -= appliedCouponDiscound;
        }
        total_cart_amt.innerText = totalAmount;
    }

}



const decreaseNumber = (IncDec, priceinc, productName) => {
    // let quantity = document.getElementById(IncDec);
    let quantity = document.getElementById(IncDec);
    let amount = document.getElementById(priceinc);
    totalAmount = 0;
    // let productTotalAmount = parseFloat(product_total_amt.innerText);

    if (quantity.value <= 0) {
        quantity.value = 0;
        alert("quantity cant be less then 0")
    } else {
        quantity.value = parseInt(quantity.value) - 1;
        quantity.style.backgroundColor = "white";
        quantity.style.color = "black";

        products = productsData.find((product) => product.name === productName);
        amount.innerText = parseFloat(quantity.value) * products?.price;
        productTotalAmount -= products?.price;
        product_total_amt.innerText = productTotalAmount;
        totalAmount = applyShippingCharges(totalAmount, quantity.value);

        totalAmount += productTotalAmount;
        if (couponApplied) {
            //    couponApplied = false;
            if (!totalAmount) {
                totalAmount = 0;
            } else {
                totalAmount -= appliedCouponDiscound;
            }
        }
        total_cart_amt.innerText = totalAmount;
    }
}

const dicountCode = () => {
    if (discountCode.value == "Thapa") {
        appliedCouponDiscound = 50;
        let totalAmount = parseInt(total_cart_amt.innerText);
        if (totalAmount) {
            totalAmount -= appliedCouponDiscound;
            total_cart_amt.innerText = totalAmount;
            document.getElementById("error_tre").innerText = "Coupon Applied!";
            document.getElementById("error_tre").style.backgroundColor = 'white';
            document.getElementById("error_tre").style.color = 'green';
            document.getElementById("btn").disabled = true;
            couponApplied = true;
            discount.classList.remove('hide');

            document.getElementById('discountAmount').innerText = appliedCouponDiscound;
        }

    }
    else if (discountCode.value == "New1@") {
        appliedCouponDiscound = 25;
        let totalAmount = parseInt(total_cart_amt.innerText);
        if (totalAmount) {
            totalAmount -= appliedCouponDiscound;
            total_cart_amt.innerText = totalAmount;
            document.getElementById("error_tre").innerText = "Coupon Applied!";
            document.getElementById("error_tre").style.backgroundColor = 'white';
            document.getElementById("error_tre").style.color = 'green';
            document.getElementById("btn").disabled = true;
            couponApplied = true;
            discount.classList.remove('hide');

            document.getElementById('discountAmount').innerText = appliedCouponDiscound;
        }

    } else {
        document.getElementById("btn").disabled = false;
        couponApplied = false;
        document.getElementById("error_tre").innerText = "Invalid Coupon";
        document.getElementById("error_tre").style.backgroundColor = 'red';
        document.getElementById("error_tre").style.color = 'white';
    }
}

const promotionAreaToggle = () => {
    let promotionArea = document.getElementById("collapseExample");
    promotionArea.classList.toggle('d-none');
}

const addToWishlist = (id) => {
    document.getElementById(id).classList.toggle('addToWishlist');
}

const removeItem = (removeItemId,itemTotalValue) => {
    document.getElementById(removeItemId).classList.add('hide');
    
    let productTotalAmount = parseInt(product_total_amt.innerText);
    let quantity = parseInt(document.getElementById(itemTotalValue).innerText);
    let totalCartAmount = parseInt(total_cart_amt.innerText);
    productTotalAmount -= quantity;
    totalCartAmount -=quantity;
    product_total_amt.innerText = productTotalAmount;
    total_cart_amt.innerText = totalCartAmount;

    window.alert(`item removed`);


}
