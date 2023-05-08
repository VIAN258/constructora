import React from "react";
import styled from 'styled-components'

function Features(props) {
  return (
    <>
    <FeaturesContainer>
        <div id="features" className="text-center">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                <h2>Features</h2>
                </div>
                <div className="row">
                {props.data
                    ? props.data.map((d, i) => (
                        <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                            {" "}
                            <i className={d.icon}></i>
                            <h3>{d.title}</h3>
                            <p>{d.text}</p>
                        </div>
                    ))
                    : "Loading..."}
                </div>
            </div>
        </div>
    </FeaturesContainer>
    </>
  );
};

export default Features

const FeaturesContainer = styled.div`
#features {
    background: #f6f6f6;    
  }
  #features i.fa {
    font-size: 38px;
    margin-bottom: 20px;
    transition: all 0.5s;
    color: #fff;
    width: 100px;
    height: 100px;
    padding: 30px 0;
    border-radius: 50%;
    background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
  }
  .col-xs-6 col-md-3{
    background-color: red;
    font-size: 38px;
  }
`