import React, { useState } from 'react' 
import '../frontend/styles/App.css' 
 
import Paginator from '../frontend/components/Paginator' 
import {defaultState} from '../backend/store/defaultState'
import {useProduce} from '../backend/hooks/useProduce'

  /**
   *  App represents a small part of some Lego application
   *  First and second page are basically part of the same form
   *  The application it self is a presentation so 
   *  there was no need for a router to be implemented
   *  @type {React.FC}
   *  @returns {React.ReactElement}
   */
  
function App() {

  const [state, setState] = useProduce<typeof defaultState>(defaultState)

  const pageProps = {
    1: {
      proceedButton: {
        onClick:()=>{
          setState(state=>({
            ...state,
            selectedPage: 2
          }))
        }
      }
    },
    2:{
      proceedButton:{
        onClick:()=>{
          setState(state=>({
            ...state,
            selectedPage: 3
          }))
        }
      }
    },
    3:{
      formInput : {
        onSubmit:e=>{
          alert("e")
        }
      }
    }
}
  
  return (
    <div  className="
    bg-primary-main 
   h-screen flex w-screen " 
>
   
      <Paginator
        state={state}
        setState={setState}
        pageProps={pageProps[state.selectedPage]}
        
      />
    </div>
  )
}

export default App
