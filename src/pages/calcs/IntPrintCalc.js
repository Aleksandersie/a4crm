import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar/SideBar";
import TopStepper from "../../components/TopStepper/TopStepper";
import TopBreadCrumbs from "../../components/TopBreadCrumbs/TopBreadCrumbs";
import CategoryBlock from "../../components/CategoryCard/CategoryBlock";
import React, { useContext, useEffect } from "react";
import CalcBlock from "../../components/CalcBlock/CaclBlock";
import OrderListBlock from "../../components/OrderListBlock/OrderListBlock";
import { Context } from "../../index";
import MaterialSelector from "../../components/MaterialSelector/MaterialSelector";
import MaterialList from "../../components/MateriaList/MaterialList";
import NewMaterialSelector from "../../components/NewMaterialSelector/NewMaterialSelector";
import AdditionalBlock from "../../components/AdditionalBlock/AdditionalBlock";
import MaterialTypeList from "../../components/MaterialTypeList/MaterialTypeList";
import SubmitOrder from "../../components/SubmitOrder/SubmitOrder";
import { getRetailPrice,getWholesalePrice } from '../../components/axios/PriceApi'
const IntPrintCalc = () => {
    
     const { materialList,user,price } = useContext(Context);
     useEffect(()=>{
          if (user.user.priceCategory === "retail"){
               getRetailPrice().then((data) => price.setCurrentPriceList(data))
          }
          if (user.user.priceCategory === "wholesale"){
               getWholesalePrice().then((data) => price.setCurrentPriceList(data))
          }
     })
     
     console.log(user.user.priceCategory);
     // useEffect(() => {
     //   if (materialList.selectedMaterialType.name === undefined) {
     //     //materialList.setSelectedMaterialType(materialList.intPrintMaterial);
     //     materialList.setSelectedMaterialType(materialList.vinyl);
     //     materialList.setSelectedIntPrintMaterial(materialList.vinyl)
     //     console.log("empty");
     //   }
     // });
     return (
          <Container>
               {/* <Row>*/}
               {/*  <Col className="col-3 mt-4">*/}
               {/*    <SideBar />*/}
               {/*  </Col>*/}
               {/*  <Col className="col-9 mt-4">*/}
               {/*<TopStepper />*/}
               {/*<TopBreadCrumbs />*/}
               {/*<MaterialTypeList />*/}
               {/*<NewMaterialSelector />*/}
               {/*<AdditionalBlock /> */}
               <CalcBlock />
               {user.isAuth?
                    
                    <>
                    <OrderListBlock />
                    <SubmitOrder />
                    </>
                    :
                    ''
          
               }
              
               {/*  </Col>*/}
               {/*</Row>*/}

               {/*<CalcBlock />*/}
               {/*<OrderListBlock />*/}
          </Container>
     );
};

export default IntPrintCalc;
