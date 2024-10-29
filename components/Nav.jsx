"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useApp } from "@context/AppProviders";
import { Avatar, Button, IconButton, Input, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { HiMenu } from "react-icons/hi";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Modals, { AddPropertyModal, UpdateScore } from "./Modals";


export const AuthNav = () => {
  const { toggleAuthPage, AuthPage } = useApp();

  return (
    <nav className="z-10 bg-white shadow-md flex justify-between items-center w-full px-4 sm:px-8 md:px-16 lg:px-32 py-4">
      <Link href='/' className='flex gap-2 items-center'>
        {/* <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        /> */}
        <p className='font-extrabold text-xl sm:text-2xl tracking-wider'>LAND ME</p>
      </Link>
      <div className="text-sm sm:text-base">
        {AuthPage === "login" ? (
          <p>
            Don't have an Account?
            <b onClick={() => toggleAuthPage("register")} className="cursor-pointer text-blue-500"> Sign up!</b>
          </p>
        ) : (
          <p>
            Already have an account?
            <b onClick={() => toggleAuthPage("login")} className="cursor-pointer text-blue-500"> Log In!</b>
          </p>
        )}
      </div>
    </nav>
  );
}



export const DashNav = () => {
  const {isSidebarOpen,toggleSidebar}=useApp();

  const router = useRouter();


  return (
    <nav className="bg-gradient-to-b from-gray-200 to-white border-b-2 border-gray-100 w-full flex items-center justify-between py-2 px-6 md:px-24">
      {/* Logo */}
      <Link href="/dash" className="flex items-center gap-2">
        <img src="https://photos.wellfound.com/startups/i/10130633-833576a963b41d8946174d102bdc1200-medium_jpg.jpg?buster=1717832532" className="aspect-square w-12"/>
        <p className="font-bold text-xl sm:text-2xl">WhatBytes</p>
      </Link>

      <div className="md:hidden flex items-center">
          <HiMenu onClick={toggleSidebar} className="text-3xl cursor-pointer" />
      </div>
      <div className="hidden md:block">
        <Menu className="">
          <MenuHandler>
            <Button color="white" className="border-2 rounded-lg hover:shadow-sm text-xl flex gap-4 items-center py-1 px-3">
              <Avatar size="sm" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
              <h1 className="text-sm">Mridul Tiwari</h1>
            </Button>
          </MenuHandler>
          <MenuList className="grid gap-2">
            <Button color="red" className="bg-red-600 text-white text-center">
              Log Out
            </Button>
          </MenuList>
        </Menu>
      </div>

    </nav>
  );
};
