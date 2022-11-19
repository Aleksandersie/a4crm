import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { IUser } from "../../Store/UserStore";

const CustomersDropdown: React.FC = observer(() => {
    const { user } = useContext(Context);

    function selectedCustomer(customer: IUser) {
        user.setSelectedCustomer(customer);
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
                {user.customers.map((customer) => (
                    <Dropdown.Item key={customer.id} onClick={() => selectedCustomer(customer)}>
                        {customer.alias}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
});

export default CustomersDropdown;
