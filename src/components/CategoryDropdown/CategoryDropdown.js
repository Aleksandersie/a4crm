import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const CategoryDropdown = observer(() => {
  const { materialList } = useContext(Context);

  function selectCategory(category) {
    materialList.setSelectedCategory(category);
  
    if(category.name==="Стенды и таблички"){
      console.log(materialList.PVCPlate.name)
      materialList.setSelectedMaterialType(materialList.PVCPlate)
      console.log(materialList.selectedMaterialType)
     // materialList.PVCPlate.name
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
