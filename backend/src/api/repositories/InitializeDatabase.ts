import { prisma } from "../data/PrismaClient"
import { User } from "../domain/models/User"
import { FORMS } from "../utils/constants";
export const InitializeDatabase = async() => {
    const userAdmin = new User();
    userAdmin.email = "admin@admin.com";
    userAdmin.name = "admin";
    userAdmin.role = "admin";
    userAdmin.password = "12345678";
    const userAdminData = await prisma.user.findFirst({
        where:{
            email: userAdmin.email
        }
    })
    if(!userAdminData){
        await prisma.user.create({
            data:{
                email: userAdmin.email,
                name: userAdmin.name,
                password: userAdmin.password,
                role: userAdmin.role
            }
        })
    }
    const user = new User();
    user.email = "user@user.com";
    user.name = "user";
    user.role = "user";
    user.password = "12345678";
    const userData = await prisma.user.findFirst({
        where:{
            email: user.email
        }
    })
    if(!userData){
        await prisma.user.create({
            data:{
                email: user.email,
                name: user.name,
                password: user.password,
                role: user.role
            }
        })
    }
    const operator = new User();
    operator.email = "operator@operator.com";
    operator.name = "operator";
    operator.role = "operator";
    operator.password = "12345678";
    const operatorData = await prisma.user.findFirst({
        where:{
            email: operator.email
        }
    })
    if(!operatorData){
        await prisma.user.create({
            data:{
                email: operator.email,
                name: operator.name,
                password: operator.password,
                role: operator.role
            }
        })
    }
    const joystickWebsocket = await prisma.configuration.findFirst({
        where:{
            componentKey: FORMS.formJoystickWebsocket
        }
    })
    if(!joystickWebsocket){
        await prisma.configuration.create({
            data:{
                description: "Configuração de joystick usando websocket",
                name: "Joystick via websocket",
                componentKey: FORMS.formJoystickWebsocket
            }
        })
    }
}