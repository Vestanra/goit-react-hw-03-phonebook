import { Button, ContactItem, Text } from "./ContactList.styled"
import PropTypes from 'prop-types';

export const ContactList = ({ list, onDelete }) => {
    return (
        <ul>
            {list.map(({ id, name, number }) =>
                <ContactItem key={id}>
                    <p>{name}: {number}</p>
                    <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
                </ContactItem>)}
            { list.length <= 0 && <Text>You don't have contacts</Text>}
      </ul>
    )
}

ContactList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
}