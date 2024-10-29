'use client'
import React, { useState } from 'react'
import { DashNav } from '@components/Nav'
import { Sidebar } from '@components/Sidebar'
import { useApp } from '@context/AppProviders'

export default function DashLayout({ children }) {
  const {isSidebarOpen,toggleSidebar}=useApp();

  return (
    <>
      {/* Navigation bar with burger icon on smaller screens */}
      <DashNav/>
      {/* Sidebar drawer for small screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed inset-y-0 left-0 w-72 bg-white p-4 z-50 shadow-lg">
            <Sidebar />
            <button onClick={toggleSidebar} className="absolute top-2 right-2 text-xl font-bold">
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Main layout */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-[0.5fr_4fr]">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </>
  )
}
