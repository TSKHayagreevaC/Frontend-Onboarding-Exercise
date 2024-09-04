import React, {FC, useEffect, useState} from 'react';

import NxWelcome from '../nx-welcome';

import OutlinedCard from '../components/outline-card';

import { useLocation, useParams } from 'react-router-dom';

export type ListItem = {
    
    id: string
    
    name: string
    
    model: string
    
    brand: string
    
    yearOfRelease: number
    
    color: string
  
}

const Details:FC = (listItem) => {

    const location = useLocation();

    const params = useParams();

    const type = location.pathname.split("/")[1];

    const head = type.charAt(0).toUpperCase() + type.slice(1, type.length-1);

    const [item, setItem] = useState<ListItem>({
      
        id: 'a7b9e435-9065-4ac0-b084-ebdc302d824d',
      
        name: 'Mini',
      
        model: 'Camry',
      
        yearOfRelease: 2023,
      
        brand: 'Toyota',
      
        color: 'Grey'
    
    })
    
    console.log("item :: ", item);

    const itemDetails = JSON.parse(`${localStorage.getItem(`${head.toLowerCase()}s`)}`)?.find((ele:any) => ele.id === params.id);

    console.log("itemDetails :: details.tsx :: ", itemDetails)
    
    return (
    
        <React.Fragment>
        
            <NxWelcome 
            
                title = {
                    
                    params.id === 'new' ? (

                        `New ${head}` 

                    )
                    
                    : (

                        `${head} Details`

                    ) 
                    
                } 
                
            />
    
            <OutlinedCard itemDetails={itemDetails} item={head} />
    
        </React.Fragment>

    )

}

export default Details;