import { MdDeleteForever } from 'react-icons/md';

import { getRandomHexColor, upFirst } from 'utils/index';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  ContactWrapper,
  Text,
  Avatar,
  Button,
} from 'components/ContactList/Contact/Contacts.styled';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactWrapper>
      <Avatar color={getRandomHexColor()}>{upFirst(name)}</Avatar>

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
