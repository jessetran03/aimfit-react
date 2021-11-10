import { useState } from 'react';

const useModal = (visible = false) => {
  const [isOpen, toggle] = useState(visible);
  function setOpen() {
    toggle(true);
  }
  function setClosed() {
    toggle(false);
  }
  return {isOpen, setOpen, setClosed};
};

export default useModal;
