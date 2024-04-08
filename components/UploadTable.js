import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const UploadTable = ({ csvData }) => {
    return (
        <>
            <div className='w-full'>
                <h5 className="text-xl font-semibold my-5 mr-auto ms-4">Uploads</h5>
            </div>
            <div className='relative w-full max-h-[250px] justify-center items-center overflow-y-auto overflow-x-auto px-5 '>
                <div className="mx-5 bg-gray-100 shadow-md sm:rounded-lg">
                    <table className="w-auto text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 sticky top-0 bg-gray-100 border-none">
                            <tr>
                                {Object.keys(csvData[0]).map((key) => (
                                    <th key={key} className="p-4">{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100">
                            {csvData.map((row, index) => (
                                <tr key={index} className="bg-white rounded-lg my-3">
                                    {Object.values(row).map((value, index) => (
                                        <td key={index} className="px-4 py-3">{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UploadTable