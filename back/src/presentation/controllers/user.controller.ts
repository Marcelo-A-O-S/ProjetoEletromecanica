import { UserServices } from "src/services/implements/user.service";
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Query } from "@nestjs/common";
import { DeleteUserSchema, FindByEmailSchema, FindByRolesUserSchema, SaveUserSchema, UpdateUserSchema } from "../schemas/UserSchemas";
import { User } from "src/domain/entities/user.entity";
@Controller('users')
export class UserController {
    constructor(private readonly userServices: UserServices) { }
    @Get('find-by-role')
    async findByRoles(@Query('role') role: string) {
        if (!role) {
            throw new HttpException("Role is required", HttpStatus.BAD_REQUEST);
        }
        return await this.userServices.FindByRole(role);
    }
    @Get('find-by-email')
    async findByEmail(@Query('email') email: string) {
        if (!email) {
            throw new HttpException("Email is required", HttpStatus.BAD_REQUEST);
        }
        const user = await this.userServices.FindByEmail(email);
        if (!user) {
            throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        }
        return user;
    }
    @Get('get-by-id')
    async getById(@Query('id') id: string) {
        const numericId = Number(id);
        if (!id || isNaN(numericId)) {
            throw new HttpException("ID must be a valid number", HttpStatus.BAD_REQUEST);
        }

        const user = await this.userServices.GetbyId(numericId);
        if (!user) {
            throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        }
        return user;
    }
    @Get()
    async listAll() {
        return await this.userServices.GetAll();
    }
    @Post('save')
    async save(@Body() body: any) {
        try {
            const resultSchema = await SaveUserSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { email, name, role, password } = resultSchema.data
            const user = new User();
            user.email = email;
            user.name = name;
            user.password = password;
            user.role = role;
            const result = await this.userServices.Save(user);
            if (result.entity.id == 0) {
                throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
            } else {
                return {
                    message: result.message,
                  };
            }
        } catch (err) {
            throw new HttpException(`Internal server erro: ${err}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Post('update')
    async update(@Body() body: any) {
        try {
            const resultSchema = await UpdateUserSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { id, email, name, role, password } = resultSchema.data
            const user = new User();
            user.id = id;
            user.email = email;
            user.name = name;
            user.password = password;
            user.role = role;
            const result = await this.userServices.Save(user);
            if (result.entity.id == 0) {
                throw new HttpException(result.message, HttpStatus.BAD_REQUEST);

            } else {
                return {
                    message: result.message,
                  };
            }

        } catch (err) {
            throw new HttpException(`Internal server erro: ${err}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete()
    async delete(@Body() body: any) {
        try {
            const resultSchema = await DeleteUserSchema.safeParseAsync(body);
            if (!resultSchema.success) {
                throw new HttpException(resultSchema.error, HttpStatus.BAD_REQUEST);
            }
            const { id, email, name, role, password } = resultSchema.data
            const user = new User();
            user.id = id;
            user.email = email;
            user.name = name;
            user.password = password;
            user.role = role;
            const result = await this.userServices.Delete(user);
            return result

        } catch (err) {
            throw new HttpException(`Internal server erro: ${err}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete('delete-by-id')
    async deleteById(@Query('id') id: string) {
        try {
            const numericId = Number(id);
            if (!id || isNaN(numericId)) {
                throw new HttpException("ID must be a valid number", HttpStatus.BAD_REQUEST);
            }
            const result = await this.userServices.DeleteById(numericId);
            return result;

        } catch (err) {
            throw new HttpException(`Internal server erro: ${err}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}