import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import css from './ContactsForm';

export default function ContactsForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = form;

    let value = {
      name: name.value,
      number: number.value,
    };
    // console.log(value);

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      return alert(`${name.value} is already in contacts.`);
    }

    dispatch(addContact(value));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.formWrap}>
      <div className={css.inputWrap}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          id={nanoid()}
          //id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.inputWrap}>
        <label className={css.label}>Number</label>
        <input
          className={css.input}
          id={nanoid()}
          //id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
