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

export interface ElementsCompanyShortDescription extends Schema.Component {
  collectionName: 'components_elements_company_short_descriptions';
  info: {
    displayName: 'Company Short Description';
    icon: 'grid';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    social: Attribute.Component<'elements.social-links', true>;
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

export interface ElementsShortContact extends Schema.Component {
  collectionName: 'components_elements_short_contacts';
  info: {
    displayName: 'Short Contact';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    location: Attribute.String;
    contact_number: Attribute.String;
    email: Attribute.Email;
    social: Attribute.Component<'elements.social-links', true>;
  };
}

export interface ElementsSocialLinks extends Schema.Component {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Links';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    links: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images', true>;
  };
}

export interface SectionsConnectUs extends Schema.Component {
  collectionName: 'components_sections_connect_uses';
  info: {
    displayName: 'Connect Us';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    project_completed: Attribute.Integer;
    satisfied_clients: Attribute.Integer;
  };
}

export interface SectionsContent extends Schema.Component {
  collectionName: 'components_sections_contents';
  info: {
    displayName: 'Content';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    icon: Attribute.Media<'images'>;
  };
}

export interface SectionsHeading extends Schema.Component {
  collectionName: 'components_heading_headings';
  info: {
    displayName: 'Heading';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media<'images'>;
  };
}

export interface SectionsMeetUs extends Schema.Component {
  collectionName: 'components_sections_meet_uses';
  info: {
    displayName: 'Meet Us';
    icon: 'monitor';
  };
  attributes: {
    heading: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    contact_number: Attribute.String;
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
      'elements.company-short-description': ElementsCompanyShortDescription;
      'elements.cta': ElementsCta;
      'elements.short-contact': ElementsShortContact;
      'elements.social-links': ElementsSocialLinks;
      'sections.banner': SectionsBanner;
      'sections.connect-us': SectionsConnectUs;
      'sections.content': SectionsContent;
      'sections.heading': SectionsHeading;
      'sections.meet-us': SectionsMeetUs;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
