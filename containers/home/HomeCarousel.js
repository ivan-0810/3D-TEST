import { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { useDispatch } from 'react-redux';
import { is_loading_true } from '../../store/menu/action';
const HomeCarousel = ({ capsules, changeBeer }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const dispatch = useDispatch();
  
  return (
    <>
      {capsules && (
        <ul className="capsule d-flex justify-content-center">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={0}
            leftChevron={<i className="arrow-white-left-bg-transparent" />}
            rightChevron={<i className="arrow-white-right-bg-transparent"/>}
            outsideChevron
            chevronWidth={chevronWidth}
            alwaysShowChevrons={true}
            classes={{
              wrapper: 'home-carousel-wrapper',
              itemsWrapper: 'home-items-wrapper',
              itemsInnerWrapper: 'itemsInnerWrapper',
              itemWrapper: `home-item-wrapper`,
              rightChevronWrapper: 'chevron chevron_right',
              leftChevronWrapper: 'chevron chevron_left',
            }}
          >
            {capsules.map((capsule, index) => (
            
              <div
                key={index * 647}
                className={`capsule-wrapper ${
                  activeItemIndex === index && 'active-capsule'
                }`}
              >
                <div className="p-0 d-flex flex-column align-items-center justify-content-center">
                  {activeItemIndex === index && (
                    <i className={`icon ${capsule.name}`} />
                  )}
                  <div className="img-div">
                    <img src={capsule.capsule} alt="beer-capsule" />
                  </div>
                </div>
              </div>
            ))}
          </ItemsCarousel>
        </ul>
      )}
    </>
  );
};

export default HomeCarousel;
