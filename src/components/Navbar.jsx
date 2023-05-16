import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2><span>CONSTRUCTORA PINO</span></h2>
          <div className = {`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick}  href="#h">Home</a>
          <a onClick={handleClick}  href="#h">About</a>
          <a onClick={handleClick}  href="#h">Features</a>
          <a onClick={handleClick}  href="#h">Team</a>
          <a onClick={handleClick}  href="#h">Gallery</a>
          <a onClick={handleClick}  href="#h">Contact</a>
          
          </div>
          <div className = "burguer">
            <BurguerButton clicked={clicked} handleClick= {handleClick}/>
            
          </div>
          <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>

          
      </NavContainer>
    </>     
  )
}

export default Navbar

const NavContainer = styled.nav`

  h2{
    color: #333;
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 2rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;

    a{
      color: white;
      font-size: 1.5rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: black;
        font-family: "Raleway", sans-serif;
        display: inline;
        
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 1.5rem;
      margin-top: 0.9rem;
      color: white;
      
     
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: black;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    position: absolute;
    top: 81px;
    left: 0;
    width: 100%;
    height: 100%;
    
  }
`