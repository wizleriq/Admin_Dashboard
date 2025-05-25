export interface Post {
    id: string;
    type: string;
    createdAt: (string)[]; 
    lastModified: (string | number)[]; 
    status: string;
}