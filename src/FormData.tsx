import React, { useState } from 'react';
import { formFields } from './FormFields';
// import { InputField } from './InputField';
import MultiStepForm from './MultiStepForm';

function FormData() {
  interface FormDataType {
    firstName: string;
    lastName: string;
    location: string;
    phoneNumber: string;    
    email: string;
  }

//   const [datalist, setDatalist] = useState<FormDataType[]>([]);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const [data, setData] = useState<FormDataType>({
//     firstName: '',
//     lastName: '',
//     location: '',
//     phoneNumber: '',
//     email: '',
//   });

//   const validate = () => {
//     const newErrors: Record<string, string> = {};
//     formFields.forEach(({ name, label }) => {
//       if (!data[name as keyof typeof data]) newErrors[name] = `${label} is required`;
//       if (name === 'email' && data[name as keyof typeof data] && !/\S+@\S+\.\S+/.test(data[name as keyof typeof data] as string))
//         newErrors[name] = 'Invalid email';
//       if (name === 'phoneNumber' && data[name as keyof typeof data] && !/^\d{10}$/.test(data[name as keyof typeof data] as string))
//         newErrors[name] = 'Phone must be 10 digits';
//     });
//     return newErrors;
//   };

//   const handleSubmit = (e: React.FormEvent | React.MouseEvent) => {
//     e.preventDefault();
//     const newErrors = validate();
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length === 0) {
//       setDatalist((prev) => [...prev, data]);
//       console.log(data);
//       setData({
//         firstName: '',
//         lastName: '',
//         location: '',
//         phoneNumber: '',
//         email: '',
//       });
//       console.log(datalist);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value } as FormDataType));
//   };

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
