import { Button } from "antd";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface ButtonProps{
    children: string,
    htmlType?: "button" | "reset" | "submit"
}

const GreyButton = styled(Button)`
    background-color: rgb(86,86,86);
    padding: 10px 40px;
    color:white;
`

const StyledButton:FunctionComponent<ButtonProps> = ({children, htmlType}) => {
    return (
        <GreyButton htmlType={htmlType}>
            {children}
        </GreyButton>
    );
}

export default StyledButton;