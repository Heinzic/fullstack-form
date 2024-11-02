import Layout, { Content } from "antd/es/layout/layout";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { Form, FormProps, Input } from "antd";
import StyledButton from "../components/ui/StyledButton";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";
import axios from "axios";

interface IFormFields {
    name:string
    email: string
    message: string
};
  
const onFinish: FormProps<IFormFields>['onFinish'] = async (values) => {    
    await axios.post("http://localhost:3000", values)
    console.log('Success:', values);
};
  
const onFinishFailed: FormProps<IFormFields>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const StyledForm = styled(Form)<FormProps>`
    max-width: 400px; 
    margin:20px auto;
    background-color:white;
    padding:20px 40px;
    border-radius:20px;
    border:1px solid grey;
`
const StyledContent = styled(Content)`
    margin:10px 10px;
`

function FormPage() {
    return (
        <Layout style={{ textAlign:"center", minHeight:'100vh'}}>
            <Header/>
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
                        rules={[{ required: true, message: 'Please input your email!' }]}
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
            <Footer/>
        </Layout>
    );
}

export default FormPage;