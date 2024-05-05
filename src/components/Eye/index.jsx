import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const Eye = ({type, callBack, open})=> {
  if (type != 'password') return;

  const Icon = open ? EyeIcon : EyeSlashIcon;
  return (
    <Icon
      className="w-5 h-5 text-grey"
      onClick={callBack}
    />
  );
}

export default Eye;
