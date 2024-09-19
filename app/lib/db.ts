import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
// best practice for usign prisma to make sure every time you use it its not being intstanciated over and over again 

// if offline use local sqlite db else use supabase
  /*if(isOffline)
  {
    return new SQLiteClient();
  }
  else {
    return new postgresClient()
  }*/