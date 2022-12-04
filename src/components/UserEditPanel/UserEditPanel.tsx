import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

import { observer } from "mobx-react-lite";
import { IUser } from "../../Store/UserStore";

interface IEditableUser {
    user: IUser;
}

const UserEditPanel: React.FC<IEditableUser> = observer(({ user }) => {
    const [mail, setMail] = useState("");

    function editEmail(email) {
        console.log(mail);
    }

    return (
        <Card style={{ textAlign: "center" }} className={"mt-5"}>
            <Card.Header>
                <h4>Редактирование пользователя</h4>
            </Card.Header>
            <div>
                {user.email}
                <Form.Control
                    placeholder={user.email}
                    value={mail}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}
                />
            </div>
            <Button onClick={editEmail}>click</Button>
        </Card>
    );
});

export default UserEditPanel;
