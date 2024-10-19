import React, { useState } from 'react';
import styles from './listing.module.css';
import University from './university';
import Pagination from './pagination'; // Import the Pagination component

const universitiesData = [
    { name: "MIT", place: 1, score: 100 },
    { name: "Stanford", place: 2, score: 98 },
    { name: "Harvard", place: 3, score: 97 },
    { name: "Caltech", place: 4, score: 96 },
    { name: "Oxford", place: 5, score: 95 },
    { name: "Cambridge", place: 6, score: 94 },
    { name: "Imperial College", place: 7, score: 93 },
    { name: "ETH Zurich", place: 8, score: 92 },
    { name: "UCL", place: 9, score: 91 },
    { name: "University of Chicago", place: 10, score: 90 }
];

function ListingBlock() {
    const [currentPage, setCurrentPage] = useState(1);
    const universitiesPerPage = 5;  // Number of universities to display per page

    // Calculate the range of universities for the current page
    const indexOfLastUniversity = currentPage * universitiesPerPage;
    const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
    const currentUniversities = universitiesData.slice(indexOfFirstUniversity, indexOfLastUniversity);

    return (
        <div className={styles.listing}>
            <div className={styles.titleBlock}>
                <p>Rank</p>
                <p>University</p>
                <p>Overall score</p>
            </div>

            {/* Render the current list of universities */}
            {currentUniversities.map((university, index) => (
                <University
                    key={index}
                    name={university.name}
                    place={university.place}
                    score={university.score}
                />
            ))}

            {/* Pagination Component */}
            <Pagination
                totalItems={universitiesData.length}
                itemsPerPage={universitiesPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default ListingBlock;
