import { firstDiscountStep, firstDiscountValue, secondDiscountStep, secondDiscountValue } from "../Const";

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
    totalCostTest:any
    
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
      this.totalArea = parseFloat((this.width * this.height * this.count).toFixed(3));
      this.onePcsArea = parseFloat( (this.width * this.height).toFixed(3));
      this.onePcsCost = this.onePcsArea * this.price;
      this.totalCost = this.totalArea * this.price;
      this.totalCostTest = this.discountCalc()
    }
    discountCalc():number{
     if(this.totalArea>firstDiscountStep){
      let curentDicscountValue:number = (this.price*firstDiscountValue)/100
      let discountPrice:number =  this.price - curentDicscountValue
      return this.totalArea * discountPrice
     } if(this.totalArea>secondDiscountStep){
      let curentDicscountValue:number = (this.price*secondDiscountValue)/100
      let discountPrice:number =  this.price - curentDicscountValue
      return this.totalArea * discountPrice
     }
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
  console.log(orderList)
  return orderList;
}
export default startCalc;
