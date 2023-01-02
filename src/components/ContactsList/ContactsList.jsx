import { useDispatch, useSelector } from 'react-redux';

import { MdOutlineContactPhone } from 'react-icons/md';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { getVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  const contacts = useSelector(getVisibleContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul>
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
export default ContactList;
