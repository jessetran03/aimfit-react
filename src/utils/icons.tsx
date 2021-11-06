import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  className?: string;
}

export const RightIcon = ({ className }: IProps) => {
  return (
    <FontAwesomeIcon className={className} icon='chevron-right' />
  );
};

export const PlusIcon = ({ className }: IProps) => {
  return (
    <FontAwesomeIcon className={className} icon='plus-circle' />
  );
};

export const SettingsIcon = ({ className }: IProps) => {
  return (
    <FontAwesomeIcon className={className} icon='cog' />
  );
};