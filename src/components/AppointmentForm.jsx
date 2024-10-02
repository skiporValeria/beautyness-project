import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const AppointmentForm = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        need: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const formDataToSend = new FormData();      
        formDataToSend.append("username", formData.username);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("need", formData.need);
        formDataToSend.append("message", formData.message);
        formDataToSend.append("_wpcf7_unit_tag", "c24e874");

        const baseUrl = "http://wordpress//wp-json/contact-form-7/v1/contact-forms/10/feedback";
        
   axios
      .post(baseUrl, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
        setFormData({
            username: '',
            email: '',
            phone: '',
            need: '',
            message: ''
        });

    };




    return (
        <form
            onSubmit={handleSubmit}
            className={`form ${props.formPage && "appointment-form-page"} ${props.form && "appointment-form"}`}
        >
            <input
                type="text"
                id="username"
                placeholder="Name"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="tel"
                id="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <input
                type="text"
                id="need"
                placeholder="Service You Need"
                value={formData.need}
                onChange={handleChange}
            />
            <textarea
                id="message"
                placeholder="Any Note For Us"
                value={formData.message}
                onChange={handleChange}
            />
            <motion.button
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                type="submit"
            >
                GET AN APPOINTMENT
            </motion.button>
        </form>
    );
};

export default AppointmentForm;
