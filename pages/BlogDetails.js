import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const BlogDetails = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const request = await fetch('http://localhost:8080/api/v1/blog/' + id);
      const data = await request.json();
      setTitle(data.title);
      setBody(data.body);
    };
    fetchBlogDetails();
  }, []);

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className='container '>
      <h1 className='text-center'>Blog Details</h1>
      <div className=' mt-5'>
        <label className='form-label'>Blog title</label>
        <input readOnly value={title} type='text' className='form-control' />
        <label className='form-label mt-3'>Blog body</label>
        <textarea rows='15' readOnly value={body} className='form-control ' />
      </div>
      <button
        onClick={goBackHandler}
        type='button'
        className='btn btn-secondary mt-3 w-100'
      >
        Go Back
      </button>
    </div>
  );
};

export default BlogDetails;
