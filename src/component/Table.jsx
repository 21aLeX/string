import React from 'react'
import styles from './styles/Table.module.css'

const Tables = ({ str }) => {
    return (
        <div className={styles.table}>
            <table>
                <tbody>
                    <tr>
                        {str === '404'
                            ? <td>Записей нет!</td>
                            : <td>
                                {str.map((s, index) =>
                                    <div key={index}>{s}</div>
                                )} </td>
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Tables;