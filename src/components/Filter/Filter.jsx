import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterChangeAction } from 'redux/contacts/contactsAction';
import { getFilter } from 'redux/contacts/contactsSelectors';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilterChange = event =>
    dispatch(filterChangeAction(event.target.value));

  return (
    <Label>
      Find contacts by Name
      <Input
        type="text"
        placeholder="Search contact"
        value={value}
        onChange={handleFilterChange}
      />
    </Label>
  );
};
