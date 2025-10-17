import { useState } from 'react';



function AddTodo({addTodo }: {addTodo : (title: string) => void}) {
  const [text,setText] = useState('')

  const handeleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text);
    setText('');
  }

    return (
      <form onSubmit={handeleSubmit}>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}

          />
        <button type="submit">添加事项</button>
      </form>
    );
  }
  export default AddTodo;
  