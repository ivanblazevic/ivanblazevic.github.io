import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderItem from './HeaderItem';

describe('<HeaderItem />', () => {
  test('it should mount', () => {
    render(<HeaderItem />);
    
    const headerItem = screen.getByTestId('HeaderItem');

    expect(headerItem).toBeInTheDocument();
  });
});