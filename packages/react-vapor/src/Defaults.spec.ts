import ReactModal from 'react-modal';

import {Defaults} from './Defaults';

jest.mock('react-modal');

// CAN REMOVE THIS TEST SINCE THE ONLY TIME APP_ELEMENT IS CALLED IS IN KARMA, WHICH WE'RE REMOVING
describe.skip('Defaults', () => {
    class DumbClassForCoverage extends Defaults {}

    describe('APP_ELEMENT', () => {
        it('should call ReactModal.setAppElement', () => {
            const expectedAppElement = '#app-element';
            const setAppElementSpy = jest.spyOn(ReactModal, 'setAppElement');

            Defaults.APP_ELEMENT = expectedAppElement;

            expect(setAppElementSpy).toHaveBeenCalledTimes(1);
            expect(setAppElementSpy).toHaveBeenCalledWith(expectedAppElement);
        });

        it('should satisfy coverage', () => {
            new DumbClassForCoverage();
        });
    });
});
