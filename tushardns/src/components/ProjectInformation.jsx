import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import Select from 'react-select';
import { AppContext } from '../context/AppContext';

const ProjectInformation = () => {
  const { updateFormData } = useContext(AppContext);

  const initialValues = {
    projectName: '',
    country: '',
  };

  const handleSubmit = (values) => {
    updateFormData('projectInformation', values);
    console.log('Form Data', values);
  };

  const countryOptions = [
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' },
    // Add more countries as needed
  ];

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <Form>
          <div>
            <label>Project Name</label>
            <Field name="projectName" type="text" />
          </div>
          <div>
            <label>Country</label>
            <Select
              options={countryOptions}
              onChange={(option) => setFieldValue('country', option.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectInformation;
