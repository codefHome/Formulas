import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
interface InputFieldProp {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;

}
const InputField = ({
  id,
  control,

}: InputFieldProp) => {

 

  return (
    <div className="flex flex-col space-y-3 w-full">
    
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id={id}
            variant="outlined"
            sx={{
              divShadow: '',
              borderRadius: '16px',
            }}
          />
        )}
      />
    </div>
  );
};

export default InputField;
