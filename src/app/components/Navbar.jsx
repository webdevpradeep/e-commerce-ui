'use client';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-gray-50 flex justify-between gap-2 h-16 items-center px-5">
      <h3 className="font-semibold text-2xl">AmazingCart</h3>
      <nav className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/signup">Sign up</Link>
      </nav>
    </header>
  );
};

export default Navbar;
