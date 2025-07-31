"use client"

import AddButton from '@/components/button/add-button'
import { Plus } from 'lucide-react'
import React from 'react'

function CategoryPage() {
  return (
    <div>
      <AddButton  icon={<Plus className='w-4 h-4' />} label='Add Category' onClick={() => {}}/>
    </div>
  )
}

export default CategoryPage
