import { Layout } from "antd";
import Header from "../components/shared/Header";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

const ContentContainer = styled(Content)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px 0px;
    padding: 0px 30px;
    gap:40px;
`
const VideoInfo = styled.div`
    max-width:500px;
`

function Main() {
    return ( 
        <>
            <Layout>
                <Header/>
                <ContentContainer>
                    <VideoInfo>
                        <h1>Most important title on the page</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</span>
                    </VideoInfo>
                    <div>
                        <iframe width={600} height={315} src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
                    </div>
                </ContentContainer>
            </Layout>
        </> 
    );
}

export default Main;
