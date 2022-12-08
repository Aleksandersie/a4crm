import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { IUser } from "../../Store/UserStore";
import { getWholesalePrice,getRetailPrice } from "../axios/PriceApi";

const CustomersDropdown: React.FC = observer(() => {
    const { user,price } = useContext(Context);

    function selectedCustomer(customer: IUser) {
        user.setSelectedCustomer(customer);
        if(user.selectedCustomer.priceCategory === "wholesale"){
          console.log("Опт")
          getWholesalePrice().then(data=>price.setCurrentPriceList(data))
        }
        if(user.selectedCustomer.priceCategory === "retail"){
            console.log("Розничный")
            getRetailPrice().then(data=>price.setCurrentPriceList(data))
          }
    }

    return (
        <Dropdown style={{ color: "black" }}>
            <Dropdown.Toggle
                variant="outline-warning"
                id="dropdown-basic"
                style={{ color: "black" }}
            >
                {user.selectedCustomer.alias || "Выберите заказчика"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {user.customers.rows.map((customer) => (
                    <Dropdown.Item key={customer.id} onClick={() => selectedCustomer(customer)}>
                        {customer.alias}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
});

export default CustomersDropdown;
