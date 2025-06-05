import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, type, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        'relative overflow-hidden rounded-full bg-transparent border border-stone-300 px-4 py-2',
        'font-medium text-white',
        'bg-gradient-to-r from-transparent via-stone-400/20 to-transparent bg-[length:200%_100%] bg-left',
        'hover:bg-right',
        'transition-[background-position] duration-300 ease-out'
      )}
      type={type ?? 'button'}
      {...rest}
    >
      {children}
    </button>
  );
}
