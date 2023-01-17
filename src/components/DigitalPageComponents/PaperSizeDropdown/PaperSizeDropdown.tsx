import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";

const PaperSizeDropdown = observer(() => {
     const { digitalStore } = useContext(Context);
     return (
          <Dropdown style={{ color: "black" }}>
               <Dropdown.Toggle
                    variant="outline-warning"
                    id="dropdown-basic"
                    style={{ color: "black" }}
               >
                    {digitalStore.currentPaperSize.size || "Выберите формат"}
               </Dropdown.Toggle>

               <Dropdown.Menu>
                    {digitalStore.paperSizeForSheetFeed.map((i) => (
                         <Dropdown.Item
                              key={i.id}
                              onClick={() => digitalStore.setCurrentPaperSize(i)}
                         >
                              {i.size}
                         </Dropdown.Item>
                    ))}
               </Dropdown.Menu>
          </Dropdown>
     );
});

export default PaperSizeDropdown;
