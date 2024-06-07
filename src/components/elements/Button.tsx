import { BiLoaderCircle } from 'react-icons/bi';

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  background?: string;
  className?: string;
  onClick?: any;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  color,
  background,
  className,
  onClick,
  disabled,
  loading,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className || 'px-6 py-2 w-full'} ${
        background || 'bg-primary-default hover:bg-primary-default'
      }  ${
        color || 'text-white'
      } all__trans hover:-translate-y-1 flex items-center justify-center gap-2`}
      disabled={disabled || loading}
    >
      {loading && <BiLoaderCircle className="animate-spin text-3xl" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
