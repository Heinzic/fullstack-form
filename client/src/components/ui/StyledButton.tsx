import { Button } from "antd";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface ButtonProps{
    children: string
}

const GreyButton = styled(Button)`
    background-color: rgb(86,86,86);
    padding: 10px 40px;
    color:white;
`

const StyledButton:FunctionComponent<ButtonProps> = ({children}) => {
    return (
        <GreyButton>
            {children}
        </GreyButton>
    );
}

export default StyledButton;