import React from 'react';
import Cat from './Cat';
import PropTypes from 'prop-types';

const CatList = (props) => {
   const numberOfCats = props.catData.length;
    return (
      <section>
        <h2>Glaring size: {numberOfCats}</h2>
        {/*<ul className='cat-list'>{generateCatComponents(props.catData)}*/}
        <ul className='cat-list'>{props.catData.map((cat, i) => (<Cat
          name={cat.name}
          personality= {cat.personality}
          caretaker={cat.caretaker}
          color={cat.color}
          petCount= {cat.petCount}
          onPetCat={props.onPetCat}
          id={cat.id}
          key={cat.id}
        />))}</ul>
      </section>
    )
};
CatList.propTypes = {
  catData: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      name:PropTypes.string.isRequired,
      personality: PropTypes.string.isRequired,
      caretaker: PropTypes.string.isRequired,
      color:PropTypes.string.isRequired,
      petCount:PropTypes.number.isRequired
    })
  ),
  onPetCat: PropTypes.func.isRequired
};
  export default CatList;