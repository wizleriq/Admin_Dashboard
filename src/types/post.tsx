export interface Post {
  id: string; // Added id field
  price: number;
  totalSold: number;
  status: string;
  // image: string; //string
  // email: string; //string
  createdAt: (string | number)[]; // changed 'created at' to 'createdAt'
}

// export interface Post {
//   id: string; // Added id field
//   name: string;
//   price: number;
  // email: string;
  // image: string;
    // price: string;
//   totalSold: number; // changed 'total sold' to 'totalSold'
//   status: string;
//   createdAt: (string | number)[]; // changed 'created at' to 'createdAt'
// }
