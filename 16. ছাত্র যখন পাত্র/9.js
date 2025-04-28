let price = 1200;
if (price > 1000) {
  discountPrice = (price / 100) * 20;
  payPrice = price - discountPrice;
  console.log(
    "You have to pay:",
    payPrice,
    "Tk and you got Discount:",
    discountPrice,
    "Tk"
  );
} else {
  console.log("No Discount for you");
}
