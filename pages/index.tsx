import type { NextPage } from 'next';
import Link from 'next/link';
import { routes } from './[name]';

const Home: NextPage = () => (
  <ul>
    {routes.map((route) => (
      <Link href={`/${route.name}`} key={route.name}>
        <li>
          <a>{route.name}</a>
        </li>
      </Link>
    ))}
  </ul>
);

export default Home;
