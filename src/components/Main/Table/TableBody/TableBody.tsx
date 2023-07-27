import React from 'react';
import s from './TableBody.module.css';
import { IPost } from '../../../../types/common';

interface ITableBody {
    postInfo: IPost[]
}
export const TableBody = ({postInfo}:ITableBody) => {
    // const {body,id,title} = postInfo;
    return (
        <tbody>
            {
                postInfo.map(({body,id,title}) => (
                    <tr className={s.cellsContainer}>
                        <td className={s.idCell}>
                            <div className={s.idCellWrapper}>
                                {id}
                            </div>
                        </td>
                        <td className={s.titleCell}>{title}</td>
                        <td className={s.bodyCell}>{body}</td>
                    </tr>
                ))
            }
        </tbody>
    );
};
