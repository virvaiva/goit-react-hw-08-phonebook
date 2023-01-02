import { MdDeleteForever } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  ContactWrapper,
  Text,
  Button,
} from 'components/ContactsList/Contacts/Contacts.styled';

const Contacts = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactWrapper>
      <Text>
        {name}
        <span> {number}</span>
      </Text>

      <Button type="button" onClick={handleDelete}>
        <MdDeleteForever size={28} />
      </Button>
    </ContactWrapper>
  );
};
export default Contacts;
