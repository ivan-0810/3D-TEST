import Animation from './Animation';
import digital from '../../styles/assets/images/digital.svg';
import alternative from '../../styles/assets/images/alternative.svg';
import curation from '../../styles/assets/images/curation.svg';
import { motion } from 'framer-motion';

const bounceTransition = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: 'easeOut'
  },

};

const HomePage = () => {

  return (
    <div className="container-fluid home d-flex align-items-end">
      <div className="animation">
        <Animation />
      </div>{' '}
      <div className="pic-row  w-100 d-flex justify-content-around">
        <motion.div
          className="digital"
          transition={bounceTransition}
          animate={{
            y: ['10%', '-10%']
          }}
        >
          <img src={digital} alt="" />
        </motion.div>
        <motion.div
          className="alternative"
          transition={bounceTransition}
          animate={{
            y: ['10%', '-10%']
          }}
        >
          <img src={alternative} alt="" />
        </motion.div>{' '}
        <motion.div
          className="curation"
          transition={bounceTransition}
          animate={{
            y: ['10%', '-10%']
          }}
        >
          <img src={curation} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
