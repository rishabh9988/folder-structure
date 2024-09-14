import React from 'react'
import { ChildFolder } from '../child-folder/child-folder'

const ParentFolder = () => {
  return (
    <div>
     <h1>Parent Folder</h1> 
     <ChildFolder />
    </div>
  )
}

export default ParentFolder
