const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex justify-center items-center cursor-default background-DRX-fixed">
      {children}
    </div>
  );
};

export default AuthLayout;
