import React from 'react';

const DownloadFile = () => {
    const handleDownload = () => {
        const file = 'FF-5.-ReportSP_รอบ18เดือน-โครงการย่อยที่2.docx';
        window.location.href = `/${file}`;
    };

    return (
        <button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download File
        </button>
    );
};

export default DownloadFile;
