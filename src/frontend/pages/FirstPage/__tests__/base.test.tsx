import {describe, expect, it} from 'vitest'
import FirstPage from '../'
import {render, screen} from '@testing-library/react'

describe("First Page", ()=>{
    it("Should Render", async()=>{
        render(<FirstPage proceedButton={{
            
        }}/>)

        expect(screen.findByText(/lets/i))
    })
})