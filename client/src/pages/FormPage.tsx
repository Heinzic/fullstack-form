import Layout, { Content } from "antd/es/layout/layout";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { Form, FormProps, Input } from "antd";
import StyledButton from "../components/ui/StyledButton";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

interface IFormFields {
    name:string
    email: string
    message: string
};

const StyledForm = styled(Form)<FormProps>`
    max-width: 400px;
    width:90%; 
    margin:20px auto;
    background-color:white;
    padding:20px 40px;
    border-radius:20px;
    border:1px solid grey;
`
const StyledContent = styled(Content)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    margin:auto auto;
`

function FormPage() {
    const [dataDelivered, setDataDelivered] = useState(false)

    const onFinish: FormProps<IFormFields>['onFinish'] = async (values) => {    
        await axios.post("http://localhost:3000", values)
        setDataDelivered((dataDelivered) => !dataDelivered)
        console.log('Success:', values);
    };
      
    const onFinishFailed: FormProps<IFormFields>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout style={{ textAlign:"center", minHeight:'100vh'}}>
            <Header/>
            {dataDelivered? (
                <StyledContent>
                    <h1>Message generated on the server</h1>
                </StyledContent>
            ) : (
                <StyledContent>
                    <h1>Only CTA on the page</h1>
                    <StyledForm
                        name="contact"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                    >
                        <Form.Item<IFormFields>
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<IFormFields>
                            label="Email"
                            name="email"
                            rules={[
                                {
                                  type: 'email',
                                  message: 'The input is not valid E-mail!',
                                },
                                {
                                  required: true,
                                  message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<IFormFields> 
                            label="Message"
                            name="message"
                            rules={[{ required: true, message: 'Please input your message!' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item>
                            <StyledButton htmlType="submit">
                                Submit
                            </StyledButton>
                        </Form.Item>
                    </StyledForm>
                </StyledContent>
            )}
            <Footer/>
        </Layout>
    );
}

export default FormPage;