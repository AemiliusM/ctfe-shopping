import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

// const item = {
//   id: 4,
//   text: 'brick',
//   complete: false,
// };

beforeEach(() => {
  render(<App />);
});
it('should render a single item within a list', async () => {
  const updateBtn = await screen.findAllByRole('button', { name: 'Edit' });
  // console.log('btn’, updateBtn[0]);
  userEvent.click(updateBtn[0]);
  const input = await screen.findAllByRole('textbox');
  // console.log('input’, input);
  waitFor(async () => {
    userEvent.type(input[0], 'brick');
    const updateItemInput = await screen.findByText('brick');
    expect(updateItemInput).toBeInTheDocument();
  });
  expect(updateBtn[0]).toBeInTheDocument();
  const deleteBtn = await screen.findAllByRole('button', {
    name: 'delete-button',
  });
  userEvent.click(deleteBtn[0]);
  expect(deleteBtn[0]).toBeEnabled();
});
