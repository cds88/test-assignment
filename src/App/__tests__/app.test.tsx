import {describe, expect, it} from 'vitest'
import App from '../'
import {render, screen} from '@testing-library/react'
import * as React from 'react'




describe("App", ()=>{
    it("Should render" , async()=>{
        render(<App/>)
        
        
        expect(screen.findByText(/lets/i)).toBeDefined()
       
    }
    

    )
})