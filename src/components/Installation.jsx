import React, { useEffect, useState } from 'react';
import download from '../assets/download.png'
import star from '../assets/star.png'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';

const convertDownloadToNumber = (downloadStr)=>{
    if(!downloadStr) {
        return 0;
    }
    const convertStr = String(downloadStr).toUpperCase().trim()
    if(convertStr .endsWith('K')){
        return parseFloat(convertStr)*1000;
    } else if(convertStr .endsWith('M')){
        return parseFloat(convertStr)*1000000;
    }else{
        return parseFloat(convertStr)
    }
}
const Installation = () => {
    const [sortOrder,SetSortOrder] = useState('none')
    const [install,setInstall] = useState([])
    useEffect(()=>{
        const savedAppList = JSON.parse(localStorage.getItem('appList'))
        if(savedAppList){
        setInstall(savedAppList)
        }
    },[])

    const sortedItem = () =>{
        if(sortOrder === 'asc'){
            return [...install].sort((a,b)=> convertDownloadToNumber(a.downloads) - convertDownloadToNumber(b.downloads));
        }else if(sortOrder === 'desc'){
            return [...install].sort((a,b)=>convertDownloadToNumber(b.downloads) - convertDownloadToNumber(a.downloads));
        }else{
            return install;
        }
    }

    const handleUninstallBtn = (id)=>{
         const storedAppList = JSON.parse(localStorage.getItem('appList'))
         const appToRemove = storedAppList.find(a => a.id === id);
         let updatedApps = storedAppList.filter(a=>a.id !== id);
       
        localStorage.setItem('appList',JSON.stringify(updatedApps))
        setInstall(updatedApps)
        if(appToRemove){
            toast.success(`${appToRemove.title} Uninstalled successfully!`);
        }
    }
    return (
        <div className='space-y-6'>
        <div className='flex justify-between items-center'>
             <h1 className='font-bold text-xl'> ({install.length}) App Found</h1>
         <label>
            <select
            className='select select-bordered'
            value = {sortOrder}
            onChange={e=>SetSortOrder(e.target.value)}>
                <option value="none">Sort by downloads</option>
                <option value="asc"> Low to High</option>
               <option value="desc"> High to Low</option>
            </select>
         </label>
        </div>
        <div className='space-y-3'>
            {sortedItem().map(app=>(
                <div key = {app.id} className='flex justify-between bg-white p-4 rounded-xl'>
                    <div className='flex gap-3'>
                        <div>
                            <img className='w-12 rounded-xl' src={app.image} alt="" />
                        </div>
                        <div>
                            <h3 className='font-semibold text-xl'>{app.title}</h3>
                            <div className='flex gap-3'>
                                 <span className='flex items-center gap-1 text-[#00D390]'><img className='w-3 h-4' src={download} alt="" />{app.downloads}</span>
                             <span className='flex items-center gap-1 text-[#FF8811]'><img className='w-3 h-4' src={star} alt="" />{app.ratingAvg}</span>
                             <span className='flex items-center gap-1 text-[#627382]'>{app.size} MB</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>handleUninstallBtn(app.id)} className='btn bg-[#00D390] text-white hover:scale-105'>Uninstall</button>
                    </div>
                </div>
            ))}
        </div>
        <ToastContainer position="top-center" autoClose={2000}></ToastContainer> 
        </div>
    );
};

export default Installation;