import React, { useState } from 'react'
import { FaSlack } from "react-icons/fa"
import { IoMdListBox, IoMdSettings } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { GoBellFill } from "react-icons/go";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { PiSquaresFourFill } from "react-icons/pi";


import Sidebar, { SidebarItem } from './Sidebar'
import UploadTable from './UploadTable';

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [csvData, setCsvData] = useState([]);

    const handleChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleRemove = () => {
        setSelectedFile(null);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = async (event) => {
                const text = event.target.result;
                const data = [];
                const rows = text.split('\n');
                const headers = rows[0].split(',');

                for (let i = 1; i < rows.length; i++) {
                    const rowData = {};
                    const values = rows[i].split(',');

                    for (let j = 0; j < headers.length; j++) {
                        rowData[headers[j]] = values[j];
                    }

                    data.push(rowData);
                }

                setCsvData(data);
            };

            reader.readAsText(selectedFile);
        }
    };

    return (
        <>
            <Sidebar>
                <SidebarItem icon={<PiSquaresFourFill size={20} />} text="Dashboard" />
                <SidebarItem icon={<BiSolidBarChartSquare size={20} />} text="Upload" active />
                <SidebarItem icon={<FaSlack size={20} />} text="Invoice" />
                <SidebarItem icon={<IoMdListBox size={20} />} text="Schedule" />
                <SidebarItem icon={<SlCalender size={20} />} text="Calender" />
                <SidebarItem icon={<GoBellFill size={20} />} text="Notification" />
                <SidebarItem icon={<IoMdSettings size={20} />} text="Settings" />
            </Sidebar>
            <div>
                <h5 className="md:hidden text-xl font-semibold my-3 p-3 mr-auto ms-4 bg-[#F8FAFF]">Upload CSV</h5>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center flex-wrap md:w-[30%] bg-white shadow-sm rounded-lg p-3 mb-auto">
                    <div className="flex items-center justify-center">
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg cursor-pointer"
                        >
                            <div className="flex flex-col items-center justify-center p-10 w-full">
                                <svg
                                    className="w-10 h-10 mb-4"
                                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                    viewBox="0 0 48 48">
                                    <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path>
                                </svg>
                                {selectedFile ? (
                                    <div className='flex flex-col items-center justify-center'>
                                        <p className="mb-2 text-center text-gray-500">{selectedFile.name}</p>
                                        <a href='#' className='text-center text-red-700' onClick={handleRemove}>remove</a>
                                    </div>

                                ) : (
                                    <p className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                                        Upload your Excel sheet here
                                    </p>
                                )}

                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleChange} />
                        </label>
                    </div>
                    <button className='inline-block px-6 py-2 my-3 rounded-lg text-white bg-[#605BFF] hover:bg-blue-700 cursor-pointer'
                        onClick={handleUpload}>
                        Upload
                    </button>
                </div>

                {csvData.length > 0 && (
                    <UploadTable csvData={csvData} />

                )}
            </div>
        </>
    )
}

export default Home