import React, { useState, useEffect } from 'react';
import MyComponent from './selecter';
import { Movie } from '../typings'


interface ImageGalleryProps {
  selectedChapter: string;
  images: string[][];
  onChapterChange: (chapter: string) => void;
  movies: Movie []
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ selectedChapter, onChapterChange , movies, images}) => {
  

  const [currentPage, setCurrentPage] = useState(0);
 


  // Use selectedChapter to determine the images to display
  const selectedImages = images[parseInt(selectedChapter) - 1] || [];

  useEffect(() => {
    // Reset page when selected chapter changes
    setCurrentPage(0);
}, [selectedChapter]);

useEffect(() => {
  // Set currentPage to match the index of selectedImages
  const index = images.findIndex((chapterImages) => chapterImages === selectedImages);
  if (index !== -1) {
    setCurrentPage(index);
  }
}, [selectedImages, images]);


  const totalPages = images.length;
  const imagesPerPage = images[currentPage]?.length || 0;
  const startIndex = currentPage;

  const visibleImages = selectedImages.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Image ${startIndex * imagesPerPage + index + 1}`}
      className="max-w-full max-h-full p-9 mb-4"
      />
  
  ));

  {/*const nextImage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    const nextChapter = (parseInt(selectedChapter) + 1).toString();
    onChapterChange(nextChapter); // Increment the selected chapter 
}; */}

const nextImage = () => {
  const isLastChapter = parseInt(selectedChapter) === images.length;
  if (isLastChapter) {
    setCurrentPage(0);
    onChapterChange('1');
  } else {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    const nextChapter = (parseInt(selectedChapter) + 1).toString();
    onChapterChange(nextChapter);
  }
};


  const previousImage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Buttons... */}
      <div className="flex mb-4 mt-6">
        <button
          onClick={previousImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
          Previous
        </button>
        <button
          onClick={nextImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
      <p className="text-xl font-semibold mb-2">
        Chapter: {currentPage + 1} {/* Display the selected chapter */}
      </p>
      {/*<h1>{movies.poster_path}</h1>*/}
      {visibleImages}
      
      <p className="text-xl font-semibold mb-2">
        Chapter: {currentPage + 1} {/* Display the selected chapter */}
      </p>
      {/* Buttons... */}
      <div className="flex mb-4 mt-6">
        <button
          onClick={previousImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
          Previous
        </button>
        <button
          onClick={nextImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
