import styled from "styled-components";

const StyledFooter = styled.footer`
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding:20px 50px;
    width:100%;
    font-size: 25px;
    font-weight: bold;
    box-shadow: grey 0px -1px;
    position:sticky;
    bottom:0;
    background-color:white;
    z-index:2;
`

function Footer() {
    return (
        <StyledFooter>
            <span>Some Company 2024</span>            
        </StyledFooter>
    );
}

export default Footer;