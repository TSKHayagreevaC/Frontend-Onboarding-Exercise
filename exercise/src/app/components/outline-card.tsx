import Card from '@mui/material/Card';

import HookForm from './hook-form';


export default function OutlinedCard(item: any) {
    
    return ( 
    
        <Card variant="outlined" sx={{p:2}}> 
        
            <HookForm item={item.item} /> 
            
        </Card> 
        
    );

}
