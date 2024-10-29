'use client'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiDocument } from "react-icons/hi";
import { LuBadge } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
   
  export function Sidebar() {
    const [active,setActive]=useState({
      dash:false,
      skill:false,
      intern:false
    })
    const path=usePathname();
    useEffect(()=>{
      if (path=='/skill_test'){
        setActive({skill:true})
      }
    },[])
    return (
      <Card className="min-h-screen h-full w-full border-r-gray-900 p-4">
        <List className="font-semibold">
          <ListItem>
            <ListItemPrefix>
              <MdDashboard className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem className={`${active.skill?"bg-gray-100 text-blue-700":""} rounded-r-full`}>
            <ListItemPrefix>
              <LuBadge className="h-5 w-5" />
            </ListItemPrefix>
            Skill Test
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <HiDocument className="h-5 w-5" />
            </ListItemPrefix>
            Internship
          </ListItem>
        </List>
      </Card>
    );
  }