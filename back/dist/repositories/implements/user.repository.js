"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_entity_1 = require("../../domain/entities/user.entity");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UserRepository = class UserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async FindWithPasswordByEmail(email) {
        const user = new user_entity_1.User();
        const userDB = await this.prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (userDB) {
            user.id = userDB.id;
            user.email = userDB.email;
            user.name = userDB.name;
            user.password = userDB.password;
            user.role = userDB.role;
        }
        return user;
    }
    async FindByEmail(email) {
        const user = new user_entity_1.User();
        const userDB = await this.prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if (userDB) {
            user.id = userDB.id;
            user.email = userDB.email;
            user.name = userDB.name;
            user.role = userDB.role;
        }
        return user;
    }
    async FindByName(name) {
        const user = new user_entity_1.User();
        const userDB = await this.prisma.user.findFirst({
            where: {
                name: name
            }
        });
        if (userDB) {
            user.id = userDB.id;
            user.email = userDB.email;
            user.name = userDB.name;
        }
        return user;
    }
    async FindByRoles(role) {
        const users = [];
        const usersDB = await this.prisma.user.findMany({
            where: {
                role: role
            }
        });
        if (usersDB) {
            return Object.assign(users, usersDB);
        }
        return users;
    }
    async Update(Entity) {
        const updateUser = await this.prisma.user.update({
            where: {
                id: Entity.id
            },
            data: {
                email: Entity.email,
                name: Entity.name
            }
        });
        return { entity: updateUser, message: "Atualizado com sucesso!" };
    }
    async ListAll() {
        const users = [];
        const usersDb = await this.prisma.user.findMany();
        usersDb.map((userDb, index) => {
            const user = new user_entity_1.User();
            user.id = userDb.id;
            user.name = userDb.name;
            user.email = userDb.email;
            users.push(user);
        });
        return users;
    }
    async Save(Entity) {
        try {
            if (Entity.id == 0) {
                const createuser = await this.prisma.user.create({
                    data: {
                        email: Entity.email,
                        name: Entity.name,
                        password: Entity.password,
                        role: Entity.role
                    }
                });
                return { entity: createuser, message: "Salvo com sucesso!" };
            }
            else {
                const updateUser = await this.prisma.user.update({
                    where: {
                        id: Entity.id
                    },
                    data: {
                        email: Entity.email,
                        name: Entity.name
                    }
                });
                return { entity: updateUser, message: "Atualizado com sucesso!" };
            }
        }
        catch (err) {
            return { entity: new user_entity_1.User(), message: `Internal server error: ${err}` };
        }
    }
    async GetbyId(Id) {
        const userDB = await this.prisma.user.findUnique({
            where: {
                id: Id
            }
        });
        const user = new user_entity_1.User();
        if (userDB) {
            user.id = userDB.id;
            user.email = userDB.email;
            user.name = userDB.name;
        }
        return user;
    }
    async Delete(Entity) {
        const result = await this.prisma.user.delete({
            where: {
                id: Entity.id
            }
        });
        return "Deletado com sucesso!";
    }
    async DeleteById(Id) {
        const result = await this.prisma.user.delete({
            where: {
                id: Id
            }
        });
        return "Deletado com sucesso!";
        ;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRepository);
//# sourceMappingURL=user.repository.js.map