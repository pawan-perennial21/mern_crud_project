import React, { useState, createContext, ReactNode } from "react";

interface User {
    id: number;
    username: string;
    email: string;
    job: string;
    mobile: string;
}

interface UserContextType {
    users: User[];
    // eslint-disable-next-line @typescript-eslint/ban-types
    setUsers:any;
    addUser: (user: User) => void;
    deleteUser: (userId: number) => void;
    updateUser: (userId: number, updatedUser: User) => void;
}

export const UserContext = createContext<UserContextType>(
    {} as UserContextType
);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({
    children,
}) => {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (user: User) => {
        setUsers([...users, user]);
    };

    const deleteUser = (userId: number) => {
        setUsers(users.filter((user) => user.id !== userId));
    };

    const updateUser = (userId: number, updatedUser: User) => {
        setUsers(
            users.map((user) =>
                user.id === userId ? updatedUser : user
            )
        );
    };

    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
                addUser,
                deleteUser,
                updateUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
