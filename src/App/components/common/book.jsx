import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { examples } from '../../api/examples';
import BookPage from '../ui/bookPage';

const Book = () => {
    return (
        <HTMLFlipBook width={700} height={800} disableFlipByClick={true}>
            <BookPage number={0} />
            {examples.map((item, index) => (
                <BookPage key={item.title} number={(index + 1) * 2} item={item} />
            ))}
        </HTMLFlipBook>
    );
};

export default Book;
