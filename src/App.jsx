import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="header">
        <a href="#" id="logo">
          <h1>Portfolio</h1>
        </a>
      </div>
      <div className="infocardContainer">
        <div id="main">
          <img src="photo.jpeg" alt="Portfolio Owner" />
        </div>
        <div id="textbois">
          <h2 className='name'>G Devishree</h2>
          <h4 className='desg'>Front-end Designer & Developer</h4>
          <a href="">
            I am a passionate web developer & Designer,
            <br /> my skills might match your requirements.
            <br /> If so, let's connect.
          </a>
          <div id="hotlinks">
            <img
              id="codepenio"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qGT-BF_UzBOpsW0F0txCqbA9DGqwotcOIw&s"
              alt="CodePen"
            />
            <img
              id="codepenio"
              src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-checklist-icon-for-your-project-png-image_4855635.jpg"
              alt="Checklist"
            />
            <img
              id="codepenio"
              src="https://cdn-icons-png.flaticon.com/512/7269/7269995.png"
              alt="Contact Icon"
            />
          </div>
          <div className="captions">
            <h3 className="c1">Skills</h3>
            <h3 className="c2">Projects</h3>
            <h3 className="c3">Contact</h3>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
