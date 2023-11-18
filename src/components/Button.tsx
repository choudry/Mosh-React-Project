interface ButtonProps {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

export const Button = ({
  children,
  onClick,
  color = "primary",
}: ButtonProps) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
