

function App() {
 
 

  return (
    <>
     <div className="flex justify-center flex-col items-center">

      <div className='flex w-full justify-center bg-blue-500 bg-opacity-70 text-white p-4 mb-4'>
        <h1 className='text-3xl font-bold'>RATE-IT</h1>
      </div>
      <div className="max-w-[600px] mt-20">
      <div  className="w-64 break-words md:w-full">
        <p className="w-full text-center text-white mb-4">
          welcome to "Rate-it" movie rating website
        </p>
        <h6 className="underline text-red-500 text-center mb-4"> Notice !</h6>
        <p className="text-white">
          only after signing up ,you can have access to our service.you can give your reviews without
          any bias.our website is being monitored by the admins.you will get banned
          if, any violation of community guidelines on your part.
              
                 You can access premium features through your 'bio' if your reviews have reached 30 in number.
            
         </p>
      </div>
      </div>
    </div>
    </>
  );
}

export default App
