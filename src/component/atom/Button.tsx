import { forwardRef, Ref, ButtonHTMLAttributes, useRef } from 'react';
import { css } from '@emotion/react';
import useId from 'hook/useId';
import { colors } from 'style/colors';

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  fullWidth?: boolean;
  color?: string;
  onlyText?: boolean;
  backgroundColor?: string;
}
const Button = forwardRef(function Button(props: Props, forwardedRef: Ref<HTMLButtonElement>) {
  const {
    onlyText,
    fullWidth = true,
    children,
    color = colors.main_black,
    backgroundColor = 'inherit',
    ...rest
  } = props;
  const buttonId = useId();

  const commonCss = useRef(css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
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
  `);

  const textCss = useRef(css`
    padding: 5px;
    cursor: pointer;
    &:focus {
      transition: text-shadow 0.1s ease-in-out, text-shadow 0.1s ease-in-out;
      text-shadow: 0.2px 0.2px 1px ${colors.text_shadow};
    }
  `);

  const buttonCss = useRef(css`
    border-radius: 16px;
    width: ${fullWidth ? '100%' : 'auto'};
    color: ${color};
    font-size: 17px;
    height: 56px;
    font-weight: 600;

    &:active {
      background-color: ${colors.text_shadow};
    }
  `);

  return (
    <button
      ref={forwardedRef}
      id={buttonId}
      css={css`
        ${commonCss.current};
        ${onlyText ? textCss.current : buttonCss.current};
        border: 0 solid transparent;
        background-color: ${backgroundColor};
      `}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
