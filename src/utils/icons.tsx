import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export const BarsIcon = ({ className }: IProps) => {
  return <FontAwesomeIcon className={className} icon="bars" />;
};
export const CloseIcon = ({ className }: IProps) => {
  return <FontAwesomeIcon className={className} icon="times" />;
};
export const LeftArrowIcon = ({ className }: IProps) => {
  return <FontAwesomeIcon className={className} icon="arrow-left" />;
};
export const LoadingIcon = ({ className }: IProps) => {
  return <FontAwesomeIcon className={className} icon="spinner" spin />;
};
export const MinusIcon = ({ className, onClick }: IProps) => {
  return (
    <FontAwesomeIcon
      className={className}
      icon="minus-circle"
      onClick={onClick}
    />
  );
};
export const OptionsIcon = ({ className, onClick }: IProps) => {
  return (
    <FontAwesomeIcon
      className={className}
      icon="ellipsis-v"
      onClick={onClick}
    />
  );
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
