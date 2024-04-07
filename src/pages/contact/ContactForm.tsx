export default function ContactForm() {
  return (
    <form className='flex flex-col gap-4'>
      <input
        type='text'
        name='fullname'
        className='w-full border border-black bg-white p-2.5 px-3'
        placeholder='Enter your name'
      />
      <input
        type='email'
        name='email'
        className='w-full border border-black bg-white p-2.5 px-3'
        placeholder='Enter your email'
      />
      <textarea
        name='textarea'
        className='w-full border border-black bg-white p-2.5 px-3'
        rows={4}
        placeholder='Enter your tiny message'
      />
      <div className='btn-wrapper group relative w-full'>
        <button
          id='submit'
          className='relative z-10 w-full border bg-text-primary py-2 font-semibold text-white'
        >
          Send
        </button>
        <span className='btn-ouline absolute left-[3px] top-[3px] z-0 h-full w-full translate-x-[3px] translate-y-[3px] border border-black bg-white transition-all group-hover:translate-x-0 group-hover:translate-y-0'></span>
      </div>
      {/* <button className=''>Send</button> */}
    </form>
  )
}
