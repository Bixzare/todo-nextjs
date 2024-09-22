"use server";

import prisma from "@/app/lib/db";


export async function update(formData: FormData){
    console.log("here",formData.get("title"))
}