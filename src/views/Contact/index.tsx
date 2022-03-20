import emailjs from "@emailjs/browser";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Form } from "./styles";

interface IFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<IFormData>();

  useEffect(() => {
    // @ts-ignore
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    // @ts-ignore
    await emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, data);
    reset();
    setLoading(false);
  });

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>Contact-us</h1>
        <Box>
          <Input {...register("name", { required: true })} placeholder="Name" className="name" />
          <Input {...register("email", { required: true })} placeholder="Email" className="email" type="email" />
          <Input {...register("message", { required: true })} placeholder="Message" className="message" />
        </Box>
        <Button type="submit" background="#0078D8" loading={loading}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
