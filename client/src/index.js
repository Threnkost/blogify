import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Link, NavLink, Outlet } from 'react-router-dom';

import './App.css';
import './index.css';


const Home = () => {
  return (
    <>
      <div>
        Home
      </div>
    </>
  );
}


const Blog = () => {
  return (
    <>
      <div>
        Blog
      </div>
    </>
  );
}


const Contact = () => {
  return (
    <>
      <div>
        Contact
      </div>
    </>
  );
}


const CategoriesLayout = () => {
  return (
    <>
      <h3>Kategori Layout</h3>
      <Outlet />
    </>
  );
}


const Categories = () => {

  return (
    <>
      <h3>Kategoriler</h3>
    </>
  );
}


const A = () => {

  return (
    <>
      <h5>A</h5>
    </>
  );
}

const B = () => {

  return (
    <>
      <h5>B</h5>
    </>
  );
}

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/categories" element={<Categories />}>
          <Route path="a" element={<A />} />
          <Route path="b" element={<B />} />
        </Route>
      </Routes>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
