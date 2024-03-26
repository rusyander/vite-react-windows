import { render } from '@testing-library/react';
import App from './app';
import event from '@testing-library/user-event';

describe('App', () => {
  test('demo', () => {
    expect(true).toBe(true);
  });

  test('Renders the main page', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });

  test('render app', () => {
    const { getByText } = render(<App />);

    expect(
      getByText('Click on the Vite and React logos to learn more'),
    ).toBeInTheDocument();
  });

  test('counter is work', async () => {
    const { getByText } = render(<App />);
    const button = getByText('count is 0');
    await event.click(button);
    expect(getByText('count is 1')).toBeInTheDocument();
  });
});
