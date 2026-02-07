"use client"
import Modal from '@/components/Modal'
import React, { useEffect, useState } from 'react'
import { read, utils } from 'xlsx';

type President = {
    'id': number;
    'companyName': string;
    'taxCode': string;
    'bankBranch': string;
    'bankAccount': string;
    'note': string;
}

function ImportSheetPage() {

    const [isOpen, setIsOpen] = useState(false);
    const [pres, setPres] = useState<President[]>([]);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        console.log('file:', file.name);
        const reader = new FileReader();
        reader.onload = (evt) => {
            const data = evt.target?.result;
            if (!data) return;
            console.log('data:', data);

            // 读取Excel文件
            const wb = read(data, { type: 'buffer' });
            /* generate array of presidents from the first worksheet */
            const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
            // 将工作表数据转换为JSON对象数组
            // defval: 空单元格默认值为空字符串
            // header: [] 自定义表头
            const presidents: President[] = utils.sheet_to_json<President>(ws, {
                defval: "",
                //输出格式化表头
                header: [
                    "id",
                    "companyName",
                    "taxCode",
                    "bankBranch",
                    "bankAccount",
                    "note"
                ],
                //https://docs.sheetjs.com/docs/api/utilities/array/
                //Use worksheet range but set starting row to the value
                range: 1 //跳过第一行标题
            });
            console.log('presidents:', presidents);
            setPres(presidents); // update state
        }
        //读取文件内容
        reader.readAsArrayBuffer(file);
    };

    const onSaveData = () => {
        console.log('导入数据:', pres);

        //关闭模态框，清空预览数据
        setIsOpen(false);
        setPres([]);
    }

    return (
        <div className="p-4 w-full h-full space-y-4">
            <h2 className="text-2xl font-bold">Import Sheet</h2>
            <div>
                <button className="btn btn-primary mt-4" onClick={() => setIsOpen(true)}>导入Excel文件</button>
            </div>
            <Modal
                isOpen={isOpen}
                onSaveData={onSaveData}
                onClose={() => {
                    setIsOpen(false)
                    setPres([])
                }}
            >
                <div>
                    <label className="block mb-2 font-medium">选择Excel文件进行导入:</label>
                    <input type="file" onChange={onFileChange} accept=".xlsx, .xls" className="border p-2" />
                </div>
                <div className="mt-4 max-h-96">
                    <h3 className="text-xl font-semibold mb-4">导入数据预览</h3>
                    <table className="table-auto w-full h-dvh border-collapse border border-gray-300">
                        <thead>
                            <tr>{Object.keys(pres[0] || {}).map(key => <th key={key} className="border border-gray-300 px-4 py-2">{key}</th>)}</tr>
                        </thead>
                        <tbody>
                            {pres.map((p, i) => (
                                <tr key={i}>
                                    {Object.values(p).map((v, j) => <td key={j} className="border border-gray-300 px-4 py-2">{v}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Modal >
        </div >
    )
}

export default ImportSheetPage