import React, { useContext } from "react";
import { Paper } from "@mui/material";
import { Row, Col, Card, Button } from "react-bootstrap";
import TypeCard from "./TypeCard/TypeCard";
import {
  INT_PRINT,
  INT_PRINT_CALC,
  INT_PRINT_CUT,
} from "../../routeConst/routeConst";
import { NavLink, useLocation } from "react-router-dom";
import s from "../CalcBlock/CalckBlock.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Context } from "../../index";
const CategoryBlock = () => {
  const { materialList } = useContext(Context);

  const location = useLocation();

  function selectOrderCategory(cat) {
    materialList.setSelectedCategory(cat);
  }

  return (
    <Card className="text-center mt-4 mb-4 shadow ">
      <Card.Header style={{ fontSize: 25, fontWeight: 500 }}>
        <div className={s.block}>
          <div>Выберите категорию</div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Row className="d-flex justify-content-around">
          {materialList.category.map((cat) => (
            <Card
              style={{ minWidth: 180, width: 270, padding: 0 }}
              className="mt-3 pb-3"
              key={cat.id}
            >
              <Card.Header style={{ fontWeight: 500 }}>{cat.name}</Card.Header>
              <div style={{ overflow: "hidden" }}>
                {" "}
                <Card.Img
                  src={cat.img}
                  style={{ height: 150, width: 270, borderRadius: 0 }}
                ></Card.Img>
              </div>
              <Card.Text className="mt-1">{cat.desc}</Card.Text>
              <NavLink to={cat.path}>
                <Button
                  variant={
                    cat.id === materialList.selectedCategory.id
                      ? "danger"
                      : "warning"
                  }
                  disabled={cat.desc === "В разработке"}
                  style={{ width: 150 }}
                  className="m-auto"
                  onClick={() => selectOrderCategory(cat)}
                >
                  Выбрать
                </Button>
              </NavLink>
            </Card>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CategoryBlock;
