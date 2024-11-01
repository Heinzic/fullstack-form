import styled from "styled-components";
import StyledButton from "../ui/StyledButton";

const StyledHeader = styled.header`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding:15px 50px;
    width:100%;
    font-size: 25px;
    font-weight: bold;
    box-shadow: grey 0px 1px;
`

function Header() {
    return (
        <StyledHeader>
            <span>Some Company</span>
            <StyledButton>Contact us</StyledButton>
        </StyledHeader>
    );
}

export default Header;