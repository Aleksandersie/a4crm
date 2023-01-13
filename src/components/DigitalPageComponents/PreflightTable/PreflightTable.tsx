import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { Table } from "react-bootstrap"
import { Context } from "../../.."



const PreflightTable:React.FC = observer( () => {

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
                                   <td></td>
                                   <td></td>
                              </tr>
                         </tbody>
                       
                      
                    </Table>
    )

})

export default PreflightTable