import { Card, Layout } from "antd";
import Header from "../components/shared/Header";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";
import StyledButton from "../components/ui/StyledButton";
import Footer from "../components/shared/Footer";
import { NavLink } from "react-router-dom";

const VideoSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 30px 30px;
    gap:40px;
    background-color:rgb(212,213,213);
`
const VideoInfo = styled.div`
    max-width:500px;
`
const VideoScreen = styled.div`
    width:40%;
`
const CardSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    padding: 0px 30px;
    gap:40px;
`
const CardSectionContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap:10px;
`
const EmptySectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
    padding: 40px 30px;
    gap:40px;
    background-color:rgb(212,213,213);
`
const Styledh2 = styled.h2`
    font-size:3em;
    margin-bottom:0px;
`
const Styledh3 = styled.h3`
    font-size:2.7em;
    margin-bottom:0px;
`

function Main() {

    const cardContent = [
        {
            title:"Title",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        },
        {
            title:"Title",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        },
        {
            title:"Title",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        },
        {
            title:"Title",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        },
        {
            title:"Title",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        },
        {
            title:"Title",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        },
    ]

    return ( 
        <>
            <Layout>
                <Header/>
                <Content>
                    <VideoSectionContainer>
                        <VideoInfo>
                            <h1>Most important title on the page</h1>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</span>
                        </VideoInfo>
                        <VideoScreen>
                            <iframe style={{width: "100%", height:"100%"}} src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
                        </VideoScreen>
                    </VideoSectionContainer>
                    <CardSectionContainer>
                        <Styledh2>Also very important title</Styledh2>
                        <CardSectionContent>
                            {cardContent.map((card, index) => (
                                <Card title={card.title} key={index} style={{ width: 400}}>{card.content}</Card>
                            ))}
                        </CardSectionContent>
                        <NavLink to={'/form'}>
                            <StyledButton>Contact us</StyledButton>
                        </NavLink>
                        
                    </CardSectionContainer>
                    <EmptySectionContainer>
                        <Styledh3>Less important title</Styledh3>
                        <NavLink to={'/form'}>
                            <StyledButton>Contact us</StyledButton>
                        </NavLink>
                    </EmptySectionContainer>
                </Content>
                <Footer/>
            </Layout>
        </> 
    );
}

export default Main;
