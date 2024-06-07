import React from 'react';
import Select from 'react-select';

export interface SelectDropdownTypes {
  defaultValue?: any;
  label?: string;
  labelClassName?: string;
  onChange?: any;
  styles?: string | any;
  disabled?: boolean;
  options: { value: string | number; label: string }[];
  multiSelect?: any;
  textTransform?: string;
  error?: string | undefined;
  placeholder?: string;
}

const SelectDropdown = React.forwardRef(function SelectDropdown(
  {
    label,
    labelClassName,
    defaultValue,
    onChange,
    styles,
    disabled,
    options,
    multiSelect,
    textTransform,
    error,
    placeholder,
    ...rest
  }: SelectDropdownTypes,
  ref
) {
  // select dropdown custom styles
  const selectCustomStyles = {
    menu: (provided: any) => ({
      ...provided,
      fontSize: '14px',
      textTransform: textTransform || 'capitalize',
      zIndex: 999,
    }),

    placeholder: (provided: any) => ({
      ...provided,
      color: '#A0A6AC',
    }),

    control: (provided: any, state: { isFocused: any }) => ({
      ...provided,
      minHeight: '46px',
      fontSize: '14px',
      border: `1px solid ${state.isFocused ? '#28A745' : '#d1d5db'}`,
      color: '#E7EDF2',
      borderRadius: '4px',
      textTransform: textTransform || 'capitalize',
      // backgroundColor: '#e6e9f0',
    }),

    option: (provided: any, state: { isSelected: any; isFocused: any }) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#002366'
        : state.isFocused
        ? '#e6e9f0'
        : '',
    }),

    singleValue: (provided: any, state: { isDisabled: any }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div>
      {label && (
        <label
          className={`${
            labelClassName || 'text-tertiary-default'
          } block mb-2 text-left text-sm`}
        >
          {label}
        </label>
      )}

      {multiSelect ? (
        <Select
          isClearable
          isMulti
          components={{
            DropdownIndicator: () => (
              <span className="pr-4">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.101076 0.657184L4.75769 5.88725C4.89154 6.03758 5.10856 6.03758 5.24241 5.88725L9.8989 0.657184C10.1148 0.414655 9.96197 0 9.65651 0H0.343444C0.0380781 0 -0.114844 0.414671 0.101076 0.657184Z"
                    fill="#002366"
                  />
                </svg>
              </span>
            ),
            IndicatorSeparator: () => null,
          }}
          isDisabled={disabled}
          defaultValue={defaultValue}
          onChange={onChange}
          styles={styles || selectCustomStyles}
          options={options}
          {...rest}
        />
      ) : (
        <Select
          isClearable
          components={{
            DropdownIndicator: () => (
              <span className="pr-4">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.101076 0.657184L4.75769 5.88725C4.89154 6.03758 5.10856 6.03758 5.24241 5.88725L9.8989 0.657184C10.1148 0.414655 9.96197 0 9.65651 0H0.343444C0.0380781 0 -0.114844 0.414671 0.101076 0.657184Z"
                    fill="#002366"
                  />
                </svg>
              </span>
            ),
            IndicatorSeparator: () => null,
          }}
          isDisabled={disabled}
          defaultValue={defaultValue}
          onChange={onChange}
          styles={styles || selectCustomStyles}
          options={options}
          placeholder={placeholder || 'Pick an option'}
          {...rest}
        />
      )}

      {error && <div className="ml-1 mt-2 text-xs text-red-500">{error}</div>}
    </div>
  );
});

export default SelectDropdown;
