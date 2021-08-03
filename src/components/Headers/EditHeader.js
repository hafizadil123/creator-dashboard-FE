
import React from "react";

// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {useHistory} from "react-router-dom";

const EditHeader = () => {

    const username = JSON.parse(localStorage.getItem("user")).name;
    const history = useHistory();

    return (
        <>
            <div
                className="header d-flex align-items-center"
                style={{
                    minHeight: "300px",
                    backgroundImage:
                        "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                }}
            >
            </div>
        </>
    );
}

export default EditHeader;
