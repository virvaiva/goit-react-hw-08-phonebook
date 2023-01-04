import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import Phonebook from 'components/PhoneBook/PhoneBook';
import ContactList from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Phonebook />
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};
export default ContactsPage;
