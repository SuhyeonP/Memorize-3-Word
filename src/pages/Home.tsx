import { Button } from 'component/atom';
import { MouseEvent } from 'react';
import { IValueLabel } from 'types/index';
import styled from '@emotion/styled';
import { useInternalRouter } from 'hook/routing';

const ButtonsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
`;

export const Home = (): JSX.Element => {
  const siteMap: IValueLabel[] = [
    {
      label: 'JS - core',
      value: 'jscore',
    },
    {
      label: 'React',
      value: 'react',
    },
    {
      label: '쓰면서 외우자(파란펜 암기법)',
      value: 'blue-pen',
    },
    { label: '세 단어 암기법', value: 'mini-quiz' },
  ];

  const router = useInternalRouter();

  const callEvent = (target: string) => (e: MouseEvent) => {
    e.preventDefault();
    router.push(target);
  };

  return (
    <ButtonsStyled>
      {siteMap.map(site => (
        <Button key={site.value} onClick={callEvent(site.value)} type="button" onlyText>
          {site.label}
        </Button>
      ))}
    </ButtonsStyled>
  );
};
