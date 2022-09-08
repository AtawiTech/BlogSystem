import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();
  const addBlog = async () => {
    const bodyValue = {
      title,
      body,
    };

    const request = await fetch('http://localhost:8080/api/v1/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyValue),
    });

    const data = await request.json();

    if (request.status === 201) {
      navigate('/');
    }

    console.log(data);
  };
  return (
    <div className='container '>
      <h1 className='text-center'>Add new Blog !</h1>
      <div className=' mt-5'>
        <label className='form-label'>Blog title</label>
        <input
          placeholder='Please put the blog title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          className='form-control'
        />
        <label className='form-label mt-3'>Blog body</label>
        <textarea
          placeholder='Please put the blog body here'
          value={body}
          rows='15'
          onChange={(e) => setBody(e.target.value)}
          className='form-control '
        />
      </div>
      <button
        onClick={addBlog}
        type='button'
        className='btn btn-secondary mt-3 w-100'
      >
        Add New Blog
      </button>
    </div>
  );
};

export default AddBlog;
