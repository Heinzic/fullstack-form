import { Button } from "antd";
import styled from "styled-components";

interface ButtonProps{
    children: string
}

const GreyButton = styled(Button)`
    background-color: grey;
    padding: 10px 40px
`

function StyledButton({children}: ButtonProps) {
    return (
        <GreyButton>
            {children}
        </GreyButton>
    );
}

export default StyledButton;