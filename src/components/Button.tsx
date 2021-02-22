interface ButtonProps {
  color: string;
}

export function Button(props:ButtonProps) {
  return (
    <button type="button">
      {props.color}
    </button>
  );
}