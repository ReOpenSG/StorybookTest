import "../../styles/tailwind.css";

export interface SubmitProps {
  children: React.ReactNode;
  onClick?: () => void;
  number: number;
  type: "button" | "submit";
  color: "bg-lime-300" | "bg-lime-600" | "bg-lime-900";
  size?: "text-base" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl";
  disabled?: boolean;
}

const Submit = (props: SubmitProps) => {
  return (
    <button
      type={props.type}
      className={`${props.color} ${props.size} ${
        props.disabled ? "hidden" : "block"
      }`}
      onClick={props.onClick}
    >
      {props.children} {props.number}
    </button>
  );
};

export default Submit;
