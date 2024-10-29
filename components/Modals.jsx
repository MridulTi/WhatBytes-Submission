"use client"
import { Button, Card, CardBody, CardFooter, Checkbox, Dialog, Input, Typography } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { MdError } from "react-icons/md";
import { PiNumberOneBold, PiNumberThreeBold, PiNumberTwo, PiNumberTwoBold } from 'react-icons/pi';

export function ThanksModals() {
  const router = useRouter();
  function handleClick() {
    router.push("/dash/order")
  }
  return (
    <div className="z-20 absolute top-0 left-0 bg-gray-800/80 w-screen h-screen flex flex-col justify-center">
      <div className='w-full grid place-items-center gap-20'>
        <img src='https://i.pinimg.com/originals/37/66/7a/37667aca24ab99deed207a25d5095ee4.gif' loading='lazy' className='w-1/2 rounded-3xl aspect[6/4]' />
        <Button onClick={handleClick} size="lg" className='text-xl' color='cyan'>View Your Orders!</Button>
      </div>
    </div>

  )
}

import { useState } from 'react';
import { useApp } from '@context/AppProviders';

export function UpdateScore({ open, handleOpen }) {
  const [rank, setRank] = useState('');
  const [percentile, setPercentile] = useState('');
  const [cs, setCS] = useState('');
  const {scores,setUpdateScore}=useApp();
  const [thisScore,setThisScore]=useState({Rank:'',Percentile:'',CS:''})
  const [errors, setErrors] = useState({ rank: '', percentile: '',CS:'' });

  const validateFields = (field, value) => {
    let newErrors = { ...errors };

    if (field === 'rank') {
      newErrors.rank = isNaN(value)? 'required | Rank should be a number':'';
    }

    if (field === 'percentile') {
      newErrors.percentile = value >= 10 && value <= 100 ? '' : 'required | Percentile should be between 10-100';
    }
    if (field === 'cs') {
      newErrors.CS = value >= 0 && value <= 15 ? '' : 'required | Current Score should be between 0-15';
    }


    setErrors(newErrors);
  };

  function handleSave(){
    console.log(thisScore)
    setUpdateScore(thisScore)
    handleOpen();
  }

  return (
    <Dialog
      size="sm"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none grid place-items-center"
    >
      <Card className="mx-auto w-full min-w-11/12">
        <CardBody>
          <div className="flex w-full justify-between mb-6">
            <Typography variant="h4" color="blue-gray" className="font-semibold">
              Update scores
            </Typography>
            <img src="https://cdn-icons-png.flaticon.com/256/5968/5968267.png" className="w-12 aspect-square" />
          </div>
          <div className="grid text-black text-md grid-cols-2 gap-x-12 gap-y-6 justify-between">
            <div className="flex gap-4 items-center">
              <PiNumberOneBold className="bg-blue-800 p-2 text-3xl text-white rounded-full font-bold aspect-square" />
              <h1>Update your <span className="font-semibold">Rank</span></h1>
            </div>
            <div>
              <input
                type="text"
                placeholder="Rank"
                className="w-full p-2 rounded-md border border-gray-400 outline-0"
                value={thisScore.Rank}
                onChange={(e) => {
                  setRank(e.target.value);
                  validateFields('rank', e.target.value);
                  setThisScore(prev=>({...prev,Rank:e.target.value}));
                }}
              />
              {errors.rank && <p className="text-red-500 text-sm">{errors.rank}</p>}
            </div>
            <div className="flex gap-4 items-center">
              <PiNumberTwoBold className="bg-blue-800 p-2 text-3xl text-white rounded-full font-bold aspect-square" />
              <h1>Update your <span className="font-semibold">Percentile</span></h1>
            </div>
            <div>
              <input
                type="number"
                placeholder="Percentile"
                className="w-full p-2 rounded-md border border-gray-400 outline-0"
                value={thisScore.Percentile}
                onChange={(e) => {
                  setPercentile(e.target.value);
                  validateFields('percentile', e.target.value);
                  setThisScore(prev=>({...prev,Percentile:e.target.value}));
                }}
              />
              {errors.percentile && <p className="text-red-500 text-sm">{errors.percentile}</p>}
            </div>
            <div className="flex gap-4 items-center">
              <PiNumberThreeBold className="bg-blue-800 p-2 text-3xl text-white rounded-full font-bold aspect-square" />
              <h1>Update your <span className="font-semibold">Current Score (out of 15)</span></h1>
            </div>
            <div>
            <input
              type="number"
              placeholder="Current Score"
              value={thisScore.CS}
              onChange={(e)=>{
                setCS(e.target.value);
                validateFields('cs', e.target.value);
                setThisScore(prev=>({...prev,CS:e.target.value}))
              }}
              className="w-full p-2 rounded-md border border-gray-400 outline-0"
            />
            {errors.CS && <p className="text-red-500 text-sm">{errors.CS}</p>}
            </div>
            
          </div>
        </CardBody>
        <CardFooter className="pt-0 flex gap-2 justify-end">
          <Button variant="outlined" className="border-blue-800 w-24 text-blue-800" onClick={handleOpen} fullWidth>
            Cancel
          </Button>
          <Button variant="filled" className="bg-blue-800 w-24 flex gap-2 items-center" onClick={handleSave} fullWidth>
            Save <FaArrowRight className="text-xl" />
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}



export const ErrorModal = ({ message, onClose }) => {
    const router=useRouter()
    const handleGoBack = () => {
        onClose();
        router.push("/")
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-8 lg:max-w-lg lg:mx-16">
        <h2 className="text-lg font-semibold mb-4 text-center">An Error Occurred</h2>
        <p className="mb-6 text-center flex gap-2 justify-center items-center italic w-full"><MdError className='text-3xl text-red-400'/>{message}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-2">
          <button
            onClick={handleGoBack}
            className="bg-gray-300 px-4 py-2 rounded-md w-full sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
