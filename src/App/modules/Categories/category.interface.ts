import { Types } from "mongoose";

export type TCategory = {
    name: string 
    slug: string
    thumbnail: string
    categoryType:'primary'| 'secondary' |'tertiary'
    isDeleted: boolean
}