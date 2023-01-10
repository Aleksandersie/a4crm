import { useContext } from "react"
import { Dropdown } from "react-bootstrap"
import { Context } from "../../.."



const DigitalPrintCategoryDropdown =()=>{
 const {digitalStore} = useContext(Context) 
    return(
        <Dropdown style={{ color: "black" }}>
        <Dropdown.Toggle
          variant="outline-warning"
          id="dropdown-basic"
          style={{ color: "black" }}
        >
          {"Выберите материал"}
          {/* {digitalStore.selectedMaterial.name || "Выберите материал"} */}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          {digitalStore.digitalPrintCategory.map((i) => (
            <Dropdown.Item key={i.id} >
              {i.desc}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    )
}

export default DigitalPrintCategoryDropdown