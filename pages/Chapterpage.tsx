import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import MyComponent from '../components/selecter';
import ImageGallery from '../components/button';
import { Movie } from '../typings'
import { MoonIcon } from '@heroicons/react/24/outline';



interface Props {
  // When using firebase
  movies: Movie 
   
}


function ChapterPage({ movies }: Props)  {

  if (!movies || !movies.chapters) {
    // Handle the case where movies or movies.chapters is undefined
    return <p>Loading...</p>; // or display an error message
  }

  // Check if movies.chapters is an array of arrays of strings
  if (!Array.isArray(movies.chapters) || !movies.chapters.every(Array.isArray)) {
    // Handle the case where movies.chapters is not in the expected format
    return <p>Error: Invalid chapters format</p>; // or display an error message
  }

  
  const images: string [][]= movies.chapters

  const [selectedChapter, setSelectedChapter] = useState<string>('1');

  const handleChapterChange = (chapter: string) => {
    setSelectedChapter(chapter);
  };

  return (
    <div>
      {/*<div><p>satya</p></div>
      <div>desc</div>
      <div id='selecter' className='flex justify-center py-6'>
        <div><BasicButtons/></div>
        <MyComponent />
      </div>
      <div className='flex justify-center' id='story'>
        <Image src={`https://asuratoon.com/wp-content/uploads/2023/03/01-188.jpg`} alt='' width={800} height={600} />
      </div>
      <div id='selecterdown' className='flex justify-center p-8'>
        <MyComponent/>
  </div> */}
      <div className=''>
        <MyComponent onChapterChange={handleChapterChange} images={images} />
      </div>
     
      <div>
        <ImageGallery selectedChapter={selectedChapter} images={images} onChapterChange={handleChapterChange} movies={movies.chapters}/>
      </div>
      <div className=''>
        <MyComponent onChapterChange={handleChapterChange} images={images}/>
      </div>

    </div>
  );
};

export default ChapterPage;
