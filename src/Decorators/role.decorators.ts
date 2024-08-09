import { SetMetadata } from "@nestjs/common";
import { UserRole } from "../Commons/Enum/Enums";

export const ROLES = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES, roles);