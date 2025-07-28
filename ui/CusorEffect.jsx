'use client'
import { useEffect } from 'react'

export default function CometTrail() {
  useEffect(() => {
    const createParticle = (x, y) => {
      const particle = document.createElement('div')
      particle.className = 'comet-particle'

      const r = Math.floor(200 + Math.random() * 55)
      const g = Math.floor(100 + Math.random() * 155)
      const b = Math.floor(150 + Math.random() * 105)

      particle.style.background = `radial-gradient(circle, rgba(${r},${g},${b},1), transparent)`
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`
      document.body.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 800)
    }

    const handleMouseMove = (e) => {
      for (let i = 0; i < 2; i++) {
        const offsetX = Math.random() * 20 - 10
        const offsetY = Math.random() * 20 - 10
        createParticle(e.clientX + offsetX, e.clientY + offsetY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return null
}
