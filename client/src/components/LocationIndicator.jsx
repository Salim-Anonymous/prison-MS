import React, { useEffect, useState } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const PathStrip = (props) => {
    const { path } = props;

    return (
        <div className="invisible h-0 bg-blue-900 lg:visible lg:h-8">
            <span key='-1' className="ml-4 text-3xl font-medium text-white lg:text-lg">{"/"}</span>
            {path.map((item, index) => (
                <span key={index} className="ml-4 text-3xl font-medium text-white lg:text-sm">{item + " > "}</span>
            ))}
        </div>
    );
}

export default PathStrip;