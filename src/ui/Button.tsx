import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({
  variant,
  children,
  className,
  width = "w-fit",
  ...rest
}: Iprops) => {
  const baseStyles =
    "py-3 px-[30px] rounded-[25px] font-normal tracking-wider capitalize duration-300";
  const variantStyles =
    variant === "primary"
      ? "bg-[#E75E8D] hover:bg-white text-white hover:text-[#E75E8D]"
      : "bg-transparent border border-[#E75E8D] hover:bg-white text-[#E75E8D]";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${width} ${className} border`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
