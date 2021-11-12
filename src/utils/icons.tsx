import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  className?: string;
}

export const BarsIcon = ({ className }: IProps) => {
  return <FontAwesomeIcon className={className} icon="bars" />;
};
export const CloseIcon = ({ className }: IProps) => {
  return <FontAwesomeIcon className={className} icon="times" />;
};
export const RightIcon = ({ className }: IProps) => {
  return <FontAwesomeIcon className={className} icon="chevron-right" />;
};

export const PlusIcon = ({ className }: IProps) => {
  return <FontAwesomeIcon className={className} icon="plus-circle" />;
};

export const SettingsIcon = ({ className }: IProps) => {
  return <FontAwesomeIcon className={className} icon="cog" />;
};
