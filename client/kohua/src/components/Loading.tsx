export default function Loading() {
  return (
    <div className='flex pt-5 space-x-2 justify-center items-center w-full h-full'>
    <span className='sr-only'>Loading...</span>
     <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
   <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
   <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
</div>
  )
}