import { useState } from 'react';
import './App.css';
import UserPreview from './UserPreview';

function App() {
  const [formData, setFormData] = useState({
     photo: null,
    companyName: '',
    slogan: '',
    name: '',
    position: '',
    mobile: '',
    email: '',
    website: '',
    address: ''
   
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleReset = () => {
    setFormData({
       photo: null,
      companyName: '',
      slogan: '',
      name: '',
      position: '',
      mobile: '',
      email: '',
      website: '',
      address: ''
     
    });
  };

  return (
    <div className='container'>
      <h2>Company Details Form</h2>
      <div className="form-section">
        <table>
          <tbody>
             <tr><td>Photo</td><td><input type="file" name="photo" onChange={handleChange} /></td></tr>
            <tr><td>Company Name</td><td><input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" /></td></tr>
            <tr><td>Company Slogan</td><td><input name="slogan" value={formData.slogan} onChange={handleChange} placeholder="Company Slogan" /></td></tr>
            <tr><td>Name</td><td><input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /></td></tr>
            <tr><td>Position</td><td><input name="position" value={formData.position} onChange={handleChange} placeholder="Position" /></td></tr>
            <tr><td>Mobile</td><td><input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" /></td></tr>
            <tr><td>Email</td><td><input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /></td></tr>
            <tr><td>Website</td><td><input name="website" value={formData.website} onChange={handleChange} placeholder="Website" /></td></tr>
            <tr><td>Address</td><td><input name="address" value={formData.address} onChange={handleChange} placeholder="Address" /></td></tr>
           
            <tr><td colSpan={2}><button onClick={handleReset}>Reset</button></td></tr>
          </tbody>
        </table>
      </div>
      <UserPreview data={formData} />
    </div>
  );
}

export default App;
