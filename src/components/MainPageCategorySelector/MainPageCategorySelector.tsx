import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { DIGITAL_PRINT_CALC, INT_PRINT_CALC } from "../../routeConst/routeConst"
import {AiOutlineCalculator} from 'react-icons/ai'
import "./style.scss"

const MainPageCategorySelector =()=>{
    
    const navigate = useNavigate()

    return(
        <Card className="mt-4 mb-5">
           <Card.Header style={{textAlign:"center"}}><h5>Виды работ</h5></Card.Header>
           <Card.Body className=" d-flex flex-row justify-content-around">
           <Card 
           style={{width:300,height:200,cursor:"pointer", fontWeight:700,fontSize:22,textAlign:"center"}}
           className={"customCard"}
           onClick={()=>navigate(INT_PRINT_CALC)}
           >
            Интерьерная печать и наклейки
            <AiOutlineCalculator style={{fontSize:80}}/>
            </Card>
           <Card 
           style={{width:300,height:200,cursor:"pointer", fontWeight:700,fontSize:22,textAlign:"center"}}
           className={"customCard"}
           onClick={()=>navigate(DIGITAL_PRINT_CALC)}
           >
            Цифровая печать и наклейки на бумаге
            <AiOutlineCalculator style={{fontSize:80}}/>
            </Card>
           </Card.Body>
        </Card>
    )
}


export default MainPageCategorySelector