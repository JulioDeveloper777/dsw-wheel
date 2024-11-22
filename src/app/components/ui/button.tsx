interface ButtonProps extends React.ComponentProps<"button"> {}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-40 rounded-[20px] bg-white text-black px-4 py-3 text-lg font-medium transition-all hover:brightness-75"
      {...props}
    >
      {children}
    </button>
  );
}
