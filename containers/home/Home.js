import { useState, useRef, useEffect } from 'react';

import Home_Beer_Animation from './Home_Beer_Animation';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useWindowSize } from '../../hooks/UseWindowSize';


const HomePage = () => {

  const spinner = useSelector(state => state.spinner.is_spinner_loading);
  const windowSize = useWindowSize();
  const myRef = useRef();
  const bottles = {
    [0]: {
      url: '/model.glb',

    },
  
  };
  return (

    <div className="container-fluid home">
      <div className="row beer-row align-items-center m-0">
        <div className="col-12 beer-animate px-0">
       <div className="w-100 h-100 d-flex mt-5 pt-5" id="beer-1">
        <Home_Beer_Animation bottle={bottles[0]} />
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default HomePage;
