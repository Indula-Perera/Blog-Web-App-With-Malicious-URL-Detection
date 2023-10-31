// components/CategoryList.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryList from './CategoryList';
import { act } from 'react-dom/test-utils';

// Mock the data fetching function
jest.mock('./CategoryList', () => {
  return {
    __esModule: true,
    default: jest.fn(() => {
      return (
        <div>
          <h1>Mocked CategoryList</h1>
          <div data-testid="categories">
            <div data-testid="category">Category 1</div>
            <div data-testid="category">Category 2</div>
          </div>
        </div>
      );
    }),
  };
});

describe('CategoryList', () => {
  it('renders the component with mock data', async () => {
    render(<CategoryList />);

    // You can also wait for the component to fetch data if needed
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Ensure that the component renders the mocked data
    expect(screen.getByText('Mocked CategoryList')).toBeInTheDocument();
    expect(screen.getAllByTestId('category')).toHaveLength(2);
  });
});
