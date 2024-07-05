// "use client"
// import React, { useEffect } from 'react';
// import { useUserStore } from '@/store/UserStore';
// import { useRedirect } from '@/lib/hooks/useRedirect';

// type AuthPageGuardProps = {
//   children: React.ReactNode;
// };

// /**
//  * Redirect authenticated users when access login or register page
//  */
// export const AuthPageGuard: React.FC<AuthPageGuardProps> = ({ children }) => {
//   const { postLoginRedirect } = useRedirect();
//   const [isLoggedIn] =
//     useUserStore((state) => [
//       state.isLoggedIn,
//     ]);
//   useEffect(() => {
//     if (!!isLoggedIn) {
//       postLoginRedirect();
//     }
//   }, []);

//   return children;
// };
