import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Examples from './Examples';

describe('<Examples />', () => {
  test('it should mount', () => {
    render(<Examples />);
    
    const examples = screen.getByTestId('Examples');

    expect(examples).toBeInTheDocument();
  });
});