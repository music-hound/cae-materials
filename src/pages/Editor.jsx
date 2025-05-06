import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['code-block', 'blockquote'],
      ['clean'],
    ],
  };

  return (
    <div
    style={{
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      gap:'20px',
    }}>
      <h2 style={{margin:'0'}}>WYSIWYG редактор</h2>
      <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
      />
      <h3 style={{margin:'0'}}>Вывод:</h3>
      <div style={{border:'1px solid', borderRadius:'10px', padding:'20px'}} dangerouslySetInnerHTML={{ __html: value }} />
      <div style={{border:'1px solid', borderRadius:'10px', padding:'20px'}}>{value}</div>
    </div>
  );
};

export default Editor;
