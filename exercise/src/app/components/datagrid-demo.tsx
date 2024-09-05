import Box from '@mui/material/Box';

import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { Button } from '@mui/material';

const columns: GridColDef<(typeof rows)[number]>[] = [

    { field: 'name', headerName: 'Name', width: 150, editable: true },
  
    { field: 'model', headerName: 'Model', width: 150, editable: true },
  
    { field: 'yearOfRelease', headerName: 'Year', type: 'number', width: 110, editable: true },
  
    { field: 'brand', headerName: 'Brand', description: 'Row description.', sortable: false, width: 160 },
  
];

const rows = [
  
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

];

export default function DataGridDemo({title, data}: {title:String | undefined, data:any}) {

    console.log("data :: data grid :: ", data);

    console.log("data :: data grid :: ", `${title}`);

    console.log("data :: data grid :: ", data[`${title}`]);

    return (
    
        <Box sx={{ height: 400, width: '100%' }}>
        
            <DataGrid
            
                rows={data[`${title}`]}
        
                columns={[
        
                    {
                        field: 'id', 
                        
                        headerName: 'ID', 
                        
                        width: 350, 
                        
                        renderCell: (
                            
                            params: GridRenderCellParams<any, String>) => {
                
                                return (
                                
                                    <Button component="a" href={`/${title}/${params.value}`}>
                                        
                                        {params.value}
                                        
                                    </Button>

                                )
                            }
            
                        }, 
            
                        ...columns]}
            
                        initialState={{
            
                            pagination: {
                
                                paginationModel: {
                
                                    pageSize: 5,
                
                                },
            
                            },
            
                        }}
            
                        pageSizeOptions={[5]}
            
                        checkboxSelection
            
                        disableRowSelectionOnClick
        
            />

        </Box>
    
    );

}