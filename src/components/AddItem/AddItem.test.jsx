import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

it('should add a new item to list', async () => {
  render(<App />);
  const input = await screen.findAllByRole('textbox');
  userEvent.type(input[0], 'beans');

  expect(input[0]).toBeInTheDocument();
});
