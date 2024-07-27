interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// ReactFC: react function component
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
