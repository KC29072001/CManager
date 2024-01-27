import React from 'react';
import ContactList from './components/contactList';
import AddContact from './components/AddContact';

function App() {
  return (
    <div>
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
