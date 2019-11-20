import {FunctionComponent} from 'react';
import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils/ReduxUtils';
import {Button, IButtonProps} from '../button/Button';
import {RefreshCallBackActions} from './RefeshCallbackActions';
import {IRefreshCallbackOwnProps, RefreshCallback} from './RefreshCallback';
import {RefreshStatus, RefreshStatusSelectors} from './RefreshCallbackReducer';

export interface IRefreshCallbackWithButtonProps
    extends IRefreshCallbackOwnProps,
        Partial<ReturnType<typeof mapStateToProps>>,
        Partial<ReturnType<typeof mapDispatchToProps>> {
    buttonContainerProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
    button: IButtonProps;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IRefreshCallbackWithButtonProps) => ({
    status: RefreshStatusSelectors.getRefreshStatus(state, {id: ownProps.id}),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IRefreshCallbackWithButtonProps) => ({
    start: () => dispatch(RefreshCallBackActions.start(ownProps.id)),
    stop: () => dispatch(RefreshCallBackActions.stop(ownProps.id)),
});

const buttonWithRefreshCallbackDisconnected: FunctionComponent<IRefreshCallbackWithButtonProps> = ({
    button,
    buttonContainerProps,
    callback,
    status,
    start,
    stop,
    ...rest
}) => (
    <>
        <div {...(buttonContainerProps || {})}>
            <Button
                {...button}
                onClick={() => {
                    stop();
                    callback?.(start);
                }}
                enabled={status !== RefreshStatus.stopped}
            />
        </div>
        <RefreshCallback {...rest} />
    </>
);

export const ButtonWithRefreshCallback = connect(
    mapStateToProps,
    mapDispatchToProps
)(buttonWithRefreshCallbackDisconnected);
