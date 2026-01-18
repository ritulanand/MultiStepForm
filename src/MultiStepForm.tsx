import { InputField } from './InputField';
import { useState } from 'react';

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  location: string;
  phone: string;
  email: string;
}

const MultiStepForm = () => {
  const [step, setStep] = useState<string>('first');
  const [userList, setUserList] = useState<UserData[]>([]);
  const [formData, setFormData] = useState<UserData>({
    id: 0,
    firstName: '',
    lastName: '',
    location: '',
    phone: '',
    email: '',
  });
  const [updateUserId, setUpdateUserId] = useState<number | null>(null);

  const handleNext = () => {
    setStep((pre) => {
      if (pre === 'first') {
        return 'second';
      } else if (pre === 'second') {
        return 'third';
      }
      return pre;
    });
  };

  const handlePrevious = () => {
    setStep((pre) => {
      if (pre === 'second') {
        return 'first';
      } else if (pre === 'third') {
        return 'second';
      }
      return pre;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((pre) => ({ ...pre, [e.target.name as keyof UserData]: e.target.value }));
  };

  const handleSubmit = () => {
    const newUser: UserData = { ...formData, id: userList.length + 1 };
    setUserList((pre) => [...pre, newUser]);
    setFormData({
      id: 0,
      firstName: '',
      lastName: '',
      location: '',
      phone: '',
      email: '',
    });
    setStep('first');
  };

  const handleDelete = (id: number) => {
    const tempUserList = userList.filter((user) => user.id !== id);
    setUserList(tempUserList);
  };

  const handleEdit = (id: number) => {
    const userDetails = userList.find((user) => user.id === id);
    if (userDetails) {
      setFormData(userDetails);
      setUpdateUserId(id);
    }
  };

  const handleUpdate = () => {
    if (updateUserId !== null) {
      const userIndex = userList.findIndex((user) => user.id === updateUserId);
      const tempUserList = [...userList];
      tempUserList[userIndex] = formData;
      setUserList(tempUserList);
      setFormData({
        id: 0,
        firstName: '',
        lastName: '',
        location: '',
        phone: '',
        email: '',
      });
      setUpdateUserId(null);
      setStep('first');
    }
  };

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '10px', gap: '15px' }}>
        <div style={{ backgroundColor: step === 'first' ? 'green' : undefined }}>
          First Step
        </div>
        <div style={{ backgroundColor: step === 'second' ? 'green' : undefined }}>
          Second Step
        </div>
        <div style={{ backgroundColor: step === 'third' ? 'green' : undefined }}>
          Third Step
        </div>
      </div>
      {step === 'first' ? (
        <>
          <InputField
            id="firstName"
            type="text"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputField
            id="lastName"
            type="text"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <button onClick={handleNext}>Next</button>
        </>
      ) : step === 'second' ? (
        <>
          <InputField
            id="location"
            type="text"
            name="location"
            label="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <InputField
            id="phone"
            type="number"
            name="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <button onClick={handleNext} style={{ marginRight: '10px' }}>
            Next
          </button>
          <button onClick={handlePrevious}>Previous</button>
        </>
      ) : (
        <>
          <InputField
            id="email"
            type="email"
            name="email"
            label="Email"
            onChange={handleChange}
            value={formData.email}
          />
          <button onClick={handlePrevious} style={{ marginRight: '10px' }}>
            Previous
          </button>

          {updateUserId ? (
            <button onClick={handleUpdate}>Update</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </>
      )}
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 &&
            userList.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.location}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default MultiStepForm;
