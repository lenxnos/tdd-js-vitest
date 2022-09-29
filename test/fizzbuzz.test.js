import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

/**
 * Escribir una función que al pasar un número:
 * - Muestra "fizz" si es multiplo de 3
 * - Muestra "fuzz" si es multiplo de 5
 * - Muestra "fizzfuzz" si es multiplo de 15
 * - Muestra el número si no múltiplo de ninguno de los anteriores
 */

describe('fizzbuzz', () => {
  it('should throw a specific error message if not number is provider as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provider muest be a number')
  })

  it('should throw a specific error message not number is provider', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provider muest be a number')
  })

  it('should return 1 if number provider is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provider is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return fizz if number provider is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return fizz if number provider is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('should return buzz if number provider is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return buzz if number provider is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return fizzbuzz if number provider is multiple of 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
