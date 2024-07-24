import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

function AddComponent() {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      company: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      price: Yup.number()
        .typeError("Price must be a number")
        .positive("Price must be a positive number")
        .required("Price is required"),
      category: Yup.string()
        .min(2, "Category must be at least 2 characters")
        .required("Category is required"),
      company: Yup.string()
        .min(2, "Company must be at least 2 characters")
        .required("Company is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      const product = { ...values, userId };

      try {
        const response = await axios.post(
          "http://localhost:4000/add-product",
          product
        );
        console.log(response.data);
        resetForm();
      } catch (error) {
        console.error("There was an error adding the product!", error);
      }
    },
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Product</h2>
      <form onSubmit={formik.handleSubmit} className="shadow p-4 rounded">
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-control ${
              formik.touched.name && formik.errors.name ? "is-invalid" : ""
            }`}
            placeholder="Enter product name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="invalid-feedback">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            className={`form-control ${
              formik.touched.price && formik.errors.price ? "is-invalid" : ""
            }`}
            placeholder="Enter product price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="invalid-feedback">{formik.errors.price}</div>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            type="text"
            className={`form-control ${
              formik.touched.category && formik.errors.category
                ? "is-invalid"
                : ""
            }`}
            placeholder="Enter product category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          />
          {formik.touched.category && formik.errors.category ? (
            <div className="invalid-feedback">{formik.errors.category}</div>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            className={`form-control ${
              formik.touched.company && formik.errors.company
                ? "is-invalid"
                : ""
            }`}
            placeholder="Enter company name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.company}
          />
          {formik.touched.company && formik.errors.company ? (
            <div className="invalid-feedback">{formik.errors.company}</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddComponent;
