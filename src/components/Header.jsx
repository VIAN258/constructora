import React from "react";
import styled from 'styled-components'

function Header()  {
  return (
    <>
      <HeaderContainer>
        
      <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  we are cool
                </h1>
                <p></p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
        
      </HeaderContainer>
   </>
  )
}


export default Header

const HeaderContainer = styled.div`
.intro {
    display: table;
    width: 100%;
    padding: 0;
    background: url(./1.jpg) center center no-repeat;
    background-color: #e5e5e5;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
  }
  .intro .overlay {
    background: rgba(0, 0, 0, 0.2);
  }
  .intro h1 {
    font-family: "Raleway", sans-serif;
    color: #fff;
    font-size: 82px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 10px;
  }
  .intro h1 span {
    font-weight: 800;
    color: #5ca9fb;
  }
  .intro p {
    color: #fff;
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  header .intro-text {
    padding-top: 350px;
    padding-bottom: 200px;
    text-align: center;
  }
`



