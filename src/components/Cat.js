import './CatList.css';
import PropTypes from "prop-types";

const Cat = (props) => {
    const increasePets = () => {
      // setPetCount(petCount => petCount + 1)
      props.onPetCat(props.id);
    };

    return(
        <li>
          <h3>Cat name: {props.name}</h3>
          <h3>Personality: {props.personality}</h3>
          <h3>Caretaker: {props.caretaker}</h3>
          <h3>Color: {props.color}</h3>
          <h3>#Pets: {props.petCount}</h3>
          <button onClick={event => increasePets()}>Pet Cat</button>
        </li>
    )
}

Cat.protoTypes={
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  caretaker: PropTypes.string.isRequired,
  petcount: PropTypes.number.isRequired,
  onPetCat: PropTypes.func.isRequired,
};

export default Cat;