import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RoundedButton from './RoundedButton';

describe('<RoundedButton />', () => {
  test('it should mount', () => {
    render(<RoundedButton />);
    
    const roundedButton = screen.getByTestId('RoundedButton');

    expect(roundedButton).toBeInTheDocument();
  });
});