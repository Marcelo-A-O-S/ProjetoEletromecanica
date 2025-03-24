import { User } from "../domain/models/User";
import { IUserRepository } from "./interfaces/IUserRepository";
import { prisma } from "../data/PrismaClient";
export class UserRepository implements IUserRepository {
    async FindWithPasswordByEmail(email: string): Promise<User> {
        const user = new User()
        const userDB = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (userDB) {
            user.id = userDB.id;
            user.email = userDB.email;
            user.name = userDB.name;
            user.password = userDB.password;
        }
        return user;
    }
    async FindByEmail(email: string): Promise<User> {
        const user = new User()
        const userDB = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (userDB) {
            user.id = userDB.id;
            user.email = userDB.email;
            user.name = userDB.name;
            user.role = userDB.role;
        }
        return user;
    }
    async FindByName(name: string): Promise<User> {
        const user = new User()
        const userDB = await prisma.user.findFirst({
            where: {
                name: name
            }
        })
        if (userDB) {
            user.id = userDB.id;
            user.email = userDB.email;
            user.name = userDB.name;
        }
        return user;
    }
    async FindByRoles(role: string): Promise<User[]> {
        const users: User[] = [];
        const usersDB = await prisma.user.findMany({
            where: {
                role: role
            }
        })
        if (usersDB) {
            return Object.assign(users, usersDB);
        }
        return users;
    }
    async Update(Entity: User): Promise<{ entity: User, message: string }> {
        const updateUser = await prisma.user.update({
            where: {
                id: Entity.id
            },
            data: {
                email: Entity.email,
                name: Entity.name
            }
        })
        return { entity: updateUser, message: "Atualizado com sucesso!" }
    }
    async ListAll(): Promise<User[]> {
        const users: User[] = [];
        const usersDb = await prisma.user.findMany();
        usersDb.map((userDb, index) => {
            const user = new User()
            user.id = userDb.id;
            user.name = userDb.name;
            user.email = userDb.email;
            users.push(user)
        })
        return users;
    }
    async Save(Entity: User): Promise<{ entity: User, message: string }> {
        try {
            if (Entity.id == 0) {
                const createuser = await prisma.user.create({
                    data: {
                        email: Entity.email,
                        name: Entity.name,
                        password: Entity.password,
                        role: Entity.role
                    }
                })
                return { entity: createuser, message: "Salvo com sucesso!" };
            } else {
                const updateUser = await prisma.user.update({
                    where: {
                        id: Entity.id
                    },
                    data: {
                        email: Entity.email,
                        name: Entity.name
                    }
                })
                return { entity: updateUser, message: "Atualizado com sucesso!" }
            }
        } catch (err) {
            return { entity: new User(), message: `Internal server error: ${err}`}
        }
    }
    async GetbyId(Id: number): Promise<User> {
        const userDB = await prisma.user.findUnique({
            where: {
                id: Id
            }
        })
        const user = new User()
        if (userDB) {
            user.id = userDB.id;
            user.email = userDB.email;
            user.name = userDB.name;
        }
        return user;
    }
    async Delete(Entity: User): Promise<string> {
        const result = await prisma.user.delete({
            where: {
                id: Entity.id
            }
        })
        return "Deletado com sucesso!";
    }
    async DeleteById(Id: number): Promise<string> {
        const result = await prisma.user.delete({
            where: {
                id: Id
            }
        })
        return "Deletado com sucesso!";;
    }

}