import React from 'react'
import BoardComp from './board-comp'
import TaskComp from './task-comp'
import ProgressComp from './progress-comp'

const ContainerComps = () => {
  return (
    <div className=' bottom-5 bg-trabsparent flex flex-col gap-y-5   h-max w-full '><BoardComp/> <ProgressComp/> <TaskComp/></div>
  )
}

export default ContainerComps