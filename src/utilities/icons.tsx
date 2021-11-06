import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PlusIcon = ({ className }: any) => {
  return (
    <FontAwesomeIcon className={className} icon='plus-circle' />
  );
};

export const SettingsIcon = ({ className }: any) => {
  return (
    <FontAwesomeIcon className={className} icon='cog' />
  );
};