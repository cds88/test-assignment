import React from 'react'
import {produce} from 'immer'

type ReturnObject = {}
type ReturnFunction = (state: Object)=> void

type ReturnProduce = ReturnObject | ReturnFunction

export type UseProduceType<State> = [state:State, setState:ReturnFunction, prevState: State | {}, resetState: ()=>void]
/**
 * Hook designed to combine Immer with useState. 
 * 
 * @param defaultState 
 * @returns {UseProduceType}
 */
export const useProduce  = <State, >(defaultState :State) : UseProduceType<State>=>   {
  
    const [state, setState] = React.useState<State >({...defaultState})

    const prevState = React.useRef(null)

    
    React.useEffect(()=>{
        prevState.current = state
    },[state])

    const resetState = ()=>{
        setState({...defaultState})
    }


    return [state, (arg : ReturnProduce )=>{
        
        if(typeof arg==='function')
        {
            setState(produce(arg as ReturnFunction))  
        }
        else{
            setState(produce(state=>{
                return {
                    ...state,
                    ...arg as Object
                }
            }))
        } }, prevState , resetState] }


