/// <reference types="vite/client" />

// Type declarations for vite-imagetools
declare module '*?format=webp;png&quality=90' {
  const value: {
    img: { src: string; w: number; h: number }
    sources: {
      webp: string
      png: string
    }
  }
  export default value
}

declare module '*.png?format=webp;png&quality=90' {
  const value: {
    img: { src: string; w: number; h: number }
    sources: {
      webp: string
      png: string
    }
  }
  export default value
}

declare module '*?format=webp&quality=*' {
  const value: string
  export default value
}

declare module '*?w=*&format=webp' {
  const value: Array<{ src: string; w: number; h: number }>
  export default value
}

declare module '*?as=picture' {
  const value: {
    img: { src: string; w: number; h: number }
    sources: Record<string, string>
  }
  export default value
}
