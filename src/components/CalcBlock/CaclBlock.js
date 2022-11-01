import React, { useContext } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import CalcInputBlock from "../CalcInputBlock/CalcInputBlock";
import { Paper } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import s from "./CalckBlock.module.css";
import { observer } from "mobx-react-lite";
import MaterialDropdown from "../MaterialDropdown/MaterialDropdown";
import TypeDropdown from "../TypeDropdown/TypeDropdown";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";

const CalcBlock = observer(() => {
  const navigate = useNavigate();
  const { materialList } = useContext(Context);
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Paper elevation={3} style={{ textAlign: "center" }} className="mt-4">
      <Card className="text-center ">
        <Card.Header style={{ fontSize: 25, fontWeight: 500 }}>
          <div className={s.block}>
            <AiOutlineArrowLeft
              style={{
                display: "flex",
                fontSize: 25,
                cursor: "pointer",
                position: "absolute",
                top: 10,
              }}
              onClick={goBack}
            />
            <div> Калькулятор расчета печати</div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>
            <div className="d-flex justify-content-center align-items-center gap-5 mt-2">
              <div>
                <div className="mb-2">Категория заказа:</div>
                <CategoryDropdown />
              </div>
              <div>
                <div className="mb-2">Категория материала:</div>
                <TypeDropdown />
              </div>
              <div>
                <div className="mb-2">Используемый материал: </div>
                <MaterialDropdown />
              </div>
            </div>

            {/* <Button
              variant="outline-warning"
              disabled
              style={{ color: "black", fontWeight: "800" }}
              className=" ms-2"
            >
              {materialList.selectedVinyl.name || "Выберите материал"}
            </Button> */}
          </Card.Subtitle>
          <Card.Title style={{ marginTop: 30 }}>Введите размеры:</Card.Title>
          <CalcInputBlock />
        </Card.Body>
      </Card>
    </Paper>
  );
});

export default CalcBlock;
