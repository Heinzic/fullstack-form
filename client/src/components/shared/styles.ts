import { Form, FormProps } from "antd"
import { Content } from "antd/es/layout/layout"
import styled from "styled-components"

export const VideoSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 30px 30px;
    gap:40px;
    background-color:rgb(212,213,213);
`
export const VideoInfo = styled.div`
    max-width:500px;
`
export const VideoScreen = styled.div`
    width:40%;
`
export const CardSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    padding: 0px 30px;
    gap:40px;
`
export const CardSectionContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap:10px;
`
export const EmptySectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
    padding: 40px 30px;
    gap:40px;
    background-color:rgb(212,213,213);
`
export const Styledh2 = styled.h2`
    font-size:3em;
    margin-bottom:0px;
`
export const Styledh3 = styled.h3`
    font-size:2.7em;
    margin-bottom:0px;
`
export const StyledForm = styled(Form)<FormProps>`
    max-width: 400px;
    width:90%; 
    margin:20px auto;
    background-color:white;
    padding:20px 40px;
    border-radius:20px;
    border:1px solid grey;
`
export const StyledFormContent = styled(Content)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    margin:auto auto;
`