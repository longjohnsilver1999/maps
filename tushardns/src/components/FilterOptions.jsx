import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { AppContext } from '../context/AppContext';

const FilterOptions = () => {
  const { updateFormData } = useContext(AppContext);

  const initialValues = {
    option: '',
  };

  const handleSubmit = (values) => {
    updateFormData('filterOptions', values);
    console.log('Form Data', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <div>
            <label>Option</label>
            <Field name="option" type="text" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterOptions;
