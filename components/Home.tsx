import { HomeProp } from '@/types';

export default function Home(props: HomeProp) {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.description}</h1>
      <p>{props.detail}</p>
    </>
  );
}
