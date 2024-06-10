export declare const getGptResponses: (queryCacheKey: string[], args: void) => Promise<(import("@prisma/client/runtime").GetResult<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    content: string;
}, unknown> & {})[]>;
export declare const getAllTasksByUser: (queryCacheKey: string[], args: void) => Promise<(import("@prisma/client/runtime").GetResult<{
    id: string;
    createdAt: Date;
    userId: number;
    description: string;
    time: string;
    isDone: boolean;
}, unknown> & {})[]>;
export declare const getAllFilesByUser: (queryCacheKey: string[], args: void) => Promise<(import("@prisma/client/runtime").GetResult<{
    id: string;
    createdAt: Date;
    userId: number;
    name: string;
    type: string;
    key: string;
    uploadUrl: string;
}, unknown> & {})[]>;
export declare const getDownloadFileSignedURL: (queryCacheKey: string[], args: {
    key: string;
}) => Promise<string>;
export declare const getDailyStats: (queryCacheKey: string[], args: void) => Promise<{
    dailyStats: import("@prisma/client/runtime").GetResult<{
        id: number;
        date: Date;
        totalViews: number;
        prevDayViewsChangePercent: string;
        userCount: number;
        paidUserCount: number;
        userDelta: number;
        paidUserDelta: number;
        totalRevenue: number;
        totalProfit: number;
    }, unknown> & {} & {
        sources: (import("@prisma/client/runtime").GetResult<{
            name: string;
            date: Date;
            dailyStatsId: number;
            visitors: number;
        }, unknown> & {})[];
    };
    weeklyStats: (import("@prisma/client/runtime").GetResult<{
        id: number;
        date: Date;
        totalViews: number;
        prevDayViewsChangePercent: string;
        userCount: number;
        paidUserCount: number;
        userDelta: number;
        paidUserDelta: number;
        totalRevenue: number;
        totalProfit: number;
    }, unknown> & {} & {
        sources: (import("@prisma/client/runtime").GetResult<{
            name: string;
            date: Date;
            dailyStatsId: number;
            visitors: number;
        }, unknown> & {})[];
    })[];
}>;
export declare const getPaginatedUsers: (queryCacheKey: string[], args: {
    skip: number;
    cursor?: number;
    emailContains?: string;
    isAdmin?: boolean;
    subscriptionStatus?: import("../../../ext-src/shared/types").SubscriptionStatusOptions[];
}) => Promise<{
    users: Pick<import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {}, "id" | "email" | "username" | "lastActiveTimestamp" | "stripeId" | "subscriptionStatus">[];
    totalPages: number;
}>;
export { addMetadataToQuery } from './core';
