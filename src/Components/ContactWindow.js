import React, { useEffect } from 'react';
import '../App.css';

function ContactWindow({ currentContact }) {
  return (
    <div className="headerWrapper">
      <span className="contactName">{currentContact}</span>
    </div>
  );
}

export default ContactWindow;
