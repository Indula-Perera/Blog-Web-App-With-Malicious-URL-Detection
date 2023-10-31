// components/Comments.test.js

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Comments from './Comments';
import useSWR from 'swr';

// Mock the SWR library
jest.mock('swr');

describe('Comments', () => {
  it('renders the comments', async () => {
    // Mock SWR response data
    const mockData = [
      { _id: 1, user: { name: 'User 1' }, desc: 'Comment 1', createdAt: '2023-01-01T00:00:00.000Z', userEmail: 'user1@example.com' },
      { _id: 2, user: { name: 'User 2' }, desc: 'Comment 2', createdAt: '2023-01-02T00:00:00.000Z', userEmail: 'user2@example.com' },
    ];

    useSWR.mockReturnValue({
      data: mockData,
      mutate: jest.fn(),
      isLoading: false,
    });

    render(<Comments postSlug="example-post" />);

    // Check if the comments are displayed
    const commentElements = screen.getAllByTestId('comment');
    expect(commentElements).toHaveLength(mockData.length);

    // Check if user names and comment content are displayed correctly
    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('User 2')).toBeInTheDocument();
    expect(screen.getByText('Comment 1')).toBeInTheDocument();
    expect(screen.getByText('Comment 2')).toBeInTheDocument();

    // Check if the delete button is displayed
    const deleteButtons = screen.getAllByTestId('delete-button');
    expect(deleteButtons).toHaveLength(mockData.length);
  });

  it('allows adding a new comment', async () => {
    // Mock SWR response data
    const mockData = [];

    useSWR.mockReturnValue({
      data: mockData,
      mutate: jest.fn(),
      isLoading: false,
    });

    render(<Comments postSlug="example-post" />);

    // Add a comment
    const commentInput = screen.getByPlaceholderText('write a comment...');
    fireEvent.change(commentInput, { target: { value: 'New comment' } });

    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({ ok: true });

    // Click the "Send" button
    const sendButton = screen.getByText('Send');
    fireEvent.click(sendButton);

    // Wait for fetch to be called
    await act(async () => {
      await global.fetch;
    });

    // Ensure that the fetch API was called with the expected data
    expect(global.fetch).toHaveBeenCalledWith('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc: 'New comment', postSlug: 'example-post' }),
    });

    // Ensure that the "comment added" message is displayed
    expect(screen.getByText('comment added')).toBeInTheDocument();
  });
});
