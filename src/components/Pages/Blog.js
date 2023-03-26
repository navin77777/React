import React from 'react';
import './Blog.css'; // import your CSS file

export const Blog = () => {
  return (
  <div>

<div class="card-container">
  <div class="card">
    <img src="https://images.unsplash.com/photo-1675506687860-3fa1d5bedd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image" />
    <div class="card-content">
      <h2 class="card-title">Card Title</h2>
      <p class="card-text">Card text goes here</p>
      <button class="card-button">Read more</button>
    </div>
  </div>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1593414790520-6952e3d9ee9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80/300x200" alt="Card image" />
    <div class="card-content">
      <h2 class="card-title">Card Title</h2>
      <p class="card-text">Card text goes here</p>
      <button class="card-button">Read more</button>
    </div>
  </div>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80" alt="Card image" />
    <div class="card-content">
      <h2 class="card-title">Card Title</h2>
      <p class="card-text">Card text goes here</p>
      <button class="card-button">Read more</button>
    </div>
  </div>
</div>


  </div>
  );
};

