import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 when no expenses exist', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test('should return a total with 1 expense', () => {
  const total = selectExpensesTotal([expenses[0]]);
  const value = 195;

  expect(total).toBe(value);
});

test('should return a total with multiple expenses', () => {
  const total = selectExpensesTotal(expenses);
  const value = 114195;
  expect(total).toBe(value);
});
