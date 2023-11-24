import React, { useState } from "react";
import Link from "next/link";

interface Chapter {
  name: string;
}

const chapters: Chapter[] = [
  { name: "satya" },
  { name: "sai" },
  { name: "chava" },
  // Add more chapters as needed
];

export function Chapter() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredChapters = chapters.filter((chapter) =>
    chapter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bixbox bxcl epcheck">
      <div className="releases">
        <h2>Chapter name</h2>
      </div>
      <div className="lastend">
        {/* Display only the first and last chapters */}
        <div className="inepcx">
          <Link href="#">
            <span>{/*chapters[0].name*/}First Chapter</span>
            <span className="epcur epcurfirst">{chapters[0].name}</span>
          </Link>
        </div>
        <div className="inepcx">
          <Link href="#">
            <span>{/*chapters[chapters.length - 1].name*/}Latest Chapter</span>
            <span className="epcur epcurlast">{chapters[chapters.length - 1].name}</span>
          </Link>
        </div>
      </div>
      <div className="search-chapter">
        <input
          id="searchchapter"
          type="text"
          placeholder="Search Chapter."
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="eplister" id="chapterlist">
        <ul className="clstyle">
          {filteredChapters.map((chapter, index) => (
            <li key={index} data-num={index + 1}>
              <div className="chbox">
                <div className="eph-num">
                  <Link href={`/Chapterpage/${index + 1}`}>
                    <span className="chapternum">{chapter.name}</span>
                    {/* Add more details about the chapter as needed */}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Chapter;
