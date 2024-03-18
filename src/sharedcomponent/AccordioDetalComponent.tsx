import { Divider, IconButton, Typography,  Button, Popover } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import { LinkingIcon } from "../assets/icons/LinkingIcon";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EastIcon from "@mui/icons-material/East";
import AddIcon from '@mui/icons-material/Add';
import InputField from './InputField';
import { useFieldArray, useForm } from 'react-hook-form';
import DropDownPanel from './DropDownPanel';
const AccordioDetalComponent = () => {
    const { control } = useForm();
  const { fields, append,remove } = useFieldArray({
    control,
    name: "timeSheet",
  });
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
   <>
      {fields.map((_, index) => {
        return (
        <div className="flex w-full">
    <div className="mt-3">
      <span className="flex flex-start ml-[-7px]">
        <LinkingIcon />
      </span>
      <Divider
        orientation="vertical"
        sx={{
          width: "1px",
          height: "100px",
          border: "1px solid #D1D8E0",
          marginRight: "15px",
        }}
      />
    </div>

    <div className="flex w-full flex-col">
      <div className="flex w-full  justify-between h-[30px] border border-gray-400] mt-1 bg-[#F6F8FA] p-1">
        <div
          onClick={handleClick}
          className="flex w-full cursor-pointer "
        >
          <IconButton
            sx={{
              padding: 0,
              paddingTop: "-5px",
              marginRight: "10px",
            }}
          >
            <CalendarTodayIcon
              sx={{
                width: "15px",
                height: "15px",
                paddingTop: "-10px",
              }}
            />
          </IconButton>
          <Typography>Nov 2023</Typography>
          <EastIcon
            sx={{
              marginX: "15px",
            }}
          />
          <Typography>Nov 2023</Typography>
          <ArrowDropDownIcon />
        </div>
        <Popover
       
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
       
        <DropDownPanel handleClose={handleClose}/>
        
        
      </Popover>
       <IconButton onClick={()=>remove(index)}>  <CloseIcon sx={{
        width:'15px',
        height:'15px'
       }} /></IconButton>
      </div>
      <Divider  sx={{ width: "100%" }} />
     <InputField id={`{timeSheet.${index}.price}`} control={control} />
    </div>
  </div>
    );
})}
     <Button onClick={() => append({})} sx={{
        textTransform:'none',
     }}
     startIcon={< AddIcon sx={{marginRight:'10px'}}/>}>Add Time Segment</Button>
    </>
   
  )
}

export default AccordioDetalComponent