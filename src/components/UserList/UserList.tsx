import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { BsFillGearFill } from "react-icons/bs";

const UserList: React.FC = observer(() => {
    const { user } = useContext(Context);
    return (
        <div className={"ps-5 pe-5 mt-4"}>
            <Table striped bordered hover size={"sm"}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Логин</th>
                        <th>Имя/Название</th>
                        <th>Роль</th>
                        <th>
                            <BsFillGearFill />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.userList.map((user, index) => (
                        <tr key={user.id}>
                            <th>{index + 1}</th>
                            <th>{user.email}</th>
                            <th>{user.alias}</th>
                            <th>{user.role}</th>
                            <th>
                                <BsFillGearFill style={{ cursor: "pointer" }} />
                            </th>
                        </tr>
                    ))}
                    {/*<tr>*/}
                    {/*    <td>1</td>*/}
                    {/*    <td>Mark</td>*/}
                    {/*    <td>Otto</td>*/}
                    {/*    <td>@mdo</td>*/}
                    {/*</tr>*/}
                </tbody>
            </Table>
        </div>
    );
});

export default UserList;
