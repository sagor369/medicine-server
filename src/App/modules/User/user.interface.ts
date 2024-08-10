import { Model } from "mongoose";
import { USER_ROLE } from "./user.const";

export interface IUser {
    id: string;
    email: string;
    password: string;
    passwordChangedAt?: Date;
    role: keyof typeof USER_ROLE;
    status: 'in-progress' | 'blocked';
    isDeleted: boolean;
  }

  export interface UserModel extends Model<IUser> {
    //instance methods for checking if the user exist
    isUserExistsByCustomId(id: string): Promise<IUser>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
    isJWTIssuedBeforePasswordChanged(
      passwordChangedTimestamp: Date,
      jwtIssuedTimestamp: number,
    ): boolean;
  }

export type TUserRole = keyof typeof USER_ROLE