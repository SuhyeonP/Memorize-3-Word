import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IBlockProps {
  height: string;
}

export const BlockStyled = styled.div<IBlockProps>(({ height }) => {
  return css`
    display: flex;
    height: ${height};
  `;
});

export const ContentWrapper = styled.div`
  flex: 1;
`;
