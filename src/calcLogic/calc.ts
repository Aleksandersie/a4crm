import {
    firstDiscountStep,
    firstDiscountValue,
    secondDiscountStep,
    secondDiscountValue,
    thirdDiscountStep,
} from "../Const";

export let orderList: any[] = [];
export function orderClear() {
    orderList = [];
}
interface IStartCalc {
    (
        width: number,
        height: number,
        description: string,
        count: number,
        material: string,
        lamination: string,
        borderCut: string,
        orderCategory: string,
        price: number
    ): any[];
}

let startCalc: IStartCalc = function (
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
        width: number;
        height: number;
        description: string;
        count: number;
        material: string;
        lamination: boolean;
        borderCut: boolean;
        orderCategory: string;
        price: number;
        random: number;
        totalArea: number;
        onePcsArea: number;
        onePcsCost: number;
        totalCost: number;
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
            this.totalArea = parseFloat((this.width * this.height * this.count).toFixed(4));
            this.onePcsArea = parseFloat((this.width * this.height).toFixed(4));
            //this.onePcsCost = this.onePcsArea * this.price;
            this.onePcsCost = this.onePcsDiscountCalc();
            //this.totalCost = this.totalArea * this.price;
            //this.totalCost = this.totalDiscountCalc();
            this.totalCost = this.onePcsCost * count;
        }
        totalDiscountCalc(): number {
            if (this.totalArea <= firstDiscountStep) {
                let discountPrice: number = this.price;
                return this.totalArea * discountPrice;
            }
            if (this.totalArea > firstDiscountStep && this.totalArea < secondDiscountStep) {
                let currentDiscountValue: number = (this.price * firstDiscountValue) / 100;
                let discountPrice: number = this.price - currentDiscountValue;
                return this.totalArea * discountPrice;
            }
            if (this.totalArea >= secondDiscountStep && this.totalArea < thirdDiscountStep) {
                let currentDiscountValue: number = (this.price * secondDiscountValue) / 100;
                let discountPrice: number = this.price - currentDiscountValue;
                return this.totalArea * discountPrice;
            }
            if (this.totalArea >= thirdDiscountStep && this.totalArea < 1000) {
                // Заглушка
                let currentDiscountValue: number = (this.price * secondDiscountValue) / 100;
                let discountPrice: number = this.price - currentDiscountValue;
                return this.totalArea * discountPrice;
            }
        }
        onePcsDiscountCalc(): number {
            if (this.totalArea <= firstDiscountStep) {
                let discountPrice: number = this.price;
                let oneCount = this.onePcsArea * discountPrice;
                if (oneCount < 1) {
                    oneCount = 1;
                }
                return oneCount;
            }
            if (this.totalArea > firstDiscountStep && this.totalArea < secondDiscountStep) {
                let currentDiscountValue: number = (this.price * firstDiscountValue) / 100;
                let discountPrice: number = this.price - currentDiscountValue;
                return this.onePcsArea * discountPrice;
            }
            if (this.totalArea >= secondDiscountStep && this.totalArea < thirdDiscountStep) {
                let currentDiscountValue: number = (this.price * secondDiscountValue) / 100;
                let discountPrice: number = this.price - currentDiscountValue;
                return this.onePcsArea * discountPrice;
            }
            if (this.totalArea >= thirdDiscountStep && this.totalArea < 1000) {
                // Заглушка
                let currentDiscountValue: number = (this.price * secondDiscountValue) / 100;
                let discountPrice: number = this.price - currentDiscountValue;
                return this.onePcsArea * discountPrice;
            }
        }
    }

    let order: OrderItem = new OrderItem(
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
    console.log(orderList);
    return orderList;
};
export default startCalc;