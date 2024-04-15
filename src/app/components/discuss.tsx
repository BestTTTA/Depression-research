import React from 'react';

interface DiscussProps {
    text: string;
    topic: string;
}

const Discuss: React.FC<DiscussProps> = ({ text, topic }) => {
    return (
        <div className="w-full">
            <article className="text-pretty">
                <h1 className="text-[#5C3D20] font-bold text-lg py-2 pt-4 ">{topic}</h1>
                <p className='border-b-2 text-sm'>{text}</p>
            </article>
        </div>
    );
};

export default Discuss;
