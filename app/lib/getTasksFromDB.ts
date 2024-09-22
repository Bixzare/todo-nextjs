"use server"
import prisma from "./db";

export default async function getTasks(){
    const data = await prisma.task.findMany();
    return data
}