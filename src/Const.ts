export const adminConst: string = "admin";
export const managerConst: string = "manager";
export const customerConst: string = "customer";
export const workerConst: string = "worker";
////////////////////////////////////////
export const retailPrice: string = "retail";
export const wholesalePrice: string = "wholesale";
///////////////////////////////////
export const minOrderValue: number = 500;
////////discount steps///////
export const firstDiscountStep: number = 1; // Количество кв.м. для скидки
export const firstDiscountValue: number = 10; // Процент скидки
export const secondDiscountStep: number = 3;
export const secondDiscountValue: number = 15;
export const thirdDiscountStep: number = 6;
export const thirdDiscountValue: number = 20;
///////////order statuses////////////
export const takeToWorkStatus: string = "Принят в работу";
export const inProgressStatus: string = "Выполняется";
export const completeStatus: string = "Готов";
/////////////DIGITAL PRINT CALC//////////////////
export enum digitalPrintDiscountSteps{
    copies_1 = 1,
    copies_2 = 2,
    copies_3 = 3,
    copies_4 = 4,
    copies_5 = 5,
    copies_6 = 6

}
export enum digitalPrintDiscountValue{
    stage_1 = 5,
    stage_2 = 10,
    stage_3 = 15
}