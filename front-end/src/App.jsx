import "./App.css"

function App() {
 
 

  return (
    <>
     <div className="flex justify-center flex-col items-center mt-20">

      <div className='flex justify-center rounded-md px-5 bg-blue-500 bg-opacity-40 text-white'>
        <h1 className='text-3xl font-bold'>RATE-IT</h1>
      </div>
      <div className="mt-5">
      <div  className="w-120 break-words md:w-full pl-10 pr-10">
        <h4 className="w-full text-center text-2xl text-white mb-4">
          welcome to "Rate-it" movie rating website
        </h4>
        <h6 className="underline text-red-500 text-2xl text-center mb-4"> Notice !</h6>
        
          <p className="text-white text-xl leading-relaxed indent-4">
            only after signing up ,you can have access to our services.Add reviews after you
            have signed in.our website is being monitored by admins.you will get banned
            if, any violation of community guidelines on your part.
          </p>
          <p className="text-white text-xl mt-5 indent-[250px]">  
            You can access premium features through your 'bio' if your reviews have reached 30 in number.
          </p>
        
      </div>
      </div>
    </div>
    </>
  );
}

export default App
