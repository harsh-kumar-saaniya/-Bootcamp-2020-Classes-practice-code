import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';


const UserFormWithFormikContext = () => {

    return (
        <div>
            <div>User Form</div>
            <formik initialValues={{
                name: "",
                age: 0
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    yup.object(
                        {
                            name: yup.string()
                                .required('Name field must be required')
                                .max(15, "Name must be less than 15 characters"),
                            age: yup.number()
                                .max(60, "Age should be less than 60")
                                .min(10, "Age should be greater than 10")
                        }

                    )
                }
            >
                {
                    (formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input id="name" type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                                {
                                    formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : null
                                }
                            </div>

                            <div>
                                <label htmlFor="age">Age:</label>
                                <input id="age" type="Number" {...formik.getFieldProps("age")}
                                />
                                {
                                    formik.errors.age ? <div style={{ color: "red" }}>{formik.errors.age}</div> : null
                                }
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    )
                }
            </formik>
        </div>

    )
}

export default UserFormWithFormikContext;