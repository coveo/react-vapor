import classNames from 'classnames';
import * as React from 'react';

import {Loading} from '../loading/Loading';
import {Svg} from '../svg/Svg';
import * as styles from './styles/StatusCard.scss';

export interface StatusCardProps {
    className?: string;
    color: string;
    title: string;
    icon?: string;
    simple?: boolean;
    loading?: boolean;
}

export class StatusCard extends React.Component<StatusCardProps> {
    render() {
        const cardClasses: string = classNames(this.props.className, styles.statusCard, 'flex', {
            simple: this.props.simple,
            [styles.modSuccess]: !this.props.loading && this.props.color === 'green',
            [styles.modWarning]: !this.props.loading && this.props.color === 'yellow',
            [styles.modCritical]: !this.props.loading && this.props.color === 'red',
            [styles.modInformation]: !this.props.loading && this.props.color === 'information',
        });

        return <div className={cardClasses}>{this.getContent()}</div>;
    }

    private getContent(): JSX.Element {
        const titleClasses: string = classNames('text-medium-blue', styles.statusCardTitle);

        return this.props.loading ? (
            <Loading key="loading" className="center-align" />
        ) : (
            <>
                {this.props.icon && (
                    <Svg
                        key="icon"
                        svgName={this.props.icon}
                        svgClass="icon mod-2x"
                        className={styles.statusCardIcon}
                    />
                )}
                <div key="status">
                    <h3 className={titleClasses}>{this.props.title}</h3>
                    <div className={styles.statusCardInfo}>{this.props.children}</div>
                </div>
            </>
        );
    }
}
