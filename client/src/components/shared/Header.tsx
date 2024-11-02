import styled from "styled-components";
import StyledButton from "../ui/StyledButton";
import { NavLink } from "react-router-dom";

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
    position:sticky;
    top:0;
    background-color:white;
    z-index:2;
`

function Header() {
    return (
        <StyledHeader>
            <span>Some Company</span>
            <NavLink to={'/form'}>
                <StyledButton>Contact us</StyledButton>
            </NavLink>
        </StyledHeader>
    );
}

export default Header;