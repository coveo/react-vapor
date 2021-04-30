import * as React from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';

import Example from '../demo-building-blocs/Example';
import ComponentPage from './ComponentPage';
import {ActionableItemExamples} from './examples/ActionableItemExamples';
import ActionableItemExamples_raw from './examples/ActionableItemExamples?raw';
import {ActionBarConnectedExamples} from './examples/ActionBarConnectedExamples';
import ActionBarConnectedExamples_raw from './examples/ActionBarConnectedExamples?raw';
import {ActionBarExamples} from './examples/ActionBarExamples';
import ActionBarExamples_raw from './examples/ActionBarExamples?raw';
import {BadgeExamples} from './examples/BadgeExamples';
import BadgeExamples_raw from './examples/BadgeExamples?raw';
import {BannerExamples} from './examples/BannerExamples';
import BannerExamples_raw from './examples/BannerExamples?raw';
import {BorderedLineExamples} from './examples/BorderedLineExamples';
import BorderedLineExamples_raw from './examples/BorderedLineExamples?raw';
import {BrowserPreviewExamples} from './examples/BrowserPreviewExamples';
import BrowserPreviewExamples_raw from './examples/BrowserPreviewExamples?raw';
import ButtonExamples from './examples/ButtonExamples';
import ButtonExamples_raw from './examples/ButtonExamples?raw';
import {ChartExamples} from './examples/ChartExamples';
import ChartExamples_raw from './examples/ChartExamples?raw';
import {CheckboxExamples} from './examples/CheckboxExamples';
import CheckboxExamples_raw from './examples/CheckboxExamples?raw';
import {ChildFormExamples} from './examples/ChildFormExamples';
import ChildFormExamples_raw from './examples/ChildFormExamples?raw';
import {CodeEditorExamples} from './examples/CodeEditorExamples';
import CodeEditorExamples_raw from './examples/CodeEditorExamples?raw';
import {CollapsibleExamples} from './examples/CollapsibleExamples';
import CollapsibleExamples_raw from './examples/CollapsibleExamples?raw';
import {ColorBarExamples} from './examples/ColorBarExamples';
import ColorBarExamples_raw from './examples/ColorBarExamples?raw';
import {ColorPickerExamples} from './examples/ColorPickerExamples';
import ColorPickerExamples_raw from './examples/ColorPickerExamples?raw';
import {DatePickerExamples} from './examples/DatePickerExamples';
import DatePickerExamples_raw from './examples/DatePickerExamples?raw';
import {DiffViewerExamples} from './examples/DiffViewerExamples';
import DiffViewerExamples_raw from './examples/DiffViewerExamples?raw';
import {FacetConnectedExamples} from './examples/FacetConnectedExamples';
import FacetConnectedExamples_raw from './examples/FacetConnectedExamples?raw';
import {FilepickerExamples} from './examples/FilepickerExamples';
import FilepickerExamples_raw from './examples/FilepickerExamples?raw';
import {FilterBoxExamples} from './examples/FilterBoxExamples';
import FilterBoxExamples_raw from './examples/FilterBoxExamples?raw';
import {FlatSelectExamples} from './examples/FlatSelectExamples';
import FlatSelectExamples_raw from './examples/FlatSelectExamples?raw';
import {HeaderExamples} from './examples/HeaderExamples';
import HeaderExamples_raw from './examples/HeaderExamples?raw';
import {InfoBoxExamples} from './examples/InfoBoxExamples';
import InfoBoxExamples_raw from './examples/InfoBoxExamples?raw';
import {TextInputExamples} from './examples/InputExamples';
import InputExamples_raw from './examples/InputExamples?raw';
import {ItemBoxExamples} from './examples/ItemBoxExamples';
import ItemBoxExamples_raw from './examples/ItemBoxExamples?raw';
import {ItemFilterConnectedExamples} from './examples/ItemFilterConnectedExamples';
import ItemFilterConnectedExamples_raw from './examples/ItemFilterConnectedExamples?raw';
import {ItemFilterExamples} from './examples/ItemFilterExamples';
import ItemFilterExamples_raw from './examples/ItemFilterExamples?raw';
import {JSONEditorExamples} from './examples/JSONEditorExamples';
import JSONEditorExamples_raw from './examples/JSONEditorExamples?raw';
import {LabeledValueExamples} from './examples/LabeledValueExamples';
import LabeledValueExamples_raw from './examples/LabeledValueExamples?raw';
import {LastUpdatedConnectedExamples} from './examples/LastUpdatedConnectedExamples';
import LastUpdatedConnectedExamples_raw from './examples/LastUpdatedConnectedExamples?raw';
import {LastUpdatedExamples} from './examples/LastUpdatedExamples';
import LastUpdatedExamples_raw from './examples/LastUpdatedExamples?raw';
import {LimitExamples} from './examples/LimitExamples';
import LimitExamples_raw from './examples/LimitExamples?raw';
import {LinkSvgExamples} from './examples/LinkSvgExamples';
import LinkSvgExamples_raw from './examples/LinkSvgExamples?raw';
import {ListBoxExamples} from './examples/ListBoxExamples';
import ListBoxExamples_raw from './examples/ListBoxExamples?raw';
import {LoadingExamples} from './examples/LoadingExamples';
import LoadingExamples_raw from './examples/LoadingExamples?raw';
import {LogoCardExamples} from './examples/LogoCardExamples';
import LogoCardExamples_raw from './examples/LogoCardExamples?raw';
import {ModalWindowExamples} from './examples/modalWindowExamples';
import modalWindowExamples_raw from './examples/modalWindowExamples?raw';
import {ModalWizardExamples} from './examples/ModalWizardExamples';
import ModalWizardExamples_raw from './examples/ModalWizardExamples?raw';
import {MultilineBoxExamples} from './examples/MultilineBoxExamples';
import MultilineBoxExamples_raw from './examples/MultilineBoxExamples?raw';
import {MultiSelectExamples} from './examples/MultiSelectExamples';
import MultiSelectExamples_raw from './examples/MultiSelectExamples?raw';
import {MultiStepBarExamples} from './examples/MultiStepBarExamples';
import MultiStepBarExamples_raw from './examples/MultiStepBarExamples?raw';
import {NumericInputExamples} from './examples/NumericInputExamples';
import NumericInputExamples_raw from './examples/NumericInputExamples?raw';
import {OptionsCycleExamples} from './examples/OptionsCycleExamples';
import OptionsCycleExamples_raw from './examples/OptionsCycleExamples?raw';
import {PaginationConnectedExamples} from './examples/PaginationConnectedExamples';
import PaginationConnectedExamples_raw from './examples/PaginationConnectedExamples?raw';
import {PaginationExamples} from './examples/PaginationExamples';
import PaginationExamples_raw from './examples/PaginationExamples?raw';
import {PartialStringMatchExamples} from './examples/PartialStringMatchExamples';
import PartialStringMatchExamples_raw from './examples/PartialStringMatchExamples?raw';
import {PopoverExample} from './examples/PopoverConnectedExamples';
import PopoverExamples_raw from './examples/PopoverConnectedExamples?raw';
import {RadioButtonExamples} from './examples/RadioExamples';
import RadioButtonExamples_raw from './examples/RadioExamples?raw';
import {RefreshExamples} from './examples/RefreshExamples';
import RefreshExamples_raw from './examples/RefreshExamples?raw';
import {SearchBarExamples} from './examples/SearchBarExamples';
import SearchBarExamples_raw from './examples/SearchBarExamples?raw';
import {SectionExamples} from './examples/SectionExamples';
import SectionExamples_raw from './examples/SectionExamples?raw';
import {SeparatorExamples} from './examples/SeparatorExamples';
import SeparatorExamples_raw from './examples/SeparatorExamples?raw';
import {SingleSelectExample} from './examples/SingleSelectExamples';
import SingleSelectExample_raw from './examples/SingleSelectExamples?raw';
import {SliderExamples} from './examples/SliderExamples';
import SliderExamples_raw from './examples/SliderExamples?raw';
import {SlideYExamples} from './examples/SlideYExamples';
import SlideYExamples_raw from './examples/SlideYExamples?raw';
import {SplitLayoutExamples} from './examples/SplitLayoutExamples';
import SplitLayoutExamples_raw from './examples/SplitLayoutExamples?raw';
import {StatusCardExamples} from './examples/StatusCardExamples';
import StatusCardExamples_raw from './examples/StatusCardExamples?raw';
import {StepProgressBarExamples} from './examples/StepProgressBarExamples';
import StepProgressBarExamples_raw from './examples/StepProgressBarExamples?raw';
import {SubNavigationExamples} from './examples/SubNavigationExamples';
import SubNavigationExamples_raw from './examples/SubNavigationExamples?raw';
import {SvgExamples} from './examples/SvgExamples';
import SvgExamples_raw from './examples/SvgExamples?raw';
// import {TableHocLoadingExamples} from './examples/TableHOCLoadingExamples';
// import TableHOCLoadingExamples_raw from './examples/TableHOCLoadingExamples?raw';
// import {TableHOCServerExamples} from './examples/TableHOCServerExamples';
// import TableHOCServerExamples_raw from './examples/TableHOCServerExamples?raw';
// import {TableHOCwithBlankSlateExamples} from './examples/TableHOCwithBlankSlateExamples';
// import TableHOCwithBlankSlateExamples_raw from './examples/TableHOCwithBlankSlateExamples?raw';
import {TextAreaExamples} from './examples/TextAreaExamples';
import TextAreaExamples_raw from './examples/TextAreaExamples?raw';
import {ToastConnectedExamples} from './examples/ToastConnectedExamples';
import ToastConnectedExamples_raw from './examples/ToastConnectedExamples?raw';
import {ToastExamples} from './examples/ToastExamples';
import ToastExamples_raw from './examples/ToastExamples?raw';
import {TooltipExamples} from './examples/TooltipExamples';
import TooltipExamples_raw from './examples/TooltipExamples?raw';
import SideMenu from './Menu';

const examples: Example[] = [
    new Example({
        route: 'ActionBarConnected',
        Component: ActionBarConnectedExamples,
        sourceCode: ActionBarConnectedExamples_raw,
    }),
    new Example({
        route: 'ActionBar',
        Component: ActionBarExamples,
        sourceCode: ActionBarExamples_raw,
    }),
    new Example({
        route: 'ActionableItem',
        Component: ActionableItemExamples,
        sourceCode: ActionableItemExamples_raw,
    }),
    new Example({
        route: 'Badge',
        Component: BadgeExamples,
        sourceCode: BadgeExamples_raw,
    }),
    new Example({
        route: 'Banner',
        Component: BannerExamples,
        sourceCode: BannerExamples_raw,
    }),
    new Example({
        route: 'BorderedLine',
        Component: BorderedLineExamples,
        sourceCode: BorderedLineExamples_raw,
    }),
    new Example({
        route: 'BrowserPreview',
        Component: BrowserPreviewExamples,
        sourceCode: BrowserPreviewExamples_raw,
    }),
    new Example({
        route: 'Button',
        Component: ButtonExamples,
        sourceCode: ButtonExamples_raw,
    }),
    new Example({
        route: 'Chart',
        Component: ChartExamples,
        sourceCode: ChartExamples_raw,
    }),
    new Example({
        route: 'Checkbox',
        Component: CheckboxExamples,
        sourceCode: CheckboxExamples_raw,
    }),
    new Example({
        route: 'ChildForm',
        Component: ChildFormExamples,
        sourceCode: ChildFormExamples_raw,
    }),
    new Example({
        route: 'CodeEditor',
        Component: CodeEditorExamples,
        sourceCode: CodeEditorExamples_raw,
    }),
    new Example({
        route: 'Collapsible',
        Component: CollapsibleExamples,
        sourceCode: CollapsibleExamples_raw,
    }),
    new Example({
        route: 'ColorBar',
        Component: ColorBarExamples,
        sourceCode: ColorBarExamples_raw,
    }),
    new Example({
        route: 'ColorPicker',
        Component: ColorPickerExamples,
        sourceCode: ColorPickerExamples_raw,
    }),
    new Example({
        route: 'DatePicker',
        Component: DatePickerExamples,
        sourceCode: DatePickerExamples_raw,
    }),
    new Example({
        route: 'DiffViewer',
        Component: DiffViewerExamples,
        sourceCode: DiffViewerExamples_raw,
    }),
    new Example({
        route: 'FacetConnected',
        Component: FacetConnectedExamples,
        sourceCode: FacetConnectedExamples_raw,
    }),
    new Example({
        route: 'Filepicker',
        Component: FilepickerExamples,
        sourceCode: FilepickerExamples_raw,
    }),
    new Example({
        route: 'FilterBox',
        Component: FilterBoxExamples,
        sourceCode: FilterBoxExamples_raw,
    }),
    new Example({
        route: 'FlatSelect',
        Component: FlatSelectExamples,
        sourceCode: FlatSelectExamples_raw,
    }),
    new Example({
        route: 'Header',
        Component: HeaderExamples,
        sourceCode: HeaderExamples_raw,
    }),
    new Example({
        route: 'InfoBox',
        Component: InfoBoxExamples,
        sourceCode: InfoBoxExamples_raw,
    }),
    new Example({
        route: 'Input',
        Component: TextInputExamples,
        sourceCode: InputExamples_raw,
    }),
    new Example({
        route: 'ItemBox',
        Component: ItemBoxExamples,
        sourceCode: ItemBoxExamples_raw,
    }),
    new Example({
        route: 'ItemFilterConnected',
        Component: ItemFilterConnectedExamples,
        sourceCode: ItemFilterConnectedExamples_raw,
    }),
    new Example({
        route: 'ItemFilter',
        Component: ItemFilterExamples,
        sourceCode: ItemFilterExamples_raw,
    }),
    new Example({
        route: 'JSONEditor',
        Component: JSONEditorExamples,
        sourceCode: JSONEditorExamples_raw,
    }),
    new Example({
        route: 'LabeledValue',
        Component: LabeledValueExamples,
        sourceCode: LabeledValueExamples_raw,
    }),
    new Example({
        route: 'LastUpdatedConnected',
        Component: LastUpdatedConnectedExamples,
        sourceCode: LastUpdatedConnectedExamples_raw,
    }),
    new Example({
        route: 'LastUpdated',
        Component: LastUpdatedExamples,
        sourceCode: LastUpdatedExamples_raw,
    }),
    new Example({
        route: 'Limit',
        Component: LimitExamples,
        sourceCode: LimitExamples_raw,
    }),
    new Example({
        route: 'LinkSvg',
        Component: LinkSvgExamples,
        sourceCode: LinkSvgExamples_raw,
    }),
    new Example({
        route: 'ListBox',
        Component: ListBoxExamples,
        sourceCode: ListBoxExamples_raw,
    }),
    new Example({
        route: 'Loading',
        Component: LoadingExamples,
        sourceCode: LoadingExamples_raw,
    }),
    new Example({
        route: 'LogoCard',
        Component: LogoCardExamples,
        sourceCode: LogoCardExamples_raw,
    }),
    new Example({
        route: 'ModalWizard',
        Component: ModalWizardExamples,
        sourceCode: ModalWizardExamples_raw,
    }),
    new Example({
        route: 'MultiSelect',
        Component: MultiSelectExamples,
        sourceCode: MultiSelectExamples_raw,
    }),
    new Example({
        route: 'MultiStepBar',
        Component: MultiStepBarExamples,
        sourceCode: MultiStepBarExamples_raw,
    }),
    new Example({
        route: 'MultilineBox',
        Component: MultilineBoxExamples,
        sourceCode: MultilineBoxExamples_raw,
    }),
    new Example({
        route: 'NumericInput',
        Component: NumericInputExamples,
        sourceCode: NumericInputExamples_raw,
    }),
    new Example({
        route: 'OptionsCycle',
        Component: OptionsCycleExamples,
        sourceCode: OptionsCycleExamples_raw,
    }),
    new Example({
        route: 'PaginationConnected',
        Component: PaginationConnectedExamples,
        sourceCode: PaginationConnectedExamples_raw,
    }),
    new Example({
        route: 'Pagination',
        Component: PaginationExamples,
        sourceCode: PaginationExamples_raw,
    }),
    new Example({
        route: 'PartialStringMatch',
        Component: PartialStringMatchExamples,
        sourceCode: PartialStringMatchExamples_raw,
    }),
    new Example({
        route: 'PopoverConnected',
        Component: PopoverExample,
        sourceCode: PopoverExamples_raw,
    }),
    new Example({
        route: 'Radio',
        Component: RadioButtonExamples,
        sourceCode: RadioButtonExamples_raw,
    }),
    new Example({
        route: 'Refresh',
        Component: RefreshExamples,
        sourceCode: RefreshExamples_raw,
    }),
    new Example({
        route: 'SearchBar',
        Component: SearchBarExamples,
        sourceCode: SearchBarExamples_raw,
    }),
    new Example({
        route: 'Section',
        Component: SectionExamples,
        sourceCode: SectionExamples_raw,
    }),
    new Example({
        route: 'Separator',
        Component: SeparatorExamples,
        sourceCode: SeparatorExamples_raw,
    }),
    new Example({
        route: 'SingleSelect',
        Component: SingleSelectExample,
        sourceCode: SingleSelectExample_raw,
    }),
    new Example({
        route: 'SlideY',
        Component: SlideYExamples,
        sourceCode: SlideYExamples_raw,
    }),
    new Example({
        route: 'Slider',
        Component: SliderExamples,
        sourceCode: SliderExamples_raw,
    }),
    new Example({
        route: 'SplitLayout',
        Component: SplitLayoutExamples,
        sourceCode: SplitLayoutExamples_raw,
    }),
    new Example({
        route: 'StatusCard',
        Component: StatusCardExamples,
        sourceCode: StatusCardExamples_raw,
    }),
    new Example({
        route: 'StepProgressBar',
        Component: StepProgressBarExamples,
        sourceCode: StepProgressBarExamples_raw,
    }),
    new Example({
        route: 'SubNavigation',
        Component: SubNavigationExamples,
        sourceCode: SubNavigationExamples_raw,
    }),
    new Example({
        route: 'Svg',
        Component: SvgExamples,
        sourceCode: SvgExamples_raw,
    }),
    // new Example({
    //     route: 'TableHOCLoading',
    //     Component: TableHocLoadingExamples,
    //     sourceCode: TableHOCLoadingExamples_raw,
    // }),
    // new Example({
    //     route: 'TableHOCServer',
    //     Component: TableHOCServerExamples,
    //     sourceCode: TableHOCServerExamples_raw,
    // }),
    // new Example({
    //     route: 'TableHOCwithBlankSlate',
    //     Component: TableHOCwithBlankSlateExamples,
    //     sourceCode: TableHOCwithBlankSlateExamples_raw,
    // }),
    new Example({
        route: 'TextArea',
        Component: TextAreaExamples,
        sourceCode: TextAreaExamples_raw,
    }),
    new Example({
        route: 'ToastConnected',
        Component: ToastConnectedExamples,
        sourceCode: ToastConnectedExamples_raw,
    }),
    new Example({
        route: 'Toast',
        Component: ToastExamples,
        sourceCode: ToastExamples_raw,
    }),
    new Example({
        route: 'Tooltip',
        Component: TooltipExamples,
        sourceCode: TooltipExamples_raw,
    }),
    new Example({
        route: 'modalWindow',
        Component: ModalWindowExamples,
        sourceCode: modalWindowExamples_raw,
    }),
];

const Components: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <SideMenu examples={examples} />
        <div className="coveo-form flex-auto relative shadow-2 ml4 overflow-auto demo-content">
            <Switch>
                {examples.map(({route, sourceCode, Component, firstTabLabel, title}) => (
                    <Route
                        key={route}
                        path={`${match.url}/${route}`}
                        component={() => (
                            <ComponentPage
                                route={route}
                                title={title}
                                firstTabLabel={firstTabLabel}
                                sourceCode={sourceCode}
                            >
                                <Component />
                            </ComponentPage>
                        )}
                    />
                ))}
                <Route path="/" component={() => <Redirect to={`${match.url}/${examples[0].route}`} />} />
            </Switch>
        </div>
    </>
);

export default Components;
