import PropTypes from 'prop-types';
import { Wrapper } from './Filter.styled';

export const Filter = ({ onChange }) => {
    return (
        <Wrapper>
            Find contacts by name
            <input type="text" name="contact" onChange={(evt) => onChange(evt.target.value)}></input>
        </Wrapper>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}
