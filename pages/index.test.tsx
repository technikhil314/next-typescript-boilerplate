import { act, render, screen, waitFor } from '@testing-library/react';
import App from '../pages/index';

describe('App', () => {
  it('renders without crashing', async () => {
    await act(async () => render(<App />));
    await waitFor(() =>
      screen.getByRole('heading', { name: 'Welcome to Next.js!' })
    );
    expect(
      screen.getByRole('heading', { name: 'Welcome to Next.js!' })
    ).toBeInTheDocument();
  });
});
