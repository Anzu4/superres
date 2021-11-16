import React from 'react';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
//import { FaBars } from 'react-icons/fa';
import '../styles/style.scss';

const Navbar = () => {
  // const [researchDrop, SetResearchDrop] = useState('false');

  // const researchMenu = () => {
  //   return (
  //     <div>
  //       <a>Super Resolution Microscopy</a>
  //       <a></a>
  //       <a></a>
  //       <a></a>
  //     </div>
  //   );
  // };

  return (
    <nav id={'navbar'}>
      <a href='https://sites.google.com/site/ryanlab1/Home' id={'lab-name'}>
        <h1> Ryan Lab </h1>
      </a>
      <section id={'nav-links'}>
        <a href='https://sites.google.com/site/ryanlab1/Home'>
          <h3>Research</h3>
          {/* {researchDrop ? researchMenu : null} */}
        </a>
        <a href='https://sites.google.com/site/ryanlab1/Home/people?authuser=0'>
          <h3>People</h3>
        </a>
        <a href='https://sites.google.com/site/ryanlab1/Home/publications?authuser=0'>
          <h3>Publications</h3>
        </a>
        <a href='https://sites.google.com/site/ryanlab1/Home/useful-links?authuser=0'>
          <h3>Links</h3>
        </a>
        <a href='https://sites.google.com/site/ryanlab1/Home/contact?authuser=0'>
          <h3>Contact</h3>
        </a>
      </section>

      {/* <div></div>
      <FaBars className={'Bars'} /> */}
    </nav>
  );
};

export default Navbar;
