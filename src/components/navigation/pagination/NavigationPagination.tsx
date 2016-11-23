import { Svg } from '../../svg/Svg';
import { NavigationPaginationSelect } from './NavigationPaginationSelect';
import * as React from 'react';
import * as _ from 'underscore';

export interface INavigationPaginationOwnProps extends React.ClassAttributes<NavigationPagination> {
  id?: string;
  totalPages: number;
  numberOfPagesToShow?: number;
  previousLabel?: string;
  nextLabel?: string;
  loadingIds?: string[];
}

export interface INavigationPaginationStateProps {
  currentPage?: number;
}

export interface INavigationPaginationDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  onPageClick?: (pageNb: number) => void;
}

export interface INavigationPaginationProps extends INavigationPaginationOwnProps,
  INavigationPaginationStateProps, INavigationPaginationDispatchProps { }

export const NUMBER_OF_PAGES_SHOWING: number = 7;
export const PREVIOUS_LABEL: string = 'Previous';
export const NEXT_LABEL: string = 'Next';

export class NavigationPagination extends React.Component<INavigationPaginationProps, any> {

  private handlePageClick = (pageNb: number) => {
    if (this.props.onPageClick && pageNb >= 0) {
      this.props.onPageClick(pageNb);
    }
  };

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  render() {
    let currentPage: number = this.props.currentPage || 0;
    let showXPages: number = Math.abs((this.props.numberOfPagesToShow || NUMBER_OF_PAGES_SHOWING) - 1);
    let previousLabel: string = this.props.previousLabel || PREVIOUS_LABEL;
    let nextLabel: string = this.props.nextLabel || NEXT_LABEL;
    let start: number = 0;
    let end: number = showXPages;
    let lastPage: number = this.props.totalPages - 1;
    let previousClasses: string = 'flat-select-option mod-link ' + (currentPage === 0 ? 'disabled' : 'selectable');
    let nextClasses: string = 'flat-select-option mod-link ' + (currentPage === lastPage ? 'disabled' : 'selectable');
    let pageSelects: JSX.Element[] = [];

    if (currentPage + showXPages / 2 > lastPage) {
      end = lastPage;
      start = Math.max(lastPage - showXPages, 0);
    } else {
      start = Math.max(Math.floor(currentPage - showXPages / 2), 0);
      end = Math.min(start + showXPages, lastPage);
    }

    _.each(_.range(start, end + 1), (p: number): void => {
      pageSelects.push(<NavigationPaginationSelect
        key={'page-' + p}
        onPageClick={this.handlePageClick}
        pageNb={p}
        selected={p === currentPage}
        />);
    });

    return (
      <div className='pagination'>
        <div className='flat-select'>
          <a className={previousClasses}
            data-page={currentPage - 1}
            onClick={() => this.handlePageClick(currentPage - 1)}>
            <Svg svgName='arrow-left-rounded' className='pagination-icon' svgClass='icon icon-small mod-lg' />
            {previousLabel}
          </a>
          {pageSelects}
          <a className={nextClasses}
            data-page={currentPage + 1}
            onClick={() => this.handlePageClick(currentPage + 1)}>
            {nextLabel}
            <Svg svgName='arrow-right-rounded' className='pagination-icon' svgClass='icon icon-small mod-lg' />
          </a>
        </div>
      </div>
    );
  }
}
