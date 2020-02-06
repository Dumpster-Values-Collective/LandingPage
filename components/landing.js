import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: #D8E9C2;
  font-size: 2em;
`

function Landing(){
return(
  <>
    <Title>
      <h2>Hours</h2>
     </Title> 
      <ul>
        <li>Monday - Saturday</li>
        <li>11:00am - 7:00pm</li>
      </ul> 

      <ul>
        <li>Sunday</li>
        <li>11:00am - 6pm</li>
      </ul> 
    </>
);
}

export default Landing;