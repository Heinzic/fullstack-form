import Layout from "antd/es/layout/layout";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { Form, FormProps, Input } from "antd";
import StyledButton from "../components/ui/StyledButton";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useState } from "react";
import { StyledFormContent, StyledForm } from "../components/shared/styles";

interface IFormFields {
    name:string
    email: string
    message: string
};

function FormPage() {
    const [dataDelivered, setDataDelivered] = useState(false)

    const onFinish: FormProps<IFormFields>['onFinish'] = async (values) => {    
        await axios.post("https://ryzhenkofullstack-form-backend.onrender.com", values)
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
                <StyledFormContent>
                    <h1>Message generated on the server</h1>
                </StyledFormContent>
            ) : (
                <StyledFormContent>
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
                </StyledFormContent>
            )}
            <Footer/>
        </Layout>
    );
}

export default FormPage;