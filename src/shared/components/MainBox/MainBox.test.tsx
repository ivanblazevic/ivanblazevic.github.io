import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainBox from './MainBox';

describe('<MainBox />', () => {
  test('it should mount', () => {
    render(<MainBox />);
    
    const mainBox = screen.getByTestId('MainBox');

    expect(mainBox).toBeInTheDocument();
  });
});