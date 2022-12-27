import { ContactList } from 'components/ContactList/ContactList';
import { Contact } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';

export function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Contact />
      <Filter />
      {isLoading && <b>Request in progress...</b>}
      <ContactList />
    </>
  );
}
