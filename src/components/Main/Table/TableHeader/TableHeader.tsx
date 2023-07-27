import React from 'react';
import s from './TableHeader.module.css';
import { ICellInfo } from '../../../../types/common';
import arrow from '../../../../assests/arrow.svg';

interface ITableHeader {
    headerCell: ICellInfo[];
}

export const TableHeader = ({headerCell}:ITableHeader) => {
    return (
        <thead className={s.tableHeader}>
            <tr>
                {
                    headerCell.map((item ,index) => (
                        <th onClick={() => item.onClick(item.parameter)} key={index}>
                            <div className={s.headerCellContainer}>
                                <div>{item.text}</div>
                                <img className={s.arrowImg} src={arrow} alt="arrow" width="11px" height="6px"/>
                            </div>
                        </th>
                    ))
                }
            </tr>
        </thead>
    );
};
