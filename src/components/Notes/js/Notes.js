import '../css/Notes.css';
import Note from '../../Note/js/Note';
import Input from '../../Input/js/Input';
import { useEffect, useState } from 'react';

export default function Notes() {
  const url = 'https://hw-ra-6-2-server-notes.onrender.com/notes/';
  const [notes, setNotes] = useState([]);

  const get = () => {
    fetch(url)
      .then((response) => response.ok ? response : new Error(response.statusText))
      .then((response) => response.json())
      .then((data) => setNotes(data.notes))
      .catch((err) => console.log('Exit with error: ' + err));
  }

  useEffect(() => {
    get();
  }, []);
  
  const handlerRefresh = () => {
    get();
  }

  return (
    <main className='widget'>
      <header className='header'>
        <div className='header_text'>Notes</div>
        <div 
        className='refresh'
        onClick={handlerRefresh}
        ></div>
      </header>
      <div className='notes'>
        {notes.map((note, index) => {
          return (
            <Note
              key = {index}
              note = {note}
              setNotes = {setNotes}
              url = {url}
            />
          );}
        )}
      </div>
      <div className='input'>
        <Input
          setNotes = {setNotes}
          url = {url}
        />
      </div>
    </main>
  );
}
