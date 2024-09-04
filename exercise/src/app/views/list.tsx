import DataGridDemo from "../components/datagrid-demo";

import React, {FC, useEffect, useState} from "react";

import NxWelcome from "../nx-welcome";

import { Button } from "@mui/material";

import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";
import { resetState } from "../store/listReducer";


interface ListProps { 
    
    title?: String;
    
    name?: String;

}

const List: FC<ListProps> = ({title, name}) => {
    
    const listState = useSelector(state => state);
    
    console.log("listState :: ", listState);

    console.log("list component :: title :: ", title?.toLowerCase());

    const listItems = localStorage.getItem(`${title?.toLowerCase()}`)
    
    console.log("list items :: local Storage :: ", listItems);
    
    const navigate = useNavigate();

    return <React.Fragment>

        <NxWelcome title={title} />

        <Button 

            component="a" 

            onClick={() => navigate(`/${name}/new`)} 

            variant='contained' 
            
            sx={{mb:1}}

            size="small"

        >
                
            Add New
                
        </Button>

        <DataGridDemo 
            
            title={name} 
            
            data={listState}
            
        />

    </React.Fragment>

}

export default List;