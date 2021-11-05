import { useState } from 'react';
import Carousel from '../../components/Carousel';
import rose from '../../styles/assets/images/single-beers/rose.png';
import blonde from '../../styles/assets/images/single-beers/blonde.png';
import blanche from '../../styles/assets/images/single-beers/blanche.png';
import cerise from '../../styles/assets/images/single-beers/cerise.png';
import citron from '../../styles/assets/images/single-beers/citron.png';
import peche from '../../styles/assets/images/single-beers/peche.png';
import { Social_icons } from '../../components/Social_icons';
import Footer from '../footer/Footer';
import Link from 'next/link'
const Our_beers = () => {

  const beers = [

    {
      url: blonde,
      title: 'blonde',
    },
    {
      url: blanche,
      title: 'blanche',
    },

    {
      url: cerise,
      title: 'cerise',
    },
    {
      url: citron,
      title: 'citron',
    },
    {
      url: peche,
      title: 'peche',
    },
    {
      url: rose,
      title: 'rose',
    },
  ];
  return (
    <div className="our_beers ">
      <div className="container big-container">
        <div className="row main-titles">
          <div className="col-12">
            <h5 className="text-center text-white font-weight-light mt-5 mt-0">Découvrez nos bières</h5>
          </div>
          <div className="col-12">
            <h5 className="text-white font-weight-light text-center">
              Et la <b>Touche Secrète</b> que nous avons dans nos saveurs
            </h5>
          </div>
        </div>
      </div>
     
        <div className="carousel row mx-0 my-md-auto">
          <div className="col-12 p-0 h-100">
            <Carousel images={beers} />
          </div>
        </div>
        <Footer menu_text_color="#fff"/>
              
        <Social_icons />
      </div>
   
  );
};

export default Our_beers;
