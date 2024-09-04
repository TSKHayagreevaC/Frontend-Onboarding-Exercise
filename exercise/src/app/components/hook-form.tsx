import { Button, Grid, TextField } from "@mui/material"

import { useForm } from "react-hook-form"

import type { ListItem } from "../views/details"

import { useNavigate, useParams } from "react-router-dom";

import { faker } from "@faker-js/faker";


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

	const existingList = localStorage.getItem(`${item.item}s`.toLowerCase());

	itemDetails = JSON.parse(`${existingList}`).find((ele: any) => ele.name === params.id);

	isDuplicate = itemDetails?.name?.length === 0;

	const onSubmit = handleSubmit( 
	
		(data: ListItem) => {

			data.id = faker.string.uuid();

			console.log("data :: hook form :: ", data);
			
			const existingList = localStorage.getItem(`${item.item}s`.toLowerCase());

			console.log("existing list :: ", existingList);

			if (existingList?.length) {

				itemDetails = JSON.parse(existingList).find((ele: any) => ele.name === data.name);

				isDuplicate = itemDetails?.name?.length === 0;

				console.log("isDuplicate :: ", isDuplicate);

				if (isDuplicate) {
					
					alert(`${data.name} already submitted`);
					
				} else {
					
					localStorage.setItem(`${item.item}s`.toLowerCase(), JSON.stringify([...JSON.parse(existingList), {...data, id: faker.string.uuid()}]));

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

	const readOnly = params?.id !== 'new';

	console.log("params , readOnly ", params?.id, readOnly)

	return (

		<form onSubmit={onSubmit}>
		
			<Grid>
		
				<Grid m={2}>
		
					<TextField disabled={readOnly} fullWidth={true} {...register("name")} variant="standard" label="Name" />
		
				</Grid>
		
				<Grid m={2}>
		
					<TextField disabled={readOnly} fullWidth={true} {...register("model")} variant="standard" label="Model" />
		
				</Grid>
		
				<Grid m={2}>
		
					<TextField disabled={readOnly} fullWidth={true} {...register("brand")} variant="standard" label="Brand" />
		
				</Grid>
		
				<Grid m={2}>
		
					<TextField disabled={readOnly} fullWidth={true} {...register("yearOfRelease")} variant="standard" label="Year Of Release" />
		
				</Grid>
		
				<Grid m={2}>
		
					<TextField disabled={readOnly} fullWidth={true} {...register("color")} variant="standard" label="Color" />
		
				</Grid>
		
			</Grid>
		
			<Button
		
				sx={{m:2}}
				
				variant="contained"
				
				type="submit"
				
				size="small"
		
			>
				
				Submit
		
			</Button>
		
		</form>
	)

}
