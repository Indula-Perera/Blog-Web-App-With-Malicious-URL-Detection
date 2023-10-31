import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import WritePage from './WritePage.test';

describe('WritePage', () => {
  it('renders the component', () => {
    render(<WritePage />);
    // Check if the component renders without errors
    const titleInput = screen.getByPlaceholderText('Title');
    const select = screen.getByRole('combobox');
    const textArea = screen.getByPlaceholderText('Tell Your Story...');
    const publishButton = screen.getByText('Publish');

    expect(titleInput).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
    expect(publishButton).toBeInTheDocument();
  });

  it('handles input changes', async () => {
    render(<WritePage />);
    
    const titleInput = screen.getByPlaceholderText('Title');
    const select = screen.getByRole('combobox');
    const textArea = screen.getByPlaceholderText('Tell Your Story...');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(select, { target: { value: 'Cyber' } });
    fireEvent.change(textArea, { target: { value: 'Test content' } });

    expect(titleInput.value).toBe('Test Title');
    expect(select.value).toBe('Cyber');
    expect(textArea.value).toBe('Test content');
  });

  it('handles form submission', async () => {
    render(<WritePage />);
    
    const titleInput = screen.getByPlaceholderText('Title');
    const select = screen.getByRole('combobox');
    const textArea = screen.getByPlaceholderText('Tell Your Story...');
    const publishButton = screen.getByText('Publish');
    
    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(select, { target: { value: 'Cyber' } });
    fireEvent.change(textArea, { target: { value: 'Test content' } });
    fireEvent.click(publishButton);
    
    // You can add more assertions based on the actual logic in your handleSubmit function
    // For example, check if the API request is made and if a success alert is shown
    await waitFor(() => {
      // Add your assertions here
    });
  });
});
