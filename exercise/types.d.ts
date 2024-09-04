export interface Item {
    name: string, 
    model: string, 
    yearOfRelease: number, 
    brand: string, 
    color: string
}

  
 export type ListState = {
    list: Item[]
  }
  
  type ListAction = {
    type: string
    Item: Item
  }
  