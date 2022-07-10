import { usePathRouter } from 'hook/routing';

export const HandBook = (): JSX.Element => {
  const { path } = usePathRouter();
  return (
    <>
      <p>{path}</p>
      <p> hand book explain</p>
    </>
  );
};
