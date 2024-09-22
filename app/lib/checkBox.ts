'use server'
import prisma from "./db";


export default async function checkBoxUpdate(id:number, isChecked: boolean)
{
    await prisma.task.update({

            where:{ id },
            data: {
                completed: isChecked,
            },

        });
}
/*Here I don't need to revaldiate path becausethe checkbox of the task if being changed
in the jsx and both it and the server side value will be in sync without having to render based on the server side value */