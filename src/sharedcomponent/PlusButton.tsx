import { IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
IconButton
interface PlusButtonProps{
    onClick: ()=>void;

}

const PlusButton = ({ onClick }: PlusButtonProps) => {
    return (
        <IconButton sx={{
            borderRadius: '5px',
            width: '25px',
            height: '25px',
            backgroundColor: 'blue',
            color: 'white',
            padding: '2px'
        }} 
        
        onClick={onClick}
       
        >
<AddIcon/>
        </IconButton>
    )
}
export default PlusButton