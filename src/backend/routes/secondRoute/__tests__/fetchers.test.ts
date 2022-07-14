import {describe, expect, it} from 'vitest'

import {render, screen} from '@testing-library/react'
import {getIndexes, getRandoms} from '../fetchers'


describe('First route fetching', ()=>{
    it("Should calculate 3 random indexes properly", async()=>{
        
        
        
        const result = getIndexes(Array.from({length:100}, (x,i) =>i))
        expect(result.length).toBe(3)

    })

})
