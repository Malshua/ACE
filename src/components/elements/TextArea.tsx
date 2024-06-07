import React from 'react';

interface InputTypes {
  label: string;
  labelStyle?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  bg?: string;
  value?: any;
  onChange?: any;
  error?: string | undefined;
}

const TextArea = React.forwardRef(function TextArea(
  {
    label,
    labelStyle,
    placeholder,
    className,
    disabled,
    value,
    onChange,
    bg,
    error,
    ...props
  }: InputTypes,
  ref: React.LegacyRef<HTMLTextAreaElement> | undefined
) {
  return (
    <div>
      {label && (
        <label
          className={`block mb-2 text-light-1 text-left ${
            labelStyle || 'text-sm'
          }`}
        >
          {label}
        </label>
      )}

      <textarea
        className={`w-full focus:outline-0 shadow focus:shadow-none border border-primary-soft focus:border-primary-default focus:bg-white rounded text-sm px-4 py-3 placeholder:text-muted transition-all ease-in-out duration-300 placeholder:capitalize ${
          disabled ? 'bg-gray-200' : `${bg || 'bg-primary-soft'}`
        } ${className || 'h-32'}`}
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      ></textarea>

      {error && <div className="ml-1 text-xs text-red-500">{error}</div>}
    </div>
  );
});

export default TextArea;
