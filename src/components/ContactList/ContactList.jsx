import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContacts,
  getVisibleContacts,
  fetchContacts,
} from 'redux/contacts/contactsSelectors';
import { ListUl, ListLi, BtnDelete } from './ContactList.styled';
import { MdOutlineContactPhone } from 'react-icons/md';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContacts(id));
  const contacts = useSelector(getVisibleContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ListUl>
      {contacts.map(({ id, name, phone }) => (
        <ListLi key={id}>
          <MdOutlineContactPhone />
          {name}: {phone}
          <BtnDelete type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </BtnDelete>
        </ListLi>
      ))}
    </ListUl>
  );
};
