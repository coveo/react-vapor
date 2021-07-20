import * as React from 'react';

import {useCustomLayoutEffect} from './utils/TableHooks';

interface TableRowHeaderProps {
    id?: string;
    isLoading?: boolean;
}

export const TableRowHeader: React.FC<TableRowHeaderProps> = ({id, isLoading, children}) => {
    const {style, tableHeaderRef} = useCustomLayoutEffect({id, isLoading});

    return (
        <th ref={tableHeaderRef} style={style}>
            {children}
        </th>
    );
};
