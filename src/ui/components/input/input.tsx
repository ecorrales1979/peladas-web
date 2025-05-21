import clsx from 'clsx';
import { useEffect, useRef, useState, type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({
  label,
  id,
  value: valueProp,
  onChange,
  ...props
}: InputProps) {
  const [value, setValue] = useState(valueProp ?? '');
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync internal value if controlled
  useEffect(() => {
    if (typeof valueProp === 'string') {
      setValue(valueProp);
    }
  }, [valueProp]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <div className="relative w-full">
      <input
        id={id}
        ref={inputRef}
        value={value}
        onChange={handleChange}
        placeholder=" "
        className={clsx(
          'peer w-full bg-transparent rounded-md px-3 py-2 text-slate-700 text-sm border border-slate-200 shadow-sm',
          'placeholder:text-slate-400 hover:border-slate-300',
          'focus:outline-none focus:border-slate-400 focus:shadow',
          'transition duration-300 ease'
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className={clsx(
          'absolute text-sm dark:text-gray-400 px-2 start-1',
          'bg-[var(--bg-light-color)] dark:bg-[var(--bg-dark-color)] text-gray-500',
          'duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]',
          'peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4',
          'peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2'
        )}
      >
        {label}
      </label>
    </div>
  );
}
