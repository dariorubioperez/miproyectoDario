import { describe, it, expect } from 'vitest'
import { sum } from './sum'
describe('sum', () => {
    it('suma -2 y 5 = 3', () => {
        expect(sum(-2, 5)).toBe(5)
    })
}) //hecho por Darío