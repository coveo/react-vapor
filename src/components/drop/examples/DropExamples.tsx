import * as React from 'react';
import {Button} from '../../button/Button';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ListBox} from '../../listBox/ListBox';
import {Drop} from '../Drop';
import {DropPodPosition} from '../DropPod';

export class DropExamples extends React.PureComponent {

    render() {
        const triggerAlertFunction = () => {
            alert(`Alert function triggered`);
        };

        const defaultItems: IItemBoxProps[] = [
            {value: 'Add Digimon'},
            {value: 'Duplicate Meepo'},
            {value: 'Disable Dragon Ball', onOptionClick: () => triggerAlertFunction()},
            {value: 'Delete BitConnect'},
        ];

        const defaultItemsLongText: IItemBoxProps[] = [
            {value: 'Add Digimon'},
            {value: 'Duplicate Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo'},
        ];

        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Default tooltip</label>
                    <div className='form-control'>
                        <Drop
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Tooltip with list position left</label>
                    <div className='form-control'>
                        <Drop
                            positions={[DropPodPosition.left, DropPodPosition.right]}
                            buttonContainerProps={{
                                className: 'right inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Tooltip with list position bottom</label>
                    <div className='form-control'>
                        <Drop
                            positions={[DropPodPosition.bottom, DropPodPosition.top]}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Tooltip with list position top</label>
                    <div className='form-control'>
                        <Drop
                            positions={[DropPodPosition.top, DropPodPosition.bottom]}
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )}
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Tooltip: no position. no toolip</label>
                    <div className='form-control'>
                        <Drop
                            positions={[]}
                            buttonContainerProps={{
                                className: 'right inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Tooltip with list position right with long text</label>
                    <div className='form-control'>
                        <Drop
                            positions={[DropPodPosition.right, DropPodPosition.left, DropPodPosition.bottom]}
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )}
                        >
                            <ListBox items={defaultItemsLongText} />
                        </Drop>
                    </div>
                </div>
            </div>
        );
    }
}
