import React from 'react';

const Arrow_Down = ({color}) => {
  return (
    <div className="arrow-down d-none d-sm-flex flex-column align-items-center">
      <span>faire défiler</span>
      <i className={`icon arrow-down-${color? color +'-': ""}icon`}></i>
    </div>
  );
};

export default Arrow_Down;
