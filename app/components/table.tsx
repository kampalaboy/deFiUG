"use client"
import React,{useState} from 'react';

const LendorBorrowTable: React.FC = () => {
    const TableProps = [
        {   id:1, Asset:'BTC', Price:'$64,899', APY:'3.83%', 
            LTV:'77%', Available:'3.25M', 
            TotalLends:'1.65M', TotalBorrows:'1.258M', 
            UtilityLent:'7.34%', UtilityBorrowed:'5.06%',  
            WalletBalance:'' },

        {   id:2, Asset:'ETH', Price:'$3,360', APY:'4.56%', 
            LTV:'45%', Available:'889k', 
            TotalLends:'432k', TotalBorrows:'234k',  
            UtilityLent:'11.3%', UtilityBorrowed:'10.1%',  
            WalletBalance:'' }
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return(
    <div className="items-center">
                    
        <table className="min-w-[1000px] divide-y divide-gray-200 border border-gray-300">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">APY</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LTV</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Lent</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Borrowed</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utility Lent</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utility Borrowed</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">Take Action</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {TableProps.map((prop) => (
                    <tr key={prop.id} className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{prop.Asset}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{prop.Price}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{prop.APY}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{prop.LTV}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{prop.Available}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{prop.TotalLends}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{prop.TotalBorrows}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{prop.UtilityLent}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{prop.UtilityBorrowed}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <button className='btn p-1 border border-green-400 rounded-lg' onClick={() => (document.getElementById('lendborrowmodal') as HTMLDialogElement||null).showModal()}>
                                Actions
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <dialog id="lendborrowmodal" className="modal rounded-xl h-[500px] w-[500px]">
          <div className="modal-box">
            <h3 className="font-bold text-lg ">Hello!</h3>
            <p className="py-4 h-[300px]">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <form method="dialog" onSubmit={closeModal}>
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
    
    </div>
    );
}
export default LendorBorrowTable;
