"use server"
import prisma from "./db";
import getUser from "@/utils/supabase/getUser";

export default async function getTasks(){
    const user:any = await getUser();
    const data = await prisma.task.findMany(
        {
            where:{
                userId: user.id
            }
        }
    );
    return data
}