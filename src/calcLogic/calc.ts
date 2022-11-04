export let orderList:any[] = [];
export function orderClear() {
  orderList = [];
}
interface IStartCalc{
  (width:number,
  height:number,
  description:string,
  count:number,
  material:string,
  lamination:string,
  borderCut:string,
  orderCategory:string,
  price:number):any[]
  
}

let startCalc:IStartCalc = function(
  width,
  height,
  description,
  count,
  material,
  lamination,
  borderCut,
  orderCategory,
  price
){
  class OrderItem {
    width:number
    height:number
    description:string
    count:number
    material:string
    lamination:boolean
    borderCut:boolean
    orderCategory:string
    price:number
    random:number
    totalArea:number
    onePcsArea:number
    onePcsCost:number
    totalCost:number
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
      this.random = parseInt((Math.random() * 10000).toFixed());
      this.orderCategory = orderCategory;
      this.price = price;
      this.totalArea = parseInt((this.width * this.height * this.count).toFixed(3));
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
export default startCalc;
