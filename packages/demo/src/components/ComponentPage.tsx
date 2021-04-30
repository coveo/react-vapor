import * as React from 'react';
import {BasicHeader, CherryPick, ITabProps, Loading, TabContent, TabPaneConnected} from 'react-vapor';

import Code from '../demo-building-blocs/Code';
import Example from '../demo-building-blocs/Example';
import LoadableMarkdown from '../demo-building-blocs/LoadableMarkdown';

interface MarkdownTab {
    id: string;
    tabName: string;
    order: number;
    loadMarkdown: () => Promise<{default: string}>;
}

const markdownFiles = import.meta.glob('./examples/*.md') as Record<string, () => Promise<{default: string}>>;

const ComponentPage: React.FunctionComponent<Pick<Example, 'route' | 'firstTabLabel' | 'title' | 'sourceCode'>> = (
    props
) => {
    const markdownTabs = Object.keys(markdownFiles)
        .filter((path) => path.includes(props.route))
        .map(
            (path): MarkdownTab => {
                const [, order, tabName] = /\w+Examples?(?:\.(\d+))?(?:\.(\w+))?\.md$/.exec(path);
                return {
                    id: `${props.route}-${tabName}-tab`,
                    tabName,
                    order: parseInt(order, 10) || 0,
                    loadMarkdown: markdownFiles[path],
                };
            }
        )
        .sort((tabA: MarkdownTab, tabB: MarkdownTab) => tabA.order - tabB.order);
    const hasMarkdownTabs = markdownTabs && markdownTabs.length > 0;

    const PageLayout = hasMarkdownTabs ? PageLayoutWithTabs : PageLayoutWithoutTabs;

    return markdownTabs === null ? (
        <Loading fullContent />
    ) : (
        <>
            <BasicHeader
                title={{text: props.title}}
                tabs={
                    hasMarkdownTabs &&
                    [{id: `${props.route}-development-tab`, title: props.firstTabLabel} as ITabProps].concat(
                        markdownTabs.map(
                            ({tabName, id}: MarkdownTab): ITabProps => ({
                                id,
                                title: tabName,
                            })
                        )
                    )
                }
            />
            <PageLayout {...props} tabs={markdownTabs} />
        </>
    );
};

const PageLayoutWithTabs: React.FunctionComponent<Pick<Example, 'sourceCode' | 'route'> & {tabs: MarkdownTab[]}> = (
    props
) => (
    <TabContent className="mod-header-padding mod-form-top-bottom-padding">
        <TabPaneConnected id={`${props.route}-development-tab`}>
            <DevelopmentTabContent {...props} />
        </TabPaneConnected>
        {props.tabs.map(({loadMarkdown, id}: MarkdownTab) => (
            <TabPaneConnected key={id} id={id}>
                <LoadableMarkdown load={loadMarkdown} />
            </TabPaneConnected>
        ))}
    </TabContent>
);

const PageLayoutWithoutTabs: React.FunctionComponent<CherryPick<Example, 'sourceCode'>> = (props) => (
    <div className="mod-header-padding mod-form-top-bottom-padding">
        <DevelopmentTabContent {...props} />
    </div>
);

const START_STOP = /\/\/ start-print\s*([\s\S]*)\/\/ stop-print/;
const START_END = /\/\/ start-print\s*([\s\S]*)$/;
const BEGIN_STOP = /^([\s\S]*)\/\/ stop-print/;

const chopDownSourceFile = (wholeFile: string): string => {
    const hasStartDirective = wholeFile.indexOf('// start-print') >= 0;
    const hasStopDirective = wholeFile.indexOf('// stop-print') >= 0;

    if (hasStartDirective && hasStopDirective) {
        return wholeFile.match(START_STOP)[1];
    } else if (hasStartDirective) {
        return wholeFile.match(START_END)[1];
    } else if (hasStopDirective) {
        return wholeFile.match(BEGIN_STOP)[1];
    } else {
        return wholeFile;
    }
};

const DevelopmentTabContent: React.FunctionComponent<Pick<Example, 'sourceCode'>> = ({children, sourceCode}) => (
    <>
        {children}
        {sourceCode && (
            <div className="mt2">
                <Code language="tsx">{chopDownSourceFile(sourceCode)}</Code>
            </div>
        )}
    </>
);

export default ComponentPage;
