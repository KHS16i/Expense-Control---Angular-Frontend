export interface newRecord {
    userId: number;
    description: string;
    userPaid: number | null;
    unitPrice: number | null;
}

export interface Records {
    id: number;
    userId: number;
    description: string;
    userPaid: number;
    unitPrice: number;
    date: string;
    total: number;
}