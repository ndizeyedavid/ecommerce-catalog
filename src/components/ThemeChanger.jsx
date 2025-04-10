import { Moon, Sun } from 'lucide-react'
import React from 'react'

export default function ThemeChanger() {
     return (
          <label className="swap swap-rotate">

               <input type="checkbox" className="theme-controller" value="synthwave" />


               <Sun className='swap-off size-7' />


               <Moon className="swap-on size-7" />
          </label>
     )
}
