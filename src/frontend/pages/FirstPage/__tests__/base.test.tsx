import {describe, expect, it} from 'vitest'
import FirstPage from '../'
import {render, screen} from '@testing-library/react'
import {defaultState} from '@/backend/store/defaultState'
describe("First Page", ()=>{
    it("Should Render", async()=>{
        render(<FirstPage proceedButton={{
            
        }}
        state={defaultState}
        setState={state=>{
            
        }}
        />)

        expect(screen.findByText(/lets/i))
    })
})