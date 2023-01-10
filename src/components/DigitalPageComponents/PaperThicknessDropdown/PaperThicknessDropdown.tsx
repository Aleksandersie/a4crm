import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const PaperThicknessDropdown = observer(() => {
     const { digitalStore } = useContext(Context);
     return (
          <Dropdown style={{ color: "black" }}>
               <Dropdown.Toggle
                    variant="outline-warning"
                    id="dropdown-basic"
                    style={{ color: "black" }}
               >
                    {digitalStore.selectedPaperThickness.thickness || "Выберите плотность"}
               </Dropdown.Toggle>

               <Dropdown.Menu>
                    {digitalStore.paperThickness.map((i) => (
                         <Dropdown.Item
                              key={i.id}
                              onClick={() => digitalStore.setSelectedPaperThickness(i)}
                         >
                              {i.thickness}
                         </Dropdown.Item>
                    ))}
               </Dropdown.Menu>
          </Dropdown>
     );
});

export default PaperThicknessDropdown;
