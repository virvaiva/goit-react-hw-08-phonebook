import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

import { Contact } from 'components/ContactList/Contact/Contact';
import {
  ContactsList,
  ContactListItem,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const visibleСontacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {visibleСontacts.map(contact => (
        <ContactListItem key={contact.id}>
          <Contact contact={contact} />
        </ContactListItem>
      ))}
    </ContactsList>
  );
};
