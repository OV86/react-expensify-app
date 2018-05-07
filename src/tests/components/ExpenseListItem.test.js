import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with a single expense', () => {
  const wrapper = shallow(<ExpenseListItem expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
