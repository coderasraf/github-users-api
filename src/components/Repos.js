import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {

const {repos} = useContext(GithubContext);
console.log(repos)
const Languages = repos.reduce((total, item) =>{
  const {language,stargazers_count} = item
  if(!language) return total
  console.log(language)
  if(!total[language]){
    total[language] = {label: language, value: 1, stars: stargazers_count}
  }else{
    total[language] = {...total[language], 
      value: total[language].value + 1, 
      stars: total[language].stars + stargazers_count }
  }
  return total
},{})

console.log(Languages)

const mostUsed = Object.values(Languages)
.sort((a,b) =>{
  return b.value - a.value
})
.slice(0,5)

// most stars per language

const mostStars = Object.values(Languages)
.sort((a,b) =>{
  return b.stars - a.stars
}).map((item) =>{
  return {...item,value:item.stars}
}).slice(0,5)

  return <section className='section'>
    <Wrapper className='section-center'>
      <Pie3D data={mostUsed} />
      <Column3D data={mostUsed} />
      <Doughnut2D data={mostStars} />
      <Bar3D data={mostUsed} />
    </Wrapper>
  </section>
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
