import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const DigitalPrintCategoryDropdown = observer(() => {
     const { digitalStore } = useContext(Context);
     return (
          <Dropdown style={{ color: "black" }}>
               <Dropdown.Toggle
                    variant="outline-warning"
                    id="dropdown-basic"
                    style={{ color: "black" }}
               >
                    {digitalStore.selectedDigitalPrintCategory.desc || "Выберите материал"}
               </Dropdown.Toggle>

               <Dropdown.Menu>
                    {digitalStore.digitalPrintCategory.map((i) => (
                         <Dropdown.Item
                              key={i.id}
                              onClick={() => digitalStore.setSelectedDigitalPrintCategory(i)}
                         >
                              {i.desc}
                         </Dropdown.Item>
                    ))}
               </Dropdown.Menu>
          </Dropdown>
     );
});

export default DigitalPrintCategoryDropdown;
