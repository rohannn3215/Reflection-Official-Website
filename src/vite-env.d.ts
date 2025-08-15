/// <reference types="vite/client" />
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.jpeg' {
  const src: string
  export default src
}
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.webp' {
  const src: string
  export default src
}
// Uppercase extensions (for case-sensitive environments like Vercel)
declare module '*.JPG' {
  const src: string
  export default src
}
declare module '*.JPEG' {
  const src: string
  export default src
}
declare module '*.PNG' {
  const src: string
  export default src
}
declare module '*.WEBP' {
  const src: string
  export default src
}
