export interface Post {
    id: string; // Added id field
    // name: string;
    email: string;
    image: string;
    price: string;
    totalSold: number; // changed 'total sold' to 'totalSold'
    status: string;
    createdAt: (string | number)[]; // changed 'created at' to 'createdAt'
  }

//    id: 'Wisdom  Ndata',
//       image: Imagetwo.src,
//       email: 'Wisdomndata@gmail.com',
//       price: "+2349065678193",
//       totalSold: 25,
//       status: 'Draft',
//       createdAt: ['2023-01-01', '10:36AM']