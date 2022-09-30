import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../firebaseConfig'
import { collection } from 'firebase/firestore';
import Link from 'next/link';
function NavBarMiddle() {
  const [counter, setCounter] = useState(0)
  const [continous, setContinous] = useState(0)
  const [value, loading, error] = useCollection(
    collection(db, 'destinations'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  function previousImg() { (counter != 0) ? setCounter(counter - 1) : setCounter(value.docs.length - 1) }
  function nextImg() { ((counter + 1) == value.docs.length) ? setCounter(0) : setCounter(counter + 1) }
  useEffect(()=>{
    setTimeout(() => {
      if (!loading) {nextImg()}
      setContinous(continous+1)
    }, 4000)

  },[continous])

  return (
    <div className=''>
      {(loading) ? <></> :
        <div>
          <img className='absolute left-0 top-0 w-full h-full' src={value.docs[counter].data().image} />
          <div className='absolute left-0 top-0 bg-slate-800/40 w-full h-full'>
            <div className='flex flex-row w-full h-full '>
              <div className='flex items-center w-1/4 h-full p-5 text-white' > <span className='hover:border-4 hover:border-slate-100 hover:rounded-full hover:p-3' onClick={previousImg}> <ArrowBackIosIcon fontSize='large' /></span></div>
              <div className='flex flex-col justify-center align-center items-center w-2/4 h-full'>
                <span className='text-white sm:text-[35px] md:text-[60px] text-center'>{value.docs[counter].data().terms[0].value}</span>
                <Link href={`hotels/${value.docs[counter].data().id}`}><span className='text-white border border-white p-4 hover:animate-pulse hover:bg-red-400/20 cursor-pointer'>Take me there <ArrowRightAltRoundedIcon /></span></Link>
              </div>
              <div className='flex flex-row-reverse items-center w-1/4 h-full p-5 text-white'> <span className='hover:border-4 hover:border-slate-100 hover:rounded-full hover:p-3' onClick={nextImg}> <ArrowForwardIosIcon fontSize='large' /></span></div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default NavBarMiddle