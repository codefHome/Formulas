import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton, Popover, } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import DatePicker, { ReactDatePicker } from "react-datepicker";
import AddIcon from '@mui/icons-material/Add';
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import AccordioDetalComponent from "./AccordioDetalComponent";






interface FormulaBodyProps{
  title:string
}
const FormualBodyInput = ({title}:FormulaBodyProps) => {
  const datePickerRef = useRef<ReactDatePicker>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date!);
  };


  const handleMoreIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
  }
  const handleInfoIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Box>
        <div>
          <Box
            sx={{
              height: "10px",
              backgroundColor: "#E5E7EA",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography>{title}</Typography>
              <span className="flex">
                <IconButton onClick={handleInfoIcon} sx={{ padding: 0 }}>
                  <InfoIcon sx={{ width: "15px", height: "15px" }} />
                </IconButton>
                <Popover

                  id={id}
                  open={open}
                  onClose={handleClose}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',

                  }}
                >

                  <Button variant='contained' startIcon={<AddIcon />} sx={{
                    textTransform: 'none',

                  }}>Add Description </Button>


                </Popover>
                <IconButton onClick={handleMoreIcon} sx={{ padding: 0 }}>
                  <MoreHorizIcon sx={{ width: "25px", height: "25px" }} />
                </IconButton>
              </span>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: 0,
              backgroundColor: "#F6F8FA",
            }}
          >
            <div className="flex  relative top-0 left-0 w-full bg-[#F6F8FA]">
              <Typography className="flex w-full justify-start bg-[#F6F8FA]">
                $ 45.00
              </Typography>
              <DatePicker
                className="flex w-full justify-end bg-transparent outline-none focus:bg-transparent hover:bg-transparent mr-0 pr-0"
                ref={datePickerRef}
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
              />
            </div>
          </Box>
        </div>
        <Box>
       <AccordioDetalComponent />
        </Box>
      </Box>
    </div>
  );
};

export default FormualBodyInput;
