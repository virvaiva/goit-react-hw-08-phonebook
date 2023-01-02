import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

import Contacts from './Contacts/Contacts';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contacts contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
