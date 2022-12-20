import { observer } from "mobx-react-lite";
import { Form, Table } from "react-bootstrap";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { searchUser } from "../axios/UserApi";
import { Context } from "../../index";

interface ISearchCustomers {
     show: any;
}
const SearchCustomers: React.FC<ISearchCustomers> = observer(({ show }) => {
     const { user } = useContext(Context);
     const name = React.useRef<HTMLInputElement>(null);

     async function search() {
          await searchUser(name.current.value).then((data) => user.setCustomers(data));
     }

     function setOrderOwner(owner) {
          user.setSelectedCustomer(owner);
          show(false);
     }

     return (
          <div>
               <div className={"d-flex gap-4 flex-column"}>
                    <div className={"d-flex gap-4"}>
                         <Form.Control ref={name} />
                         <Button variant="contained" onClick={search}>
                              Найти
                         </Button>
                    </div>
                    <Table striped bordered hover style={{ textAlign: "center" }}>
                         
                    {user.customers.rows?   
                    // проверка на пустоту массива
                    <tbody>
                              {user.customers.rows.map((customer) => (
                                   <tr>
                                        <td
                                             onClick={() => setOrderOwner(customer)}
                                             style={{ cursor: "pointer" }}
                                        >
                                             {customer.alias}
                                        </td>
                                   </tr>
                              ))}
                    </tbody>
                         :
                         "Введите имя для поиска"}
                         {/* <tbody>
                              {user.customers.rows.map((customer) => (
                                   <tr>
                                        <td
                                             onClick={() => setOrderOwner(customer)}
                                             style={{ cursor: "pointer" }}
                                        >
                                             {customer.alias}
                                        </td>
                                   </tr>
                              ))}
                         </tbody> */}
                    </Table>
               </div>
          </div>
     );
});

export default SearchCustomers;
