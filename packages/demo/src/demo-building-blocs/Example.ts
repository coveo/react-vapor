import * as React from 'react';

interface ExampleArgs {
    /**
     * The URL fragment that points to the example.
     */
    route: string;
    /**
     * The React component to render for the example.
     */
    Component: React.ComponentType<unknown>;
    /**
     * The source code to display as a snippet.
     */
    sourceCode?: string;
    /**
     * The text displayed in the example page header.
     */
    title?: string;
    /**
     * The text displayed in the side navigation.
     */
    linkLabel?: string;
    /**
     * The label of the first tab if (used only if there are more than one tab to display).
     */
    firstTabLabel?: string;
    /**
     * The text displayed underneath the title in the example page header.
     */
    description?: string;
    /**
     * Whether the component showcased is deprecated.
     */
    deprecated?: boolean;
}

class Example {
    private privateTitle: string;
    private privateLinkLabel: string;
    private privateFirstTabLabel: string;

    constructor({title, linkLabel, firstTabLabel, ...args}: ExampleArgs) {
        Object.assign(this, args);
        this.privateTitle = title;
        this.privateLinkLabel = linkLabel;
        this.privateFirstTabLabel = firstTabLabel;
        return this;
    }

    get title(): string {
        const name = this.privateTitle || this.privateLinkLabel || this.route;
        return this.deprecated ? `${name} (deprecated)` : name;
    }

    get linkLabel(): string {
        return this.privateLinkLabel || this.route;
    }

    get firstTabLabel(): string {
        return this.privateFirstTabLabel || 'Develop';
    }
}
interface Example extends ExampleArgs {}
export default Example;
