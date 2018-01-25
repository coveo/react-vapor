import * as React from 'react';
import * as classNames from 'classnames';
import * as $ from 'jquery';
import { LinkSvg } from '../svg/LinkSvg';
import { Svg } from '../svg/Svg';
import { ITooltipProps, Tooltip } from '../tooltip/Tooltip';
import { IClassName } from '../../utils/ClassNameUtils';
import { JSXRenderable } from '../../utils/JSXUtils';

export interface ICollapsibleContainerOwnProps {
  id: string;
  title: JSXRenderable;
  expandedOnMount?: boolean;
  informationUrl?: string;
  informationTooltip?: ITooltipProps;
  className?: IClassName;
  collapsibleHeaderClassName?: IClassName;
  collapsibleBodyClassName?: IClassName;
}

export interface ICollapsibleContainerStateProps {
  expanded?: boolean;
}

export interface ICollapsibleContainerDispatchProps {
  onMount?: () => void;
  onUnmount?: () => void;
  onToggleExpandedState?: (currentExpandedState: boolean) => void;
}

export interface ICollapsibleContainerProps extends
  ICollapsibleContainerOwnProps,
  ICollapsibleContainerStateProps,
  ICollapsibleContainerDispatchProps { }

export class CollapsibleContainer extends React.Component<ICollapsibleContainerProps> {
  private toggleCollapsibleBodyOnExpandedStateChange(nextProps: ICollapsibleContainerProps) {
    const collapsibleBodySelector = `#${this.props.id} .collapsible-body`;
    const animationOptions = { duration: 350 };

    if (this.props.expanded && !nextProps.expanded) {
      $(collapsibleBodySelector).slideUp(animationOptions);
    } else if (!this.props.expanded && nextProps.expanded) {
      $(collapsibleBodySelector).slideDown(animationOptions);
    }
  }

  private getCollapsibleHeaderClass(): string {
    return classNames(
      'collapsible-header btn',
      {
        active: this.props.expanded,
      },
      this.props.collapsibleHeaderClassName,
    );
  }

  private getCollapsibleBodyClass(): string {
    return classNames(
      'collapsible-body',
      {
        'display-block': this.props.expanded,
      },
      this.props.collapsibleBodyClassName,
    );
  }

  private getSvgClass(): string {
    return classNames(
      'icon mod-lg',
      {
        'fill-orange': !!this.props.informationUrl,
        'fill-medium-grey': !this.props.informationUrl,
      }
    );
  }

  private getCollapsibleHeaderIcon(): JSX.Element {
    if (!this.props.informationUrl && !this.props.informationTooltip) {
      return null;
    }

    const tooltipProps = { placement: 'right', ...this.props.informationTooltip };
    const svgProps = { svgName: 'help', svgClass: this.getSvgClass() };

    const collapsibleHeaderIcon = this.props.informationUrl
      ? <LinkSvg url={this.props.informationUrl} target='_blank' tooltip={tooltipProps} svg={svgProps} />
      : <Tooltip {...tooltipProps}><Svg {...svgProps} /></Tooltip>;

    return <span className='round-contextual-help'>{collapsibleHeaderIcon}</span>;
  }

  componentWillReceiveProps(nextProps: ICollapsibleContainerProps) {
    this.toggleCollapsibleBodyOnExpandedStateChange(nextProps);
  }

  componentWillMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount();
    }
  }

  render() {
    return (
      <div id={this.props.id} className={classNames('collapsible', this.props.className)}>
        <button
          type='button'
          className={this.getCollapsibleHeaderClass()}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => this.props.onToggleExpandedState(this.props.expanded)}>
          {this.props.title}
          {this.getCollapsibleHeaderIcon()}
        </button>
        <div
          className={this.getCollapsibleBodyClass()}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
