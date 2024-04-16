import React from 'react';

const DownloadFile = () => {
    const handleDownload = () => {
        const file = 'FF-5.-ReportSP_รอบ18เดือน-โครงการย่อยที่2.docx';
        window.location.href = `/${file}`;
    };

    return (
        <button onClick={handleDownload} className="bg-[#F3541C] hover:bg-white hover:text-[#F3541C] text-white font-bold py-2 px-4 rounded">
            Download File
        </button>
    );
};

export default DownloadFile;
