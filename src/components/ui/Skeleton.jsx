import React from 'react';

const Skeleton = ({ className = '', variant = 'rect' }) => {
    const baseStyles = 'animate-pulse bg-gray-200';

    const variants = {
        rect: 'rounded-lg',
        circle: 'rounded-full',
        text: 'rounded h-4 w-full',
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`} />
    );
};

export default Skeleton;
