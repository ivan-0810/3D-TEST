import { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Link from 'next/link';
import { useWindowSize } from '../hooks/UseWindowSize';
import arrow_white from '../styles/assets/icons/arrow-white.svg';
const Carousel_Cont = ({ images }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [beers, setBeers] = useState([]);
  const windowSize = useWindowSize();
  const chevronWidth = 40;
  const changeActiveItem = activeIndex => setActiveItemIndex(activeIndex);
  useEffect(() => {
    setBeers(images);
  }, []);

  useEffect(() => {
    if (activeItemIndex === beers.length - 1) {
      let arr = [];
      images.forEach((image, index) => {
        arr.push(image);
      });
      setBeers(prevState => [...prevState, ...arr]);
    }
    if (activeItemIndex < 0) {
      let arr = [];
      images.forEach((image, index) => {
        arr.push(image);
      });
      setBeers(prevState => [...arr, ...prevState]);
    }
  }, [activeItemIndex]);
// console.log(beers);
// const handleState =  (props) => {
//  const {isFirstScroll, isLastScroll} = props;
//   if(isFirstScroll) {
//     setBeers(prevState => ([
//      ...images,
//       ...prevState
//     ]))
//   }
// }

  return (
    <>
      {images && (
        <ItemsCarousel
          requestToChangeActive={changeActiveItem}
          activeItemIndex={activeItemIndex}
          numberOfCards={
            windowSize.width <= 576 ? 3 : windowSize.width <= 768 ? 3 : 4
          }
          // onActiveStateChange={handleState}
          activePosition={'center'}
          infiniteLoop={true}
          gutter={0}
          leftChevron={
            activeItemIndex > 0 || windowSize.width < 576 ? (
              <i className="arrow-white-left-icon" />
            ) : null
          }
          rightChevron={<i className="arrow-white-right-icon" />}
          outsideChevron
          chevronWidth={chevronWidth}
          alwaysShowChevrons={true}
          disableSwipe={true}
          classes={{
            wrapper: 'wrapper',
            itemsWrapper: 'itemsWrapper',
            itemsInnerWrapper: 'itemsInnerWrapper',
            itemWrapper: 'itemWrapper',
            rightChevronWrapper: 'chevron chevron_right',
            leftChevronWrapper: 'chevron chevron_left',
          }}
        >
          {beers.map((beer, index) => (
            <div key={index * 4783} className="d-flex flex-column">
              <section
                key={index * 6432}
                className={`img-wrapper ${activeItemIndex === index - 1 && 'active-wrapper'}`}
              >
                <Link href={`/${beer.title}`}>
                  <a className="beerWrapper">
                    <img src={beer.url} alt={beer.url} />
                  </a>
                </Link>
              </section>
            </div>
          ))}
        </ItemsCarousel>
      )}
    </>
  );
};
export default Carousel_Cont;
