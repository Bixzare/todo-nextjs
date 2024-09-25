'use server'
import prisma from "./db";
import getUser from "@/utils/supabase/getUser";

export default async function checkBoxUpdate(id:number, isChecked: boolean)
{
    const user:any = getUser();

    await prisma.task.update({

            where:{ 
                id,
                userId: user.id },
            data: {
                completed: isChecked,
            },

        });
}
/*Need id cause its the primary key and can also use userId to further confirm */
/*Here I don't need to revaldiate path becausethe checkbox of the task if being changed
in the jsx and both it and the server side value will be in sync without having to render based on the server side value */