interface Props {
    title: string;
    children: React.ReactNode; // Add children to the Props interface
  }
  
  const PageWrapper = ({ title, children }: Props) => {
    return (
      <div>
        {/* Page Header */}
        <div className="mx-auto max-w-screen-xl px-4 py-4">
          <h1 className="text-xl lg:text-2xl font-extrabold text-gray-600">{title}</h1>
        </div>
        
        {/* Page Content */}
        <div className="mx-auto max-w-screen-xl px-4 py-6">{children}</div>
      </div>
    );
  };
  
  export default PageWrapper;
  