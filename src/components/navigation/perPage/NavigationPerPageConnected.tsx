import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../../utils/ReduxUtils';
import {turnOnLoading} from '../../loading/LoadingActions';
import {changePage} from '../pagination/NavigationPaginationActions';
import {IPaginationState} from '../pagination/NavigationPaginationReducers';
import {
    INavigationPerPageDispatchProps,
    INavigationPerPageOwnProps,
    INavigationPerPageProps,
    INavigationPerPageStateProps,
    NavigationPerPage, PER_PAGE_NUMBERS,
} from './NavigationPerPage';
import {addPerPage, changePerPage, removePerPage} from './NavigationPerPageActions';
import {IPerPageState} from './NavigationPerPageReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: INavigationPerPageOwnProps): INavigationPerPageStateProps => {
    const item: IPerPageState = _.findWhere(state.perPageComposite, {id: ownProps.id});
    const pagination: IPaginationState = _.findWhere(state.paginationComposite, {id: 'pagination-' + ownProps.id});
    const firstPerPage: number = ownProps.perPageNumbers ? ownProps.perPageNumbers[0] : PER_PAGE_NUMBERS[0];

    return {
        currentPerPage: item ? item.perPage : firstPerPage,
        currentPage: pagination ? pagination.pageNb : 0,
    };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: INavigationPerPageOwnProps): INavigationPerPageDispatchProps => ({
        onRender: (perPageNb: number) => dispatch(addPerPage(ownProps.id, perPageNb)),
        onDestroy: () => dispatch(removePerPage(ownProps.id)),
        onPerPageClick: (perPageNb: number, oldPerPageNb: number, currentPage: number) => {
            dispatch(turnOnLoading(ownProps.loadingIds));
            dispatch(changePerPage(ownProps.id, perPageNb));
            dispatch(changePage(`pagination-${ownProps.id}`, Math.floor(currentPage * oldPerPageNb / perPageNb)));
        },
    });

export const NavigationPerPageConnected: React.ComponentClass<INavigationPerPageProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(NavigationPerPage);
