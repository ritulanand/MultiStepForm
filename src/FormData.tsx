import React, { useState } from 'react';
import MultiStepForm from './MultiStepForm';

function FormData() {

  return (
    <>
      <p>Form Data</p>
      <MultiStepForm/>
      {/* <form>
        {formFields.map((field) => (
          <InputField
            key={field.id}
            {...field}
            value={data[field.name]}
            onChange={handleChange}
            error={errors[field.name] && errors[field.name]}
          />
        ))}

        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form> */}
      {/* {datalist?.map((x) => {
        return (
          <ul>
            <li>{x.firstName}</li>
            <li>{x.lastName}</li>
            <li>{x.location}</li>
            <li>{x.phoneNumber}</li>
            <li>{x.email}</li>
          </ul>
        );
      })} */}
    </>
  );
}
export default FormData;
