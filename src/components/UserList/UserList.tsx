import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { BsFillGearFill } from "react-icons/bs";
import { IGetUser, IUser } from "../../Store/UserStore";
import { useNavigate } from "react-router-dom";
import { USER_INFO_PAGE } from "../../routeConst/routeConst";

const UserList: React.FC = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className={"ps-5 pe-5 mt-4"}>
            <Table striped bordered hover size={"sm"}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Логин</th>
                        <th>Имя/Название</th>
                        <th>Роль</th>
                    </tr>
                </thead>
                <tbody>
                    {user.userList.rows.map((user: IUser, index) => (
                        <tr
                            key={user.id}
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(USER_INFO_PAGE + "/" + user.alias)}
                        >
                            <th>{index + 1}</th>
                            <th>{user.email}</th>
                            <th>{user.alias}</th>
                            <th>{user.role}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
});

export default UserList;
