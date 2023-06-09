import React from 'react';

import Cat from './Cat';

const CatList = () => {
    return (
      <section>
        <h2>Cat list</h2>
        <ul className='cat-list'>
            <Cat />
        </ul>
      </section>
    )
};
  
  export default CatList;