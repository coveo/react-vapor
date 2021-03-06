import * as React from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';
import {Loading} from 'react-vapor';
import * as _ from 'underscore';

import ComponentPage from './ComponentPage';
import {IComponent} from './ComponentsInterface';
import SideMenu from './Menu';

const componentFiles = require.context('./examples', true, /Examples?\.js?$/i, 'lazy');

const load = async (path: string, ctx: any) => {
    const component = await ctx(path);
    const name = _.keys(component)[0].replace(/Examples?/i, '');
    const componentPrototype = _.values(component)[0];
    const c: IComponent = {
        name,
        path,
        component: componentPrototype,
    };
    return c;
};

const loadAll = () => Promise.all(componentFiles.keys().map((path) => load(path, componentFiles)));

const Components: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    const [components, setComponents] = React.useState([]);
    React.useEffect(() => {
        loadAll().then((all) => setComponents(all.filter(Boolean)));
    }, []);

    const routes = React.useMemo(
        () =>
            components
                .sort((a: IComponent, b: IComponent) => a.name.localeCompare(b.name))
                .map(({path, ...rest}: IComponent) => (
                    <Route
                        key={rest.name}
                        path={`${match.url}/${rest.name}`}
                        component={() => <ComponentPage path={path} {...rest} />}
                    />
                )),
        [components, match.url]
    );

    if (components.length === 0) {
        return <Loading fullContent />;
    }

    return (
        <>
            <SideMenu components={components} />
            <div className="coveo-form flex-auto relative shadow-2 ml4 overflow-auto demo-content">
                <Switch>
                    {routes}
                    <Route path="/" component={() => <Redirect to={`${match.url}/${components[0].name}`} />} />
                </Switch>
            </div>
        </>
    );
};

export default Components;
