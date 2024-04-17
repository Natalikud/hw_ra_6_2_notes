import '../css/Note.css';

export default function Note({note, setNotes, url}) {
  const setHandler = (data) => data.notes;
  
  const handlerClick = (e) => {
    fetch(url + e.target.id, {
      method: 'DELETE',
    })
      .then((response) => response.ok ? response : new Error(response.statusText))
      .then((response) => response.json())
      .then((data) => setNotes(setHandler(data)))
      .catch((err) => console.log('Exit with error: ' + err));
  }
  
  return (
    <div 
      className = 'note'
    >
      <p className='content'>{note.content}</p>
      <div 
        className='delete'
        id = {note.id}
        onClick={handlerClick}
      ></div>
    </div>
  );
}
