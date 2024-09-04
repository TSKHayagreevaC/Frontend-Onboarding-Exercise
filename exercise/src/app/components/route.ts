import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import FireTruckIcon from '@mui/icons-material/FireTruck';

import List from '../views/list';

export type Route = {

    id: React.Key

    name?: String

    icon?: any

    label?: String

    component?: React.FC

}    

export const routes: Route[] = [

    { id: '04dea3bb', name: 'cars', icon: DirectionsCarIcon, label: 'Cars', component: List },
    
    { id: '6cb2aa9f', name: 'trucks', icon: FireTruckIcon, label: 'Trucks', component: List }

]