import type { NextPage } from 'next';
import Link from 'next/link';
import { routes } from './[name]';

const Home: NextPage = () => (
  <ul>
    <li>
      {routes.map((route) => (
        <Link href={`/${route.name}`} key={route.name}>
          <a>{route.name}</a>
        </Link>
      ))}
    </li>
  </ul>
);

export default Home;
