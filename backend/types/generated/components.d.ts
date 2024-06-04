import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuSubMenu extends Schema.Component {
  collectionName: 'components_menu_sub_menus';
  info: {
    displayName: 'Sub Menu';
    description: '';
  };
  attributes: {
    sub_heading: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.sub-menu': MenuSubMenu;
    }
  }
}
