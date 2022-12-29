import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContacts,
  getVisibleContacts,
  fetchContacts,
} from 'redux/phonebook/selectors';
import css from './ContactsItem.module.css';
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
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <MdOutlineContactPhone />
          {name}: {phone}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
