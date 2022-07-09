import { MouseEvent } from 'react';
import Text from 'atom/Text';
import { useCallback } from 'react';
import Button from 'atom/Button';
import { IValueLabel } from 'types/index';

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

  const callEvent = useCallback(
    (target: string) => (e: MouseEvent) => {
      e.preventDefault();
      console.log(target);
    },
    []
  );

  return (
    <>
      <div>
        {siteMap.map(site => (
          <Button key={site.value} onClick={callEvent(site.value)} type="button" onlyText>
            <Text typography="important" fontWeight="semibold">
              {site.label}
            </Text>
          </Button>
        ))}
      </div>
      <Text typography="explain" fontWeight="semibold">
        본 암기법은 파란펜 암기법과, 세단어 암기법을 이용하였습니다.
      </Text>
    </>
  );
};
