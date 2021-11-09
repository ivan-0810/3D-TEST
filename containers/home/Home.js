import Animation from './Animation';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { is_Spinner_loading_true } from '../../store/spinner/action';

const HomePage = () => {
  const spinner = useSelector(state => state.spinner);
  const dispatch = useDispatch();

 
  return (
    <div className="home">
    
        <div className="animation">
          <Animation  />
        </div>
      
    </div>
  );
};

export default HomePage;
