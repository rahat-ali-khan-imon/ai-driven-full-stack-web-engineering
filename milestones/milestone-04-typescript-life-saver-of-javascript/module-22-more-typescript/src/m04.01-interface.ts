type userRole = 'Admin' | 'User' | 'Moderator' | 'Guest';

interface User {
    name: string;
    role: userRole;
    email:  string;
}

interface Admin extends User {
    permission: string[];
};

interface Moderator extends User {
    moderatedSections: string[];
};

const bigBoos: Admin = {
    name: 'Big Boos',
    role: 'Admin',
    email: 'bigboos@gmail.com',
    permission: ['manage_users', 'edit_content']
};



type book = {
    title: string;
    author: string;
    publishedYear: number;
};

// type book = {                            // Error
//     location: string;
// };



interface Gift {
    name: string;
}

interface Gift {
    price: number;
}

const birthdayGift: Gift = {
    name: 'Teddy Bear',
    price: 1000
};