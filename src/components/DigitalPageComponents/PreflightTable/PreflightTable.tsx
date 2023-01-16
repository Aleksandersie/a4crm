import { observer } from "mobx-react-lite"
import { useContext} from "react"
import { Table } from "react-bootstrap"
import { Context } from "../../.."

interface IPreflightTable{
    totalPrintSumState:number,
    onePcsCost:number
}


const PreflightTable:React.FC<IPreflightTable> = observer( ({totalPrintSumState,onePcsCost}) => {

    const {digitalStore} = useContext(Context)

   

    return(
        <Table striped bordered hover size="sm" className="mt-4">
                         <thead>
                              <tr>
                                   <th colSpan={4}>
                                        Формат изделия: {digitalStore.selectedPaperSizeForSheetFeed.size}
                                        <br /> Материал: {digitalStore.selectedPaperThickness.thickness}
                                   </th>
                              </tr>
                              <tr>
                                   <th>Стоимость одной штуки:</th>
                                   <th>Общая стоимость тиража:</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <td>{onePcsCost}</td>
                                   <td>{totalPrintSumState}</td>
                              </tr>
                         </tbody>
                       
                      
                    </Table>
    )

})

export default PreflightTable