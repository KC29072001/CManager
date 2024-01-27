// src/components/AddContact.js
import React, { useState } from 'react';
import axios from 'axios';

const AddContact = () => {
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleAddContact = () => {
    axios.post('http://localhost:5001/api/contacts', newContact) // Replace with your backend URL
      .then(response => {
        console.log(response.data);
        // Optionally, update the contact list in the parent component
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
      <input type="tel" name="phone" placeholder="Phone" onChange={handleInputChange} />
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default AddContact;
