import { Post } from '@/types/emailtype';

const posts: Post[] = [
    {
        id: 'Welcome- No Image',
        type: 'Welcome',
        createdAt: ['2024-09-04', '10:36AM'],
        lastModified: ['2024-10-01', '13:00PM'],
        status: 'Online',

    },
    {
        id: 'Lemon Blender- Image',
        type: 'Promotions',
        createdAt: ['2024-10-01', '10:36AM'],
        lastModified: ['2025-01-11', '08:36AM'],
        status: 'Online',

    },
    {
        id: 'Reset Password- No Image',
        type: 'Authentication',
        createdAt: ['2025-01-23', '10:36AM'],
        lastModified: ['2025-01-16', '14:36AM'],
        status: 'Online',

    },
    {
        id: 'Reset Password- Image',
        type: 'Verification',
        createdAt: ['2025-02-09', '10:36AM'],
        lastModified: ['2025-03-01', '09:42AM'],
        status: 'Online',

    },
    {
        id: 'Password reset Complete - No Image',
        type: 'Authentication',
        createdAt: ['2025-03-10', '10:36AM'],
        lastModified: ['2025-03-06', '11:32AM'],
        status: 'Online',

    },
    
];

export default posts;

