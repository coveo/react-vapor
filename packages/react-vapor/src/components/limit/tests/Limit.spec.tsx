import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';
import * as React from 'react';

import {Limit, LimitProps} from '../Limit';

describe('Limit', () => {
    const anyId = 'limit1';
    const anyTitle = 'test limit';
    const anyUsage = 33;
    const customLimit = 130;
    const customLimitLabel: string = 'Throttling limit';

    const defaultProps: LimitProps = {
        id: anyId,
        title: anyTitle,
    };
    const customProps: LimitProps = {
        ...defaultProps,
        usage: anyUsage,
        limit: customLimit,
        limitLabel: customLimitLabel,
        isHistoryIncluded: true,
    };
    const limitEditableProps: LimitProps = {
        ...defaultProps,
        usage: anyUsage,
        isLimitEditable: true,
    };

    it('renders Limit component with default values', () => {
        render(<Limit {...defaultProps} />);

        expect(screen.getByText(/100/i)).toBeInTheDocument();
        expect(screen.getByText(/test limit/i)).toBeInTheDocument();
    });

    it('renders Limit component with custom values', () => {
        render(<Limit {...customProps} />);

        expect(screen.getByText(/usage/i)).toBeInTheDocument();
        expect(screen.getByText(/throttling limit/i)).toBeInTheDocument();
        expect(screen.getByText(/130/i)).toBeInTheDocument();
        expect(screen.getByText(/30/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/menuanalytics icon/i)).toBeInTheDocument();
    });

    it('renders an editable Limit component when editable', () => {
        render(<Limit {...limitEditableProps} />);
        expect(
            screen.getByRole('spinbutton', {
                name: /limit/i,
            })
        ).toBeInTheDocument();
    });

    it('calls the onClick method on history icon onClick', () => {
        const clickSpy = jest.fn();
        const onClickProps: LimitProps = {...customProps, onClick: clickSpy};
        render(<Limit {...onClickProps} />);
        const historyIcon = screen.getByLabelText(/menuanalytics icon/i);
        userEvent.click(historyIcon);

        expect(clickSpy).toHaveBeenCalled();
    });
});
