import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import {MarkdownOverrides} from './MarkdownOverrides';

const LoadableMarkdown: React.FunctionComponent<{load: () => Promise<{default: string}>}> = ({load}) => {
    const [content, setContent] = React.useState('');

    const loadContent = async () => {
        const mdString = (await load()).default;
        setContent(mdString);
    };

    React.useEffect(() => {
        loadContent();
    }, [load]);

    return (
        <ReactMarkdown
            remarkPlugins={[gfm]}
            className="markdown-documentation"
            children={content}
            components={MarkdownOverrides}
        />
    );
};

export default LoadableMarkdown;
