import React, { useEffect, useState } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const PathStrip = (props) => {
    const { path } = props;
    
    return (
        <div className="bg-blue-900">
        {path.map((item, index) => (
            <span key={index} className="ml-4 text-white text-xs font-medium">{item+" > "}</span>
        ))}
        </div>
    );
}

export default PathStrip;