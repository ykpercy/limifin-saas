import { PrismaClient } from '@prisma/client';

// Singleton pattern to avoid multiple instances of Prisma
const prismaClientSingleton = () => {
    return new PrismaClient();
};

// declare global {
//     // eslint-disable-next-line no-var
//     var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
// }
declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
