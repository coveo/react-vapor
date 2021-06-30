import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ConnectedProps, IDispatch, UrlUtils} from '../../utils';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Tooltip} from '../tooltip/Tooltip';
import {addTab, removeTab, selectTab} from './TabActions';
import {TabSelectors} from './TabSelectors';

export interface ITabOwnProps {
    groupId?: string;
    id?: string;
    title: string;
    disabled?: boolean;
    tooltip?: string;
    children?: React.ReactNode;
    url?: string;
}

const enhance = connect(
    createStructuredSelector({isActive: TabSelectors.getIsTabSelected}),
    (dispatch: IDispatch, ownProps: ITabOwnProps) => ({
        onRender: (): void => void dispatch(addTab(ownProps.id, ownProps.groupId)),
        onDestroy: (): void => void dispatch(removeTab(ownProps.id, ownProps.groupId)),
        onSelect: (e: React.MouseEvent): void => void dispatch(selectTab(ownProps.id, ownProps.groupId)),
    })
);

export interface ITabProps extends ITabOwnProps, Partial<ConnectedProps<typeof enhance>> {}
export const Tab: React.FunctionComponent<ITabProps> = ({
    onRender,
    onDestroy,
    disabled,
    isActive,
    onSelect,
    url,
    children,
    tooltip,
    title,
}) => {
    React.useEffect(() => {
        onRender?.();
        return onDestroy;
    }, []);

    const handleSelect = (e: React.MouseEvent) => {
        if (!disabled) {
            onSelect?.(e);
            if (url) {
                UrlUtils.redirectToUrl(url);
            }
        }
    };

    return (
        <div
            className={classNames('tab', {
                enabled: !disabled,
                disabled: disabled,
                active: isActive,
            })}
            onClick={handleSelect}
        >
            {children}
            <Tooltip title={tooltip} placement={TooltipPlacement.Top}>
                {title}
            </Tooltip>
        </div>
    );
};

export const TabConnected = enhance(Tab);
