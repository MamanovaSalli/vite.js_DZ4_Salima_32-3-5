import { useDispatch } from 'react-redux';
import {useState} from "react";

const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_NAME', payload: formData.name });
    dispatch({ type: 'SET_EMAIL', payload: formData.email });
    dispatch({ type: 'SET_AGE', payload: parseInt(formData.age) });

    setFormData({ name: '', email: '', age: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
      <button type="submit"> Submit </button>
    </form>

  );
};

export default UserForm;
