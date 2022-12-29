import { Dropdown } from "react-bootstrap";
import { Context } from "../..";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const TypeDropdown = observer(() => {
  const { materialList } = useContext(Context);
  
  //выбор категории материала
  function selectType(material) {
    materialList.setSelectedIntPrintMaterial(material); //подсветка кнопки и заголовок селектора
    if (material.name === "Плёнка") {
      console.log("Выбрана пленка");
      materialList.setSelectedMaterialType(materialList.vinyl);
    }
    if (material.name === "Баннер") {
      console.log("Выбран баннер");
      materialList.setSelectedMaterialType(materialList.intPrintBanner);
    }
    if (material.name === "Фотобумага") {
      console.log("Выбрана бумага");
      materialList.setSelectedMaterialType(materialList.intPrintPhotoPaper);
    }
    if (material.name === "Плёнка белая") {
      console.log("Пленка под резку");
      materialList.setSelectedMaterialType(materialList.whiteVinylForCutting);
    }


    console.log( materialList.selectedIntPrintMaterial );
  }
  return (
    <Dropdown style={{ color: "black" }}>
      <Dropdown.Toggle
        variant="outline-warning"
        id="dropdown-basic"
        style={{ color: "black" }}
      >
        {materialList.selectedIntPrintMaterial.name || "Выберите материал"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {materialList.intPrintMaterial.map((i) => (
          <Dropdown.Item key={i.id} onClick={() => selectType(i)}>
            {i.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default TypeDropdown;
