// Header
// This contains the menu.

import { HamburgerButton } from "react-hamburger-button";
import React, { useState } from 'react';

function IconList() {
  const iconwidth = '32px'

  const images = [
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png',
      alt: 'Vue',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png',
      alt: 'Amazon Web Services',
      link: ''
    },

    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png',
      alt: 'JavaScript',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
      alt: 'React',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png',
      alt: 'GraphQL',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png',
      alt: '',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png',
      alt: '',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png',
      alt: '',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png',
      alt: '',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png',
      alt: '',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png',
      alt: '',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png',
      alt: '',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png',
      alt: '',
      link: ''
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png',
      alt: 'Terminal',
      link: ''
    },


    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png',
      alt: 'SQL',
      link: ''
    },

    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png',
      alt: 'VS Code',
      link: ''
    },
  ]

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "space-around", alignContent: 'space-between' }}>
      {images.map(function (item, index) {
        return <img key={index} align="left" alt={item.alt} width={iconwidth} src={item.src} />
      })}
    </div>
  )
}

function MenuContent({ setSelection }) {
  const overlayStyle = {
    pointerEvents: "auto",
    height: "100%",
    width: "100%",
    position: "fixed",
    zIndex: "1",
    top: "0",
    left: "0",
    backgroundImage: "linear-gradient(90deg, #134E5E 10%, #71B280 90%)",
    overflowX: "hidden",
    transition: "0.1s"
  }

  const overlayContentStyle = {
    position: "relative",
    top: "25%",
    width: "100%",
    textAlign: "center",
    marginTop: "48px",
    fontSize: "40px",
    padding: "0px"
  }

  const buttonStyle = {
    color: "white",
    fontSize: '40px',
    background: "none",
    border: "none",
    padding: "0!important",
    fontFamily: "arial, sans-serif",
    textDecoration: "none",
    cursor: "pointer",
  }

  return (
    <div style={overlayStyle}>
      <div style={overlayContentStyle}>
        <ul>
          <ol style={overlayContentStyle}>
            <button style={buttonStyle} onClick={() => window.location.reload()}>Home</button>
          </ol>
          <ol style={overlayContentStyle}>
            <button style={buttonStyle} onClick={() => setSelection('about-me')}>About Me</button>
          </ol>
          <ol style={overlayContentStyle}>
            <button style={buttonStyle} onClick={() => setSelection('get-in-touch')}>Get in Touch</button>
          </ol>
        </ul>
      </div>
    </div>
  )
}

// TODO: Move this out into a seperate component.
function AboutMe() {
  const overlayStyle = {
    pointerEvents: "auto",
    height: "100%",
    width: "100%",
    position: "fixed",
    zIndex: "1",
    top: "0",
    left: "0",
    backgroundImage: "linear-gradient(90deg, #134E5E 10%, #71B280 90%)",
    color: "white",
    overflowX: "hidden",
    transition: "0.1s"
  }

  const imagePath = window.location.href + '/images/profile.png'

  return (
    <div style={overlayStyle}>
      <div className='flex-container'>
        <div className='flex-item-left'>
          <img src={imagePath} alt="profile pic" style={{borderRadius: '8px'}}/> 
          {/* <div style={{width: "200px"}}> */}
            {/* <IconList /> */}
          {/* </div> */}
        </div>
        <div className='flex-item-right'>
          <p style={{ marginTop: '0px' }}>My name is Evan Daley and I'm a Lead Software Engineer at Two Barrels LLC. </p>
          <p>I consider myself to be an experienced developer, leader and architect. My strongest proficiencies are system design, JavaScript, Vue, React, Rails, AWS, Docker, and SQL. </p>
          <p style={{ marginBottom: '40px' }}>In my free time, I like to exercise, sleep, and dig into different technologies like R, Kubernetes, GCP, and lately, three.js. This site was built with Three.js and React. </p>
        </div>
      </div>
    </div>
  )
}

function GetInTouch() {
  const overlayStyle = {
    pointerEvents: "auto",
    height: "100%",
    width: "100%",
    position: "fixed",
    zIndex: "1",
    top: "0",
    left: "0",
    color: "white",
    overflowX: "hidden",
    transition: "0.1s",
    justifyContent: 'center',
    dispay: "flex",
    backgroundImage: "linear-gradient(90deg, #134E5E 10%, #71B280 90%)",
  }

  const overlayContentStyle = {
    justifyContent: 'center',
    display: "flex",
    position: "relative",
    top: "25%",
    width: "100%",
    textAlign: "center",
    marginTop: "48px",
    fontSize: "35px",
  }

  return (
    <div style={overlayStyle}>
      <div style={overlayContentStyle}>
        The best place to reach me is at<br />
        daley.evan@gmail.com
      </div>
    </div>
  )
}

export default function HTMLContent() {
  const [inMenu, setInMenu] = useState(false);
  const [selection, setSelection] = useState('');

  const handleClick = () => {
    setInMenu(!inMenu)
    setSelection('')
  }

  const headerStyle = {
    pointerEvents: "none",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: "2",
    width: "100%",
    padding: "40px",
    position: "fixed",
  }

  return (
    <>
      <div style={headerStyle}>
        <div style={{ right: "24px", pointerEvents: "auto" }}>
          <HamburgerButton
            open={inMenu}
            onClick={handleClick.bind(this)}
            width={25}
            height={20}
            strokeWidth={2.5}
            color='white'
            animationDuration={0.5}
          />
        </div>
      </div>

      {inMenu ? <MenuContent setSelection={setSelection} /> : null}
      {selection === 'about-me' ? <AboutMe /> : null}
      {selection === 'get-in-touch' ? <GetInTouch /> : null}
    </>
  )
}