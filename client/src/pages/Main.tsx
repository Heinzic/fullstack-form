import { Card, Layout } from "antd";
import Header from "../components/shared/Header";
import { Content } from "antd/es/layout/layout";
import StyledButton from "../components/ui/StyledButton";
import Footer from "../components/shared/Footer";
import { NavLink } from "react-router-dom";
import { VideoSectionContainer, VideoInfo, VideoScreen, CardSectionContainer, Styledh2, CardSectionContent, EmptySectionContainer, Styledh3 } from "../components/shared/styles";

const CARD_CONTENT = [
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

function Main() {
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
                            <iframe style={{width: "100%", height:"100%"}} src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=GGNX5KtCFOBwGbVp"/>
                        </VideoScreen>
                    </VideoSectionContainer>
                    <CardSectionContainer>
                        <Styledh2>Also very important title</Styledh2>
                        <CardSectionContent>
                            {CARD_CONTENT.map((card, index) => (
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
