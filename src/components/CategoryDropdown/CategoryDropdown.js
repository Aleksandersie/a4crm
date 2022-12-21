import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const CategoryDropdown = observer(() => {
  const { materialList } = useContext(Context);

  function selectCategory(category) {
    materialList.setSelectedCategory(category);
    if(category.name==="Интерьерная печать"){
      materialList.setIntPrintMaterial(materialList.materialForIntPrint)
    }
    if(category.name==="Печать с ламинацией"){
      materialList.setIntPrintMaterial(materialList.materialForPrintAndPrintCutWithLam)
    }
    if(category.name==="Печать и резка"){
      materialList.setIntPrintMaterial(materialList.materialForPrintCut)
    }
    if(category.name==="Печать и резка с ламинацией"){
      materialList.setIntPrintMaterial(materialList.materialForPrintAndPrintCutWithLam)
    }
    if(category.name==="Плоттерная резка"){
      materialList.setIntPrintMaterial(materialList.materialForCutOnly)
    }
  
  }
  return (
    <Dropdown style={{ color: "black" }}>
      <Dropdown.Toggle
        variant="outline-warning"
        id="dropdown-basic"
        style={{ color: "black" }}
      >
        {materialList.selectedCategory.name || "Выберите категорию"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {materialList.category.map((i) => (
          <Dropdown.Item key={i.id} onClick={() => selectCategory(i)}>
            {i.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default CategoryDropdown;
