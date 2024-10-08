import { Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material"

import { useForm } from "react-hook-form"

import type { ListItem } from "../views/details"

import { useNavigate, useParams } from "react-router-dom";

import { faker } from "@faker-js/faker";

import { useState } from "react";


export default function HookForm(item: any) {
  
	const {
	
		register,
		
		handleSubmit,
	
		formState: { errors },
	
	} = useForm<ListItem>();

	
	const navigate = useNavigate();
	
	let itemDetails: ListItem;
	
	let isDuplicate: boolean;
	
	const params = useParams();
	
	const [editForm, setEditForm] = useState(params?.id !== 'new');

	const existingList = localStorage.getItem(`${item.item}s`.toLowerCase());

	itemDetails = JSON.parse(`${existingList}`)?.find((ele: any) => ele.id === params.id);

	isDuplicate = itemDetails?.name?.length === 0;

	const onSubmit = handleSubmit( 
	
		(data: ListItem) => {

			data.id = faker.string.uuid();

			console.log("data :: hook form :: ", data);
			
			const existingList = localStorage.getItem(`${item.item}s`.toLowerCase());

			console.log("existing list :: ", existingList);

			if (existingList?.length) {

				console.log("isDuplicate :: ", isDuplicate);

				if (isDuplicate) {
					
					alert(`${data.name} already submitted`);
					
				} else {

					let updateData: ListItem = {
						
						id: "",
						
						name: "",
						
						model: "",
						
						brand: "",
						
						yearOfRelease: 2000,
						
						color: ""
					
					};

					updateData.id = itemDetails?.id?.length ? itemDetails.id : faker.string.uuid();
					
					updateData.name = data?.name?.length ? data.name : itemDetails?.name;
					
					updateData.model = data?.model?.length ? data.model : itemDetails?.model;
					
					updateData.brand = data?.brand?.length ? data.brand : itemDetails?.brand;
					
					updateData.yearOfRelease = data?.yearOfRelease >= 2000 ? data.yearOfRelease : itemDetails?.yearOfRelease;
					
					updateData.color = data?.color?.length ? data.color : itemDetails?.color;

					console.log("updateData", updateData);

					const newList = JSON.parse(existingList).filter((ele: ListItem) => ele.id !== updateData.id);
					
					localStorage.setItem(`${item.item}s`.toLowerCase(), JSON.stringify([ ...newList, {...updateData}]));

					navigate(`/${item.item}s`.toLowerCase());
					
					window.location.reload();

				}

			} else {

				localStorage.setItem(`${item.item}s`.toLowerCase(), JSON.stringify([{...data, id: faker.string.uuid()}]))
				
				navigate(`/${item.item}s`.toLowerCase());
				
				window.location.reload();

			}	

		}
    
	);

	console.log("itemDetails :: hook-form.tsx :: ", itemDetails);

	return (

		<form onSubmit={onSubmit}>
		
			<Grid>
		
				<Grid m={2}>
		
					<TextField 

						defaultValue={itemDetails?.name}
					
						disabled={editForm} 
						
						fullWidth={true} 
						
						{...register("name")} 
						
						variant="standard" 
						
						label="Name" 
						
					/>
		
				</Grid>
		
				<Grid m={2}>
		
					<TextField 

						defaultValue={itemDetails?.model}

						disabled={editForm} 
						
						fullWidth={true} 
						
						{...register("model")} 
						
						variant="standard" 
						
						label="Model" 
						
					/>
		
				</Grid>
		
				<Grid m={2}>
		
					<TextField 

						defaultValue={itemDetails?.brand}
					
						disabled={editForm} 
						
						fullWidth={true} 
						
						{...register("brand")} 
						
						variant="standard" 
						
						label="Brand" 
						
					/>
		
				</Grid>
		
				<Grid m={2}>
		
					<TextField 

						type="number"

						InputProps={{ inputProps: { min: "2000", max: "2024", step: "1" } }}

						defaultValue={editForm ? itemDetails?.yearOfRelease : 2000}
					
						disabled={editForm} 
						
						fullWidth={true} 
						
						{...register("yearOfRelease")} 
						
						variant="standard" 
						
						label="Year Of Release" 
						
					/>
		
				</Grid>
		
				{`${item?.item}` === 'Car' && 

					<Grid m={2}>
			
						<TextField 

							defaultValue={itemDetails?.color}
						
							disabled={editForm} 
							
							fullWidth={true} 
							
							{...register("color")} 
							
							variant="standard" 
							
							label="Color" 
							
						/>
			
					</Grid>
				
				}


				{ `${item?.item}` === 'Truck' && 
				
					<Grid m={2}>

						<Typography color={'grey'} fontSize={15}>Permits</Typography>
						
						<Stack direction="row" spacing={2}>
							
							<TextField 

								// defaultValue={itemDetails?.color}
							
								disabled={editForm} 
								
								fullWidth={true} 
								
								// {...register("color")} 
								
								variant="standard" 
								
								label="Permit No" 
								
							/>

							<TextField 

								// defaultValue={itemDetails?.color}

								disabled={editForm} 

								fullWidth={true} 

								// {...register("color")} 

								variant="standard" 

								label="State" 

							/>
				
						</Stack>

					</Grid>

				}



		
			</Grid>
		
			{
			
				params?.id === 'new' ? (

					<Button

						disabled={editForm}
				
						sx={{m:2}}
						
						variant="contained"
						
						type="submit"
						
						size="small"
				
					>
						
						Submit
				
					</Button>

				) : (

					<Stack direction="row" spacing={2} m={2} mt={4}>
						
						{!editForm ? (

							<Button
						
								sx={{m:2}}
								
								variant="outlined"
								
								size="small"

								color="error"

								onClick={() => setEditForm(true)}
						
							>
								
								Cancel
						
							</Button>

						) : (

							<Button
						
								sx={{m:2}}
								
								variant="contained"
								
								size="small"

								onClick={() => setEditForm(false)}
						
							>
								
								Edit
						
							</Button>

						)}

						<Button

							disabled={editForm}
					
							sx={{m:2}}
							
							variant="contained"
							
							type="submit"
							
							size="small"
					
						>
							
							Submit
					
						</Button>

					
					</Stack>

				)
			
			}
		
		</form>
	)

}
