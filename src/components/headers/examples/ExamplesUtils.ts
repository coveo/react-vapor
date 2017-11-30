import { IBreadcrumbLinkProps } from '../../breadcrumbs/BreadcrumbLink';
import { ILinkSvgProps } from '../../svg/LinkSvg';
import { Button } from '../../button/Button';
import { IContentProps } from '../../content/Content';
import { IBreadcrumbProps } from '../../breadcrumbs/Breadcrumb';
import { ITitleProps } from '../../title/Title';
import { ITabProps } from '../../tab/Tab';

export const link1: IBreadcrumbLinkProps = {
  name: 'Pikachu',
  link: '#',
};

export const link2: IBreadcrumbLinkProps = {
  name: 'Squirtle',
  link: '#',
};

export const documentationLink: ILinkSvgProps = {
  url: 'https://www.google.ca',
  target: '_blank',
  svg: {
    svgName: 'help',
    svgClass: 'fill-orange icon mod-20',
  },
};

export const defaultTitle: ITitleProps = {
  title: 'Charmeleon title',
  documentationLink,
};

export const actions: IContentProps[] = [{
  content: Button,
  componentProps: { name: 'Add' },
  classes: ['btn-container'],
},
{
  content: Button,
  componentProps: { name: 'Add' },
  classes: ['btn-container'],
},
];

export const defaultBreadcrumb: IBreadcrumbProps = {
  title: defaultTitle,
  links: [link1, link2],
};

export const defaultBreadcrumbLongTitle: IBreadcrumbProps = {
  title: {
    title: 'Pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika ',
    prefix: 'Catch this pokemon:',
    documentationLink,
  },
  links: [link1, link2],
};

export const defaultTabs: ITabProps[] = [
  { id: 'tab1', title: 'Digimon' },
  { id: 'tab2', title: 'Beyblade' },
  { id: 'tab3', title: 'Pokemon' },
];
