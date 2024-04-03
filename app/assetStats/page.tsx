"use client"
import React, { useState } from 'react';
import LendorBorrowTable from '../components/table';


export default function LendBorrow() {
    const [selected, setSelected] = useState<string | null>('Lend');

    const handleOptionClick = (option: string) => {
        setSelected(option);
    };

    return (
      <main className="flex flex-grow min-h-screen flex-col justify-between ">
        <div className="items-start p-3">
            <span
                className={`p-3 mb-3 cursor-pointer ${selected === 'Lend' ? 'border border-blue-500 bg-blue-300 rounded-lg ' : ''}`}
                onClick={() => handleOptionClick('Lend')}
            >
                Lend
            </span>
            <span
                className={`p-3 mb-3 cursor-pointer ${selected === 'Borrow' ? 'border border-blue-500 bg-blue-300 rounded-lg' : ''}`}
                onClick={() => handleOptionClick('Borrow')}
            >
                Borrow
            </span>
            <div className="py-3">
            <LendorBorrowTable />
            </div>
        </div>
       
      </main>
    );
}
