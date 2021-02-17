import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OpenSource from './OpenSource';

describe('<OpenSource />', () => {
  test('it should mount', () => {
    render(<OpenSource />);
    
    const openSource = screen.getByTestId('OpenSource');

    expect(openSource).toBeInTheDocument();
  });
});