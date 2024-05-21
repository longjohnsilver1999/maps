import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { AppContext } from '../context/AppContext';

const Devices = () => {
  const { updateFormData } = useContext(AppContext);

  const initialValues = {
    deviceName: '',
    type: '',
  };

  const handleSubmit = (values) => {
    updateFormData('devices', values);
    console.log('Form Data', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <div>
            <label>Device Name</label>
            <Field name="deviceName" type="text" />
          </div>
          <div>
            <label>Type</label>
            <Field name="type" type="text" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Devices;
