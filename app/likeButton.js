'use client';

import {useState} from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        const likesNext = likes + 1;
        setLikes(likesNext);
    }
    return <button onClick={handleClick}>Like? ({likes})</button>;
}
