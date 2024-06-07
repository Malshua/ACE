import React, { InputHTMLAttributes } from 'react';

interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  max?: any;
  bg?: string;
  value?: any;
  onChange?: any;
  error?: string | undefined;
}

const Input = React.forwardRef(function Input(
  {
    type,
    label,
    placeholder,
    className,
    labelClassName,
    disabled,
    max,
    value,
    onChange,
    bg,
    error,
    ...props
  }: InputTypes,
  ref: React.LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <div>
      <div className="text-tertiary-default mb-2 flex items-center">
        {label && (
          <label className={`${labelClassName || ''} block text-left text-sm`}>
            {label}
          </label>
        )}
      </div>

      <input
        className={`w-full focus:outline-0 border border-gray-300 focus:border-primary-default focus:bg-white rounded text-sm px-4 py-3 placeholder:text-gray-300 all__trans placeholder:capitalize ${
          disabled ? 'bg-gray-200' : `${bg || 'bg-primary-soft'}`
        } ${className}`}
        ref={ref}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        max={max}
        {...props}
      />

      {error && <div className="ml-1 mt-2 text-xs text-red-500">{error}</div>}
    </div>
  );
});

export default Input;
