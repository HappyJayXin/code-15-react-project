import { useRouter } from 'next/router';
import BirthdayReminder from '../features/BirthdayReminder';
import Tours from '../features/Tours';

export const routes = [
  {
    name: 'birthday-reminder',
    component: BirthdayReminder,
  },
	{
    name: 'tour',
    component: Tours,
  },
];

const Page = () => {
  const router = useRouter();
  const { name } = router.query;

  const Component = routes.map((route) => {
    if (route.name === name) {
      const Component = route.component;
      return <Component key={route.name} />;
    }
  });

  return Component;
};

export default Page;
