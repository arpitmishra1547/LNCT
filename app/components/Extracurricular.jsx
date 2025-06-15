"use client"
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// Import local JPG images
const images = [
  '/photos/DSC_1214.JPG',
  '/photos/DSC_1213.JPG',
  '/photos/DSC_1201.JPG',
  '/photos/DSC_1198.JPG',
  '/photos/DSC_0961.JPG',
  '/photos/DSC_0951.JPG',
  '/photos/DSC_0949.JPG',
  '/photos/DSC_0928.JPG',
  '/photos/DSC_0922.JPG',
  '/photos/DSC_0847.JPG',
  '/photos/DSC_0845.JPG',
  '/photos/DSC_0840.JPG',
]

function App() {
  const [collageImages, setCollageImages] = useState([])
  const [backgroundRects, setBackgroundRects] = useState([])
  const [geometricElements, setGeometricElements] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // CSS Styles
  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      background: `
        linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%),
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
      `,
      position: 'relative',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    gridOverlay: {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      animation: 'gridMove 20s linear infinite',
      zIndex: 1,
    },
    title: {
      position: 'absolute',
      top: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#00ffff',
      textShadow: `
        0 0 10px #00ffff,
        0 0 20px #00ffff,
        0 0 30px #00ffff
      `,
      zIndex: 1000,
      fontFamily: 'Orbitron, Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      letterSpacing: '2px',
      background: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(30px)',
      WebkitBackdropFilter: 'blur(30px)',
      padding: '15px 25px',
      borderRadius: '8px',
      border: '2px solid rgba(0, 255, 255, 0.3)',
      boxShadow: `
        0 8px 32px rgba(0, 255, 255, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `,
    },
    collageImage: {
      borderRadius: '12px',
      boxShadow: `
        0 8px 32px rgba(0, 255, 255, 0.2),
        0 4px 16px rgba(255, 119, 198, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2)
      `,
      border: '2px solid rgba(0, 255, 255, 0.3)',
      background: 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      zIndex: 10,
      objectFit: 'cover',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      perspective: '1000px',
      animation: 'imageGlow 4s ease-in-out infinite alternate, fadeIn 0.8s ease-out',
      transition: 'transform 0.3s ease-in-out',
    },
    backgroundRect: {
      position: 'absolute',
      background: 'rgba(0, 255, 255, 0.08)',
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      border: '1px solid rgba(0, 255, 255, 0.2)',
      borderRadius: '20px',
      boxShadow: `
        0 8px 32px rgba(0, 255, 255, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `,
      zIndex: 2,
      willChange: 'transform',
    },
  }

  // Initialize background rectangles
  useEffect(() => {
    const rects = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      width: Math.random() * 300 + 200,
      height: Math.random() * 200 + 150,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.08 + 0.02,
    }))
    setBackgroundRects(rects)
  }, [])

  // Create layout with fewer, larger images filling entire page
  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const createCollageLayout = () => {
        const screenWidth = window.innerWidth
        const screenHeight = window.innerHeight
        const imageSize = 200 // Larger images for better visibility
        const spacing = 20 // Moderate spacing
        const titleSafeZoneHeight = 150; // Height to keep clear for the title (adjust as needed)

        const collageImages = []
        let imageIndex = 0
        
        // Calculate grid dimensions, starting Y below the title safe zone
        const startY = titleSafeZoneHeight + spacing;
        const availableHeightForImages = screenHeight - startY - spacing;

        const cols = Math.floor(screenWidth / (imageSize + spacing))
        const rows = Math.floor(availableHeightForImages / (imageSize + spacing))
        
        // Place images in a grid
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const x = col * (imageSize + spacing) + spacing
            const y = row * (imageSize + spacing) + startY
            
            // Skip if outside screen bounds
            if (x + imageSize > screenWidth - spacing || y + imageSize > screenHeight - spacing) {
              continue
            }
            
            const imageUrl = images[imageIndex % images.length]
            imageIndex++
            
            // Add slight rotation for artistic effect
            const rotation = (Math.random() - 0.5) * 8 // -4 to +4 degrees
            
            collageImages.push({
              id: collageImages.length,
              url: imageUrl,
              x: x,
              y: y,
              width: imageSize,
              height: imageSize,
              rotation: rotation,
              originalIndex: collageImages.length % images.length,
              scale: 1,
            })
          }
        }
        
        return collageImages
      }
      
      const layout = createCollageLayout()
      console.log('Created layout with', layout.length, 'images')
      setCollageImages(layout)
      setIsLoading(false)
    } catch (err) {
      console.error('Error creating layout:', err)
      setError(err.message)
      setIsLoading(false)
    }
  }, [])

  // Add CSS animations
  useEffect(() => {
    if (document.getElementById('gallery-styles')) return
    
    const style = document.createElement('style')
    style.id = 'gallery-styles'
    style.textContent = `
      @keyframes gridMove {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }
      
      @keyframes titleGlow {
        0% {
          text-shadow: 
            0 0 10px #00ffff,
            0 0 20px #00ffff,
            0 0 30px #00ffff;
          border-color: rgba(0, 255, 255, 0.3);
        }
        100% {
          text-shadow: 
            0 0 15px #00ffff,
            0 0 25px #00ffff,
            0 0 35px #00ffff,
            0 0 45px #00ffff;
          border-color: rgba(0, 255, 255, 0.6);
        }
      }
      
      @keyframes imageGlow {
        0% {
          box-shadow: 
            0 8px 32px rgba(0, 255, 255, 0.2),
            0 4px 16px rgba(255, 119, 198, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border-color: rgba(0, 255, 255, 0.3);
        }
        100% {
          box-shadow: 
            0 12px 40px rgba(0, 255, 255, 0.4),
            0 6px 20px rgba(255, 119, 198, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          border-color: rgba(0, 255, 255, 0.6);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.9) rotate(-2deg);
        }
        to {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      const existingStyle = document.getElementById('gallery-styles')
      if (existingStyle) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [])

  if (isLoading) {
    return (
      <div style={styles.container}>
        <div className="title" style={styles.title}>Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div className="title" style={styles.title}>Error: {error}</div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {/* Cyberpunk grid overlay */}
      <div style={styles.gridOverlay}></div>
      
      {/* Background rectangles with glassmorphism */}
      {backgroundRects.map(rect => (
        <div
          key={rect.id}
          className="background-rect"
          style={{
            ...styles.backgroundRect,
            left: `${rect.x}px`,
            top: `${rect.y}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            transform: `rotate(${rect.rotation}deg)`,
            opacity: rect.opacity,
          }}
        />
      ))}
      
      <div className="title" style={styles.title}>Experience the Extraordinary, Embrace Life at LNCT Group of Colleges!</div>
      
      {collageImages.map(img => (
        <div
          key={img.id}
          style={{
            position: 'absolute',
            left: `${img.x}px`,
            top: `${img.y}px`,
            width: `${img.width}px`,
            height: `${img.height}px`,
            transform: `rotate(${img.rotation}deg)`,
          }}
        >
          <Image
            src={img.url}
            alt={`Life at LNCT photo ${img.originalIndex + 1}`}
            fill
            className="collage-image"
            style={{
              ...styles.collageImage,
              objectFit: 'cover',
            }}
            priority={img.originalIndex < 4} // Prioritize loading first 4 images
          />
        </div>
      ))}
    </div>
  )
}

export default App 