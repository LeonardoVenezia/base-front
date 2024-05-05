import Eye from '../Eye';
import { useState } from 'react';

const Input = ({
  type= 'text',
  placeholder= null,
  value,
  change,
  htmlFor,
  label,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = ()=> {
    setOpen(!open);
  }
  return (
    <div className="mb-4">
      <label htmlFor={htmlFor || placeholder || value}>
        {label}
      </label>
      <div className="input input-bordered w-full max-w-xs mt-1 flex items-center">
        <input
          type={open ? 'text' : type}
          placeholder={placeholder}
          className="grow"
          value={value}
          onChange={change}
        />
        <Eye
          type={type}
          open={open}
          callBack={handleOpen}
        />
      </div>
    </div>
  );
}

export default Input;
