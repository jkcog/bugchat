import React from 'react';
import '../App.css';
import ChatZone from './ChatZone';
import Sidebar from './Sidebar';
import ContactWindow from './ContactWindow';
import InputZone from '../InputZone';
import DialogueEngine from './DialogueEngine';

const CommunicationZone = () => {
  const [currentContact, setCurrentContact] = React.useState('Dr. Rubberduck');
  const [state, setState] = React.useState({
    value: '',
    disposable: '',
    name: currentContact,
    history: ['How can I help?'],
  });
  const stateRef = React.useRef(state);

  const contacts = [
    {
      name: 'Dr. Rubberduck',
      id: 1,
    },
    {
      name: 'Professor Duck',
      id: 2,
    },
    {
      name: 'Mr. Ducky',
      id: 3,
    },
    {
      name: 'Ms. Ducky',
      id: 4,
    },
  ];

  function handleChange(event) {
    setState({
      ...state,
      value: event.target.value,
    });
  }

  function handleSubmit(event) {
    if (event.key === 'Enter') {
      const newState = {
        ...state,
        value: '',
        disposable: event.target.value,
        name: currentContact,
        history: [...state.history, event.target.value],
      };
      setState(newState);
      stateRef.current = newState;

      setTimeout(() => DialogueEngine(stateRef, setState), 3000);
    }
    cleanHistory();
  }

  function cleanHistory() {
    const tempHistory = state.history;
    let newHistory = [];
    if (state.history.length > 12) {
      tempHistory.shift();
      tempHistory.shift();
      newHistory = tempHistory;
      setState({
        ...state,
        history: newHistory,
      });
    }
  }

  function clearChat() {
    setState({
      name: currentContact,
      history: ['How can I help?'],
    });
  }

  return (
    <Sidebar
      currentContact={currentContact}
      setCurrentContact={setCurrentContact}
      clearChat={clearChat}
      contacts={contacts}
    >
      <div className="chatHost innerShadow">
        <ContactWindow currentContact={currentContact} />
        <ChatZone chatItem={state.history} />
        <InputZone
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={state.value}
        />
      </div>
    </Sidebar>
  );
};

export default CommunicationZone;
