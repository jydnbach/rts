const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  // mouse over the target event in JSX to check type
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('Im being dragged');
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
