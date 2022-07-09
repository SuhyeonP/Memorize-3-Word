import { forwardRef, Ref, ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import useId from 'hook/useId';
import { colors } from 'style/colors';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}
const Button = forwardRef(function Button(props: Props, forwardedRef: Ref<HTMLButtonElement>) {
  const { fullWidth = true, children, ...rest } = props;
  const buttonId = useId();

  return (
    <button
      ref={forwardedRef}
      id={buttonId}
      css={css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: ${fullWidth ? '100%' : 'auto'};
        height: 56px;
        border: 0 solid transparent;
        border-radius: 16px;
        background-color: ${colors.main_gray};
        color: ${colors.main_black};
        font-size: 17px;
        font-weight: 600;
        white-space: nowrap;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
        &:focus {
          outline: none;
        }
        &:disabled {
          opacity: 0.26;
          cursor: not-allowed;
        }
        &:active {
          background-color: ${colors.main_blue};
        }
      `}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
});

export default Button;
