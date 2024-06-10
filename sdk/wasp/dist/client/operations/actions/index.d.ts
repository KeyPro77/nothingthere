export declare const generateGptResponse: (args: {
    hours: string;
}) => Promise<import("../../../ext-src/shared/types").GeneratedSchedule>;
export declare const createTask: (args: Pick<import("@prisma/client/runtime").GetResult<{
    id: string;
    createdAt: Date;
    userId: number;
    description: string;
    time: string;
    isDone: boolean;
}, unknown> & {}, "description">) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    createdAt: Date;
    userId: number;
    description: string;
    time: string;
    isDone: boolean;
}, unknown> & {}>;
export declare const deleteTask: (args: Pick<import("@prisma/client/runtime").GetResult<{
    id: string;
    createdAt: Date;
    userId: number;
    description: string;
    time: string;
    isDone: boolean;
}, unknown> & {}, "id">) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    createdAt: Date;
    userId: number;
    description: string;
    time: string;
    isDone: boolean;
}, unknown> & {}>;
export declare const updateTask: (args: Partial<import("@prisma/client/runtime").GetResult<{
    id: string;
    createdAt: Date;
    userId: number;
    description: string;
    time: string;
    isDone: boolean;
}, unknown> & {}>) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    createdAt: Date;
    userId: number;
    description: string;
    time: string;
    isDone: boolean;
}, unknown> & {}>;
export declare const stripePayment: (args: string) => Promise<import("../../../ext-src/shared/types").StripePaymentResult>;
export declare const updateCurrentUser: (args: Partial<import("@prisma/client/runtime").GetResult<{
    id: number;
    createdAt: Date;
    email: string;
    username: string;
    lastActiveTimestamp: Date;
    isAdmin: boolean;
    stripeId: string;
    checkoutSessionId: string;
    subscriptionTier: string;
    subscriptionStatus: string;
    sendEmail: boolean;
    datePaid: Date;
    credits: number;
}, unknown> & {}>) => Promise<import("@prisma/client/runtime").GetResult<{
    id: number;
    createdAt: Date;
    email: string;
    username: string;
    lastActiveTimestamp: Date;
    isAdmin: boolean;
    stripeId: string;
    checkoutSessionId: string;
    subscriptionTier: string;
    subscriptionStatus: string;
    sendEmail: boolean;
    datePaid: Date;
    credits: number;
}, unknown> & {}>;
export declare const updateUserById: (args: {
    id: number;
    data: Partial<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        email: string;
        username: string;
        lastActiveTimestamp: Date;
        isAdmin: boolean;
        stripeId: string;
        checkoutSessionId: string;
        subscriptionTier: string;
        subscriptionStatus: string;
        sendEmail: boolean;
        datePaid: Date;
        credits: number;
    }, unknown> & {}>;
}) => Promise<import("@prisma/client/runtime").GetResult<{
    id: number;
    createdAt: Date;
    email: string;
    username: string;
    lastActiveTimestamp: Date;
    isAdmin: boolean;
    stripeId: string;
    checkoutSessionId: string;
    subscriptionTier: string;
    subscriptionStatus: string;
    sendEmail: boolean;
    datePaid: Date;
    credits: number;
}, unknown> & {}>;
export declare const createFile: (args: {
    fileType: string;
    name: string;
}) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    createdAt: Date;
    userId: number;
    name: string;
    type: string;
    key: string;
    uploadUrl: string;
}, unknown> & {}>;
