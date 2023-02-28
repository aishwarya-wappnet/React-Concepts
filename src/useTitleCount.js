import { useEffect } from 'react';

const useTitleCount = (count) => {
    useEffect(() => {
        // console.log('Hello UseEffect');
        if(count > 0){
        document.title  = `Chats(${count})`;
        }
    }, [ count ]);
}

export default useTitleCount;   