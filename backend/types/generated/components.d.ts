import type { Schema, Attribute } from '@strapi/strapi';

export interface AnalyticsGoogleAnalytics extends Schema.Component {
  collectionName: 'components_analytics_google_analytics';
  info: {
    displayName: 'Google Analytics';
    icon: 'cog';
  };
  attributes: {
    head_script: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    body_script: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ElementsCards extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Cards';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'>;
    publish_date: Attribute.Date;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

export interface ElementsCta extends Schema.Component {
  collectionName: 'components_elements_ctas';
  info: {
    displayName: 'CTA Buttons';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isEnternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsLinks extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'analytics.google-analytics': AnalyticsGoogleAnalytics;
      'elements.cards': ElementsCards;
      'elements.cta': ElementsCta;
      'elements.links': ElementsLinks;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
