'use client';

const DownloadButton = ({ children }: any) => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/pdf/resume-mhmmdazmi.pdf'; // Path to the PDF file
    downloadLink.download = 'resume-mhmmdazmi.pdf'; // Optional: Specify the filename
    downloadLink.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="text-red-600 w-fit md:px-2 py-1 font-bold flex items-center gap-x-2 mt-5 cursor-pointer hover:text-red-700 duration-300 ease-in-out hover:border-b-2 hover:border-r-2 border-red-700 md:bg-transparent md:text-red-900"
    >
      {children}
    </button>
  );
};

export default DownloadButton;
