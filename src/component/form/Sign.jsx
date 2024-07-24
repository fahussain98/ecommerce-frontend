import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

const SignInForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Password is required"),
  });
const navigate = useNavigate();
useEffect(()=>{
      let user = localStorage.getItem("user");
    if(user){
      navigate("/HOME");
    }
})

  const handleSubmit = async (values, ) => {
     navigate("/HOME");
    try {
      const response = await axios.post("http://localhost:4000/sign", values);
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Sign In
        </Typography>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Field
                  as={TextField}
                  fullWidth
                  id="username"
                  name="username"
                  label="Username"
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default SignInForm;
