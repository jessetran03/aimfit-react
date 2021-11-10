import { useState } from 'react';

const useModal = (visible = false) => {
  const [isOpen, toggle] = useState(visible);
  const setOpen = () => toggle(true);
  const setClosed = () => toggle(false);
  return { isOpen, setOpen, setClosed };
};

export default useModal;
