import React, { useEffect, useState } from 'react';
import classes from 'src/components/Works/Works.module.scss';

const galleryName = [];

export const Gallery = (props) => {
  const values = [
    { id: 1, text: 'hp' },
    { id: 2, text: 'cms' },
    { id: 3, text: 'illustrator' },
    { id: 4, text: 'photoshop' },
    { id: 5, text: 'premier' },
  ];
  const [isActive, setIsActive] = useState();

  return (
    <div>
      <div className={`${classes.container} sm:contents`}>
        {values.map((val) => (
          <div
            onClick={() => setIsActive(val.id)}
            className={`${classes.cardH} bg-works-${val.id} ${classes.panel} shadow-lg ${
              isActive === val.id ? `${classes.active}` : ''
            }`}
          >
            <h3>{val.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
