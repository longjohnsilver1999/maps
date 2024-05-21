import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import { AppContext } from '../context/AppContext';

const SubmitSection = () => {
  const { formData } = useContext(AppContext);

  const handleSubmit = () => {
    console.log('Combined Form Data', formData);
  };

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      <Form>
        <button type="submit">Submit All Data</button>
      </Form>
    </Formik>
  );
};

export default SubmitSection;
