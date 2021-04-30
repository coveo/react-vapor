import * as React from 'react';
import {SideNavigation} from 'react-vapor';

import Example from '../demo-building-blocs/Example';
import NavigationLink from '../demo-building-blocs/NavigationLink';
import NavigationSection from '../demo-building-blocs/NavigationSection';

const Menu: React.FunctionComponent<{examples: Example[]}> = ({examples}) => (
    <SideNavigation className="demo-side-nav">
        <NavigationSection notExpandable>
            {examples
                .sort((a, b) => a.linkLabel.localeCompare(b.linkLabel))
                .map((example) => (
                    <NavigationLink key={example.route} href={`/${example.route}`} name={example.linkLabel} />
                ))}
        </NavigationSection>
    </SideNavigation>
);

export default Menu;
