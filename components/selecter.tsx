import React, { useState } from 'react';

interface MyComponentProps {
  onChapterChange: (chapter: string) => void;
  images: string[][]; // Add this line to include the images prop
}

const MyComponent: React.FC<MyComponentProps> = ({ onChapterChange, images}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChapterChange(event.target.value);
  };

  return (
    <div className="absolute ml-60 left-0 px-10 py-11 m-8 flex flex-col items-center">
      <select value={selectedValue} onChange={handleSelectChange} className="border p-2 rounded">
        <option value="">Select a chapter</option>
        {/* You can dynamically generate options based on the number of arrays in images */}
        {images.map((_, index) => (
          <option key={index} value={(index + 1).toString()}>
            Chapter {index + 1}
          </option>
        ))}
      </select>
      {/*<p className="mt-2">Chapter: {selectedValue}</p>*/}
    </div>
  );
};

export default MyComponent;





