import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const UploadTable = ({ csvData }) => {
    return (
        <>
            <div className='w-full'>
                <h5 className="text-xl font-semibold my-5 mr-auto ms-4">Uploads</h5>
            </div>
            <div className="relative max-h-[250px] overflow-y-auto overflow-x-auto px-5 m-3 bg-gray-100 shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right m-3 text-gray-500">
                    <thead className="text-xs text-gray-700 sticky top-0 bg-gray-100 border-none">
                        {Object.keys(csvData[0]).map((key) => (
                            <th key={uuidv4()} className="px-4 py-2">{key}</th>
                        ))}
                    </thead>
                    <tbody className="">
                        {csvData.map((row) => (
                            <tr key={uuidv4()} className='bg-white rounded-lg mb-4'>
                                {Object.values(row).map((value) => (
                                    <td key={uuidv4()} className="px-4 py-3">{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UploadTable