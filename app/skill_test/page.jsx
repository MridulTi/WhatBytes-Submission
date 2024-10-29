'use client'

import { UpdateScore } from '@components/Modals'
import { useApp } from '@context/AppProviders'
import { Button, Progress, Typography } from '@material-tailwind/react'
import { GaugeContainer, GaugeReferenceArc, GaugeValueArc, LineChart } from '@mui/x-charts'
import React from 'react'
import { BiCheck, BiCheckbox, BiSolidNotepad, BiTargetLock } from 'react-icons/bi'
import { BsCheck, BsCheck2Square, BsCheckSquareFill, BsTrophyFill } from 'react-icons/bs'
import { VscGraphLine } from 'react-icons/vsc'

function Homepage() {
  const {modal,toggleModal,scores}=useApp();
  return (
    <div className='py-6 px-12'>
      <p className='text-gray-700 pb-6 font-medium'>Skill Test</p>
      <div className='columns-1 xl:columns-2 gap-12'>
        <div className="grid gap-6 grid-cols-1">
          <div className='flex gap-4 items-center p-5 border-2 border-gray-100 rounded-lg'>
            <img src="https://cdn-icons-png.flaticon.com/256/5968/5968267.png" className='w-24 aspect-square'/>
            <div>
              <h3 className='font-semibold py-2'>Hyper Text Markup Language</h3>
              <p>Questions: 08 | Duration : 15 mins | Submitted on 5 June 2021</p>
            </div>
            <Button className='bg-blue-900' onClick={()=>toggleModal()}>Update</Button>
          </div>
          <div className='px-2 py-5 border-2 border-gray-100 rounded-lg'>
            <div className='grid gap-4 px-12'>
              <h3 className='font-semibold text-lg'>Quick Statstics</h3>
              <div className='grid md:grid-flow-row 2xl:grid-flow-col gap-6'>
                <div className='flex gap-2 items-center'>
                  <BsTrophyFill className='bg-gray-200 text-5xl p-3 rounded-full text-yellow-800' />
                  <div>
                    <h1 className='font-bold text-xl'>{scores?.Rank}</h1>
                    <p className='text-gray-400 text-sm'>YOUR RANK</p>
                  </div>
                </div>
                <hr className='w-1 bg-gray-100 h-full' />
                <div className='flex gap-2 items-center'>
                  <BiSolidNotepad className='bg-gray-200 text-5xl p-3 rounded-full text-gray-800' />
                  <div>
                    <h1 className='font-bold text-xl'>{scores?.Percentile}%</h1>
                    <p className='text-gray-400 text-sm'>PERCENTILE</p>
                  </div>
                </div>
                <hr className='w-1 bg-gray-100 h-full' />
                <div className='flex gap-2 items-center'>
                  <BsCheckSquareFill className='bg-gray-200 text-5xl p-3 rounded-full text-green-400' />
                  <div>
                    <h1 className='font-bold text-xl'>{scores?.Current_Score}/15</h1>
                    <p className='text-gray-400 text-sm'>CORRECT ANSWERS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid gap-4 px-2 pt-5 px-10 border-2 border-gray-100 rounded-lg'>
            <div className='flex justify-between gap-4 items-center'>
              <div className='grid gap-4'>
                <h1 className='text-lg font-semibold'>Comparison Graph</h1>
                <p className='text-gray-900'><span className='font-semibold'>You scored 90% percentile</span> which is lower than the average percentile 72% of all the engineers who took this assessment</p>
              </div>
              <VscGraphLine className='bg-gray-200 p-2 aspect-square rounded-full text-4xl text-red-800' />
            </div>
            <LineChart
              xAxis={[{ data: [1,10,20,28,28,32,35,40,42,45,48,50,57,72,85,88,88,100] }]}
              series={[
                {
                  data: [1,5,13,20,26,24,30,36,38,38.7,45,43,32,24,20,10,10,10],
                },
              ]}
              className='w-full aspect-video'
            />
          </div>
        </div>
        <br/>
        <div className="grid gap-6 grid-cols-1">
          <div className='grid p-10 pb-20 border-2 border-gray-100 rounded-lg' >
            <h1 className='font-semibold text-lg'>Syllabus Wise Analysis</h1>
            <div className='grid gap-12 pt-6'>
            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="p">
                  HTML Tools, Forms , History
                </Typography>
                <Typography color="blue" variant="h6">
                  80%
                </Typography>
              </div>
              <Progress value={80} color='blue'/>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="p">
                  Rags & References in HTML
                </Typography>
                <Typography color="orange" variant="h6">
                  60%
                </Typography>
              </div>
              <Progress value={60} color='orange'/>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="p">
                  Tables and Reference in HTML
                </Typography>
                <Typography color="red" variant="h6">
                  24%
                </Typography>
              </div>
              <Progress value={24} color='red'/>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="p">
                  Tables and CSS Basics
                </Typography>
                <Typography color="green" variant="h6">
                  96%
                </Typography>
              </div>
              <Progress value={96} color='green'/>
            </div>
            </div>
          </div>
          <div className='grid gap-4 px-10 py-5 border-2 border-gray-100 rounded-lg'>
            <div className='font-semibold flex justify-between'>
              <h1 className='text-lg'>Question Analysis</h1>
              <p className='font-semibold text-blue-900'>12/15</p>
            </div>
            <p className='text-gray-900'><span className='font-semibold'>You scored 12 questions out of 15.</span> However, it still needs some improvements</p>
            <div className='grid place-items-center'>
            <GaugeContainer
              className='w-52 aspect-square text-black'
              startAngle={-200}
              endAngle={200}
              value={60}
            >
              <GaugeReferenceArc/>
              <GaugeValueArc/>
            </GaugeContainer>
            </div>
          </div>
        </div>
      </div>
      <UpdateScore open={modal} handleOpen={toggleModal} />
    </div>
  )
}

export default Homepage