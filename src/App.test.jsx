import { expect, test } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('search, category, and favorites filters work together and update the header', () => {
  render(<App />);

  const search = screen.getByRole('searchbox', { name: /otsi kursuse nime järgi/i });
  const catalog = screen.getByRole('heading', { name: 'Kõik koolitused' }).parentElement;
  fireEvent.change(search, { target: { value: 'reacti' } });
  expect(within(catalog).getByRole('heading', { name: 'Reacti sissejuhatus' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Disain' }));
  expect(screen.getByRole('status')).toHaveTextContent('Sobivaid kursusi ei leitud.');
  expect(search).toHaveValue('reacti');

  fireEvent.change(search, { target: { value: '' } });
  expect(within(catalog).getByRole('heading', { name: 'Kasutajaliidese kujundamine' })).toBeInTheDocument();
  expect(within(catalog).queryByRole('heading', { name: 'Reacti sissejuhatus' })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Kõik' }));
  const favoriteButtons = within(catalog).getAllByRole('button', {
    name: 'Lisa lemmikuks: Reacti sissejuhatus',
  });
  fireEvent.click(favoriteButtons[0]);
  fireEvent.click(within(catalog).getByRole('button', { name: 'Lisa lemmikuks: Andmete analüüs Pythoniga' }));
  expect(screen.getByText('Lemmikud: 2')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Ainult lemmikud' }));
  expect(screen.queryByRole('heading', { name: 'Populaarsed koolitused' })).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Kasutajaliidese kujundamine' })).not.toBeInTheDocument();
  expect(within(catalog).getByRole('heading', { name: 'Reacti sissejuhatus' })).toBeInTheDocument();
  expect(within(catalog).getByRole('heading', { name: 'Andmete analüüs Pythoniga' })).toBeInTheDocument();
  expect(within(catalog).queryByRole('heading', { name: 'Kasutajaliidese kujundamine' })).not.toBeInTheDocument();

  fireEvent.click(screen.getAllByRole('button', {
    name: 'Eemalda lemmikutest: Reacti sissejuhatus',
  })[0]);
  expect(screen.getByText('Lemmikud: 1')).toBeInTheDocument();
  expect(within(catalog).queryByRole('heading', { name: 'Reacti sissejuhatus' })).not.toBeInTheDocument();
});

test('shows a message when a search has no matching course', () => {
  render(<App />);

  fireEvent.change(screen.getByRole('searchbox', { name: /otsi kursuse nime järgi/i }), {
    target: { value: 'puuduv kursus' },
  });

  expect(screen.getByRole('status')).toHaveTextContent('Sobivaid kursusi ei leitud.');
});
