export let orderList = [];
export function orderClear() {
  orderList = [];
}
function startTest(
  width,
  height,
  description,
  count,
  material,
  lamination,
  borderCut,
  orderCategory,
  price
) {
  class OrderItem {
    constructor(
      width,
      height,
      description,
      count,
      material,
      lamination,
      borderCut,
      orderCategory,
      price
    ) {
      this.width = width;
      this.height = height;
      this.description = description;
      this.count = count;
      this.material = material;
      this.lamination = lamination;
      this.borderCut = borderCut;
      this.random = (Math.random() * 10000).toFixed();
      this.orderCategory = orderCategory;
      this.price = price;
      this.totalArea = (this.width * this.height * this.count).toFixed(3);
      this.onePcsArea = this.width * this.height;
      this.onePcsCost = this.onePcsArea * this.price;
      this.totalCost = this.totalArea * this.price;
    }
  }

  let order = new OrderItem(
    width,
    height,
    description,
    count,
    material,
    lamination,
    borderCut,
    orderCategory,
    price
  );

  orderList.push(order);
  return orderList;
}
export default startTest;
