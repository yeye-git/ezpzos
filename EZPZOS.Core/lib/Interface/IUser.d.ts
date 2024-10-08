import { ManagedConfigs } from "../Domain/ManagedConfigs";
import { IDataObject } from "./IDataObject";
import { IUserRole } from "./IUserRole";
export interface IUser extends IDataObject {
    Username: string;
    Password: string;
    Email: string;
    Salt: string;
    Mobile: string;
    UserRoleIds: string[];
    Avatar: string;
    UserRoles: IUserRole[];
    Configs: ManagedConfigs;
}
