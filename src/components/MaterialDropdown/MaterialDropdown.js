import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Context } from "../..";

const MaterialDropdown = observer(() => {
  const { materialList } = useContext(Context);

  function setMaterial(material) {
    materialList.setSelectedMaterial(material);
  }
  return (
    <Dropdown style={{ color: "black" }}>
      <Dropdown.Toggle
        variant="outline-warning"
        id="dropdown-basic"
        style={{ color: "black" }}
      >
        {materialList.selectedMaterial.name || "Выберите материал"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {materialList.selectedMaterialType.map((i) => (
          <Dropdown.Item key={i.id} onClick={() => setMaterial(i)}>
            {i.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default MaterialDropdown;
