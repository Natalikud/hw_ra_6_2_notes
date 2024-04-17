import { useState } from 'react';
import '../css/Input.css';

export default function Input({setNotes, url,}) {
  const [note, setNote] = useState('');

  const setHandler = (data) => data.notes;
  
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (note === '') return;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({content: note}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.ok ? response : new Error(response.statusText))
      .then((response) => response.json())
      .then((data) => setNotes(setHandler(data)))
      .catch((err) => console.log('Exit with error: ' + err));
    
    setNote('');
  }

  const handlerChange = (e) => {
    setNote(e.target.value);
  }

  return (
    <form
      onSubmit={handlerSubmit}
    >
      <textarea
        onChange={handlerChange}
        value = {note}
      >
      </textarea>
      <button></button>
    </form>
  );
}
