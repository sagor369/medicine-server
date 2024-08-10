import { IUser } from "./user.interface";


const createUserInToDb = async(payload: IUser) =>{

}

const getAllUserInToDb = async(query:Record<string, unknown>) =>{

}
const getSingleUserInToDb = async(id: string) =>{

}
const updateUserInToDb = async(id: string, payload:Partial<IUser>) =>{

}
const deleteUserInToDb = async(id: string)=>{

}

export const UserServices = {
    createUserInToDb,
    getAllUserInToDb,
    getSingleUserInToDb,
    updateUserInToDb,
    deleteUserInToDb
}