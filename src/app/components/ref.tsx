import React from 'react';

const Ref = () => {
    return (
        <article className="text-pretty flex flex-col">
            <h1 className="text-[#5C3D20] font-bold text-lg py-2 pt-4">อ้างอิง</h1>
            <a className='underline break-words text-sm hover:text-blue-900'
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9281460/"
                target="_blank"
                rel="noopener noreferrer">
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9281460/
            </a>
            <a className='underline break-words text-sm hover:text-blue-900'
                href="https://www.researchgate.net/publication/366191703_DEPRESSION_DETECTION_USING_FACE_TEXT_AND_AUDIO_USING_MACHINE_LEARNING"
                target="_blank"
                rel="noopener noreferrer">
                https://www.researchgate.net/publication/366191703_DEPRESSION_DETECTION_USING_FACE_TEXT_AND_AUDIO_USING_MACHINE_LEARNING
            </a>
        </article>
    );
};

export default Ref;
