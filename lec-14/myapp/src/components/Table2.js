import React, {useState, useEffect } from "react";

export default function TableEffect() {
  const [TableData, setTableData] = useState([]);
  
  const URL = "";

  useEffect(()=>{
    fetch(URL)
    .then((res)=>{
      return res.json()
    })
    .then(datas => {
    
      setTableData(datas);
    })
  },[])
  console.log(TableData);
  return (
    <div className="w-[95%] overflow-x-auto mx-auto my-10">
      <table className="table-auto m-auto w-full border-collapse text-roboto">
        <thead className="text-sm sm:text-xl">
          <tr>
            <th className="border">ID</th>
            <th className="border">Name</th>
            <th className="border">Email</th>
            <th className="border">City</th>
            <th className="border">Phone</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-xl overflow-hidden">
        {TableData.map((TableInfo,ind) => {
            return (
              <tr key={ind} className="hover:text-lg transition-all">
                <td className="border">#{TableInfo.id}</td>
                <td className="border">{TableInfo.name}</td>
                <td className="border">
                  <a href="mailto:jayan@gmail.com">{TableInfo.email}</a>
                </td>
                <td className="border">
                  {TableInfo.address.city}
                </td>
                <td className="border">
                  <a href="tel:7435963476">{TableInfo.phone}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
