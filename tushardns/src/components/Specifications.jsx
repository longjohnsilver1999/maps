import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { AppContext } from '../context/AppContext';

const Specifications = () => {
  const { updateFormData } = useContext(AppContext);

  const initialValues = {
    specificationName: '',
    value: '',
  };

  const handleSubmit = (values) => {
    updateFormData('specifications', values);
    console.log('Form Data', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <div>
            <label>Specification Name</label>
            <Field name="specificationName" type="text" />
          </div>
          <div>
            <label>Value</label>
            <Field name="value" type="text" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Specifications;
