import React from 'react'
import { CreateRoomForm } from './create-room-form'

const CreateRoom = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8'>
        <h2 className='text-3xl pt-12 font-bold'>Create Room</h2>
        <div ><CreateRoomForm /></div>
    </div>
  )
}

export default CreateRoom