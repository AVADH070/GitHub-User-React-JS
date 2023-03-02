import React from 'react'
import Cards from './Cards';
import Followers from './Followers';
import styled from 'styled-components';

const User = () => {
    return (
        <section className='section'>
            <Wrapper className='section-center'>
                <Cards></Cards>
                <Followers></Followers>
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User