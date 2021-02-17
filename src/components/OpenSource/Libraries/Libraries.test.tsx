import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Libraries from './Libraries';

describe('<Libraries />', () => {
  test('it should mount', () => {
    render(<Libraries />);
    
    const libraries = screen.getByTestId('Libraries');

    expect(libraries).toBeInTheDocument();
  });
});