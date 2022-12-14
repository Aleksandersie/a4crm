import {
  INT_PRINT,
  INT_PRINT_CALC,
  INT_PRINT_CUT,
} from "../routeConst/routeConst";

import { makeAutoObservable } from "mobx";

export default class MaterialStore {
  // Выбор самого верхнего уровня
  constructor() {
    this._category = [
      {
        id: 1,
        name: "Интерьерная печать",
        path: INT_PRINT_CALC,
        desc: "Рабочая ветка",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/maxresdefault-e1603785569284.jpg",
      },
      {
        id: 7,
        name: "Печать с ламинацией",
        path: INT_PRINT_CUT,
        desc: "Тестовый текст",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/etiketki1.jpg",
      },
      {
        id: 2,
        name: "Печать и резка",
        path: INT_PRINT_CUT,
        desc: "Тестовый текст",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/etiketki1.jpg",
      },
      {
        id: 8,
        name: "Печать и резка с ламинацией",
        path: INT_PRINT_CUT,
        desc: "Тестовый текст",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/etiketki1.jpg",
      },
      // {
      //   id: 3,
      //   name: "Цифровая печать",
      //   path: INT_PRINT,
      //   desc: "В разработке",
      //   img: "https://a4-yug.ru/wp-content/uploads/2020/10/flaery.jpg",
      // },
      {
        id: 4,
        name: "Плоттерная резка",
        path: INT_PRINT,
        desc: "В разработке",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/plotternaya_rezka4.jpg",
      },
      // {
      //   id: 5,
      //   name: "Стенды и таблички",
      //   path: INT_PRINT,
      //   desc: "В разработке",
      //   img: "https://a4-yug.ru/wp-content/uploads/2020/10/ugolok-potrebitelya.jpg",
      // },
      // {
      //   id: 6,
      //   name: "Ролл ап стенды",
      //   path: INT_PRINT,
      //   desc: "В разработке",
      //   img: "https://a4-yug.ru/wp-content/uploads/2020/09/menu7.png",
      // },
    ];
    this._list = []
    this._vinyl = [
      {
        name: "Белая глянцевая пленка",
        brand: "OraJet 3640G",
        id: 1,
        description: "Имеет глянцевую поверхность и блеск",
        imgLink:
          "https://a.allegroimg.com/s720/11e1c1/5bbee43445ef9e097d766a0903c1/ORACAL-Folia-Klejowa-Meblowa-BIALA-POLYSK-1mx50cm-Marka-DecoMeister",
      },
      {
        name: "Белая матовая пленка",
        brand: "OraJet 3640M",
        id: 2,
        description: "Имеет матовую поверхность и блеск отсутствует",
        imgLink:
          "https://www.remex.ru/images/stories/virtuemart/product/50_v_orajet-3640.jpg",
      },
      {
        name: "Прозрачная глянцевая пленка",
        brand: "OraJet 3640 Clear G",
        id: 3,
        description: "Прозрачная пленка, имеет блеск",
        imgLink:
          "https://www.virage24.ru/upload/iblock/cfc/cfcd2106106c5a2a3562df68b6c3b7d0.jpeg",
      },
      {
        name: "Прозрачная матовая пленка",
        brand: "OraJet 3640 Clear M",
        id: 4,
        description: "Прозрачная пленка, блеск отсутствует",
        imgLink:
          "https://fokus-groupp.ru/wp-content/uploads/2022/05/plenka-prozrachnaja-300x225.jpg",
      },
    ];
    this._specVinyl = [
      {
        name: "Перфорированая пленка",
        brand: "OraJet 3640G",
        id: 1,
        description: "Имеет глянцевую поверхность и блеск",
        imgLink:
          "https://redline32.ru/assets/cache_image/images/Products/print_materials/perforated-film_1920x0_6c4.jpg",
      },
      {
        name: "С черным клевым слоем",
        brand: "OraJet 3640M",
        id: 2,
        description: "Имеет матовую поверхность и блеск отсутствует",
      },
      {
        name: "Полимерная пленка",
        brand: "OraJet 3640 Clear G",
        id: 3,
        description: "Прозрачная пленка, имеет блеск",
      },
      {
        name: "Цветная пленка",
        brand: "OraJet 3640 Clear M",
        id: 4,
        description: "Прозрачная пленка, блеск отсутствует",
      },
    ];
    this._intPrintMaterial = [
      // Второй уровень выбора
      {
        id: 1,
        name: "Плёнка",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/IMG_7250-1-scaled.jpg",
      },
      {
        id: 2,
        name: "Баннер",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/banner2.jpeg",
      },
      {
        id: 3,
        name: "Бумага",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/foto_format1-150x150.jpg",
      },
      {
        id: 4,
        name: "Беклит",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/backlit3-e1603784572542.jpg",
      },
      {
        id: 5,
        name: "Тест",
        path: INT_PRINT_CALC,
        desc: "Самоклеящуюся пленку используют для рекламы, декора, хобби. ",
        img: "https://a4-yug.ru/wp-content/uploads/2020/10/backlit3-e1603784572542.jpg",
      },
    ];
    this._intPrintPhotoPaper = [
      {
        name: "Матовая фотобумага",
        brand: "Конфлекс",
        id: 7,
        description: "Матовая бумага для фотопечати",
        imgLink:
          "https://a4-yug.ru/wp-content/uploads/2020/10/posternaya_bumaga2.jpeg",
      },
      {
        name: "Глянцевая фотобумага",
        brand: "Конфлекс",
        id: 8,
        description: "Глянцевая бумага для фотопечати",
        imgLink:
          "https://a4-yug.ru/wp-content/uploads/2020/10/posternaya_bumaga1-e1603802660987.jpg",
      },
    ];
    this._intPrintBanner = [
      {
        name: "Баннер 440 гр",
        brand: "Конфлекс",
        id: 9,
        description: "Стандартный баннер для печати",
        imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/banner3.jpg",
      },
      {
        name: "Литой баннер",
        brand: "Конфлекс",
        id: 10,
        description: "Баннер с гладкой поверхностью",
        imgLink: "https://a4-yug.ru/wp-content/uploads/2020/10/banner1.jpg",
      },
    ]
  /////////материлы для плоттерной резки//////////
    this._whiteVinylForCutting = [    
        {
          name: "Белая глянцевая пленка",
          brand: "OraJet 3640G",
          id: 1,
        },
        {
          name: "Белая матовая пленка",
          brand: "OraJet 3640M",
          id: 2,
        },
    ]
    this._coloredVinylForCutting = [    
      {
        name: "Цветная глянцевая пленка",
        brand: "Oracal 640",
        id: 1,
      },
      {
        name: "Цветная матовая пленка",
        brand: "Oracal 640",
        id: 2,
      },
  ]
  this._thermoVinyl = [    
    {
      name: "Термоплёнка под резку",
      id: 1,
    },
  ]
  this._cuttingWithOutMaterial = [    
    {
      name: "Без материала",
      id: 1,
    },
  ]
    //////////////////////////////////////////////
    this._materialForPrintCut = [
      {
        id:1,
        name:"Плёнка"
      },
      {
        id:2,
        name:"Термоплёнка"
      },
      {
        id:3,
        name:"Цветная плёнка"
      },
   
    ]
    this._materialForIntPrint = [
      {
        id:1,
        name:"Плёнка"
      },
      {
        id:2,
        name:"Баннер"
      },
      {
        id:3,
        name:"Фотобумага"
      },
      {
        id:4,
        name:"Беклит"
      },
    ]
    this._materialForCutOnly = [
      {
        id:1,
        name:"Плёнка белая"
      },
      {
        id:2,
        name:"Плёнка цветная"
      },
      {
        id:3,
        name:"Термоплёнка"
      },
      {
        id:4,
        name:"Без материала"
      },
    ]
    this._materialForPrintAndPrintCutWithLam = [
      {
        id:1,
        name:"Плёнка"
      },
     
    ]
    this._selectedCategory = {};
    this._selectedMaterial = {};
    this._selectedVinyl = {};
    this._selectedSpecVinyl = {};
    this._selectedMaterialType = [];
    this._selectedIntPrintMaterial = {}; // подсветка кнопки и заголовок селектора
    makeAutoObservable(this);
  }
  setCategory(category) {
    this._category = category;
  }
  get category() {
    return this._category;
  }
  setSelectedCategory(category) {
    this._selectedCategory = category;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }

  setList(material) {
    this._list = material;
  }
  setSelectedMaterial(material) {
    this._selectedMaterial = material;
  }

  get list() {
    return this._list;
  }
  get selectedMaterial() {
    return this._selectedMaterial;
  }
  setVinyl(vinyl) {
    this._vinyl = vinyl;
  }
  get vinyl() {
    return this._vinyl;
  }
  setSelectedVinyl(vinyl) {
    this._selectedVinyl = vinyl;
  }
  get selectedVinyl() {
    return this._selectedVinyl;
  }
  setSelectedSpecVinyl(vinyl) {
    this._selectedSpecVinyl = vinyl;
  }
  get selectedSpecVinyl() {
    return this._selectedSpecVinyl;
  }
  setIntPrintMaterial(material) {
    this._intPrintMaterial = material;
  }
  get intPrintMaterial() {
    return this._intPrintMaterial;
  }
  setSelectedIntPrintMaterial(material) {
    this._selectedIntPrintMaterial = material;
  }
  get selectedIntPrintMaterial() {
    return this._selectedIntPrintMaterial;
  }
  setSelectedMaterialType(material) {
    this._selectedMaterialType = material;
  }
  get selectedMaterialType() {
    return this._selectedMaterialType;
  }
  setIntPrintPhotoPaper(paper) {
    this._intPrintPhotoPaper = paper;
  }
  get intPrintPhotoPaper() {
    return this._intPrintPhotoPaper;
  }
  setIntPrintBanner(banner) {
    this._intPrintBanner = banner;
  }
  get intPrintBanner() {
    return this._intPrintBanner;
  }
  /////////////
  setPVCPlate(plate){
    this._PVCPlate = plate
  }
  get PVCPlate(){
    return this._PVCPlate
  }
  //////////////////////////////////////
  setMaterialForPrintCut(material){
    this._materialForPrintCut = material
  }
  get materialForPrintCut(){
    return this._materialForPrintCut
  }
  setMaterialForIntPrint(material){
    this._materialForIntPrint = material
  }
  get materialForIntPrint(){
    return this._materialForIntPrint
  }
  setMaterialForCutOnly(material){
    this._materialForCutOnly = material
  }
  get materialForCutOnly(){
    return this._materialForCutOnly
  }
  setMaterialForPrintAndPrintCutWithLam(material){
    this._materialForPrintAndPrintCutWithLam = material
  }
  get materialForPrintAndPrintCutWithLam(){
    return this._materialForPrintAndPrintCutWithLam
  }
  ///////////////////////////////cutting
  setWhiteVinylForCutting(material){
    this._whiteVinylForCutting = material
  }
  get whiteVinylForCutting(){
    return this._whiteVinylForCutting
  }
  setColoredVinylForCutting(material){
    this._coloredVinylForCutting = material
  }
  get coloredVinylForCutting(){
    return this._coloredVinylForCutting
  }
  setThermoVinyl(material){
    this._thermoVinyl = material
  }
  get thermoVinyl(){
    return this._thermoVinyl
  }
  setCuttingWithOutMaterial(material){
    this._cuttingWithOutMaterial = material
  }
  get cuttingWithOutMaterial(){
    return this._cuttingWithOutMaterial
  }

}
