import { Button } from 'component/atom';
import { MouseEvent } from 'react';
import { IValueLabel } from 'types/index';
import styled from '@emotion/styled';

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
    { label: '세 단어 암기법', value: 'three-words' },
  ];

  const callEvent = (target: string) => (e: MouseEvent) => {
    e.preventDefault();
    console.log(target);
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
