import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import { CloseIcon } from '../utils/icons';

interface IModalProps {
  children: JSX.Element;
  isOpen: boolean;
  setClosed: () => void;
}

const Modal = ({ children, isOpen, setClosed }: IModalProps) =>
  isOpen
    ? ReactDOM.createPortal(
        <FocusTrap active={isOpen}>
          <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full z-50 bg-black bg-opacity-75">
            <div
              className="relative m-auto bg-white p-9 rounded"
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute top-0 right-0 w-10 h-10"
                type="button"
                onClick={setClosed}
              >
                <CloseIcon className="text-2xl" />
              </button>
              <div>{children}</div>
            </div>
          </div>
        </FocusTrap>,
        document.body,
      )
    : null;

export default Modal;
