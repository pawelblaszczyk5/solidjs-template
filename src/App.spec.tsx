import { render, screen } from 'solid-testing-library';
import { App } from './App';

test('Example test', () => {
  render(() => <App />);

  expect(
    screen.getByRole('heading', { name: 'Hello world!', level: 1 }),
  ).toBeInTheDocument();
});
