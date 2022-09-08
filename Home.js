import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const [blogList, setBlogList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const request = await fetch('http://localhost:8080/api/v1/blog');
      const data = await request.json();
      setBlogList(data);
    };
    fetchBlogs();
  }, []);

  const goToAdd = () => {
    navigate('/add');
  };

  return (
    <div className='container text-center'>
      <h1 className='my-3'>Blog Website !</h1>
      <hr />
      <ul className='list-group'>
        {blogList.map((blog) => (
          <li key={blog.id} id={blog.id} className='list-group-item'>
            <Link to={`/details/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <button
        onClick={goToAdd}
        className='btn btn-primary mt-3 w-100 btn-lg'
        type='button'
      >
        Add New Blog
      </button>
    </div>
  );
};

export default Home;
