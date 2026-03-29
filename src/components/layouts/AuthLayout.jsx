const AuthLayout = ({ bgImage, children }) => {
  return (
    <div
      className='min-h-screen w-full px-10 flex justify-center items-center bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-overlay'
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='bg-card flex flex-col justify-center items-center gap-5 md:gap-[37px] rounded-2xl p-6 md:p-10 max-w-[550px] w-full'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
