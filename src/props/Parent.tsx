import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('click')}>
      fdsajkl
    </ChildAsFC>
  );
};

export default Parent;
