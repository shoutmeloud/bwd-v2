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

export interface ElementsCardList extends Schema.Component {
  collectionName: 'components_elements_card_lists';
  info: {
    displayName: 'Card List';
    icon: 'server';
  };
  attributes: {
    title: Attribute.String;
    level: Attribute.Enumeration<['Beginner', 'Intermediate', 'Professional']>;
    estimate_time: Attribute.String;
    icon: Attribute.Media<'images'>;
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
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    read_more: Attribute.String;
  };
}

export interface ElementsCompanyShortDescription extends Schema.Component {
  collectionName: 'components_elements_company_short_descriptions';
  info: {
    displayName: 'Company Short Description';
    icon: 'cup';
    description: '';
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

export interface ElementsImageWithHeading extends Schema.Component {
  collectionName: 'components_elements_image_with_headings';
  info: {
    displayName: 'Image with heading';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
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
    social: Attribute.Component<'elements.social-links'>;
  };
}

export interface ElementsSocialLinks extends Schema.Component {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Links';
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
  collectionName: 'components_sections_banners';
  info: {
    displayName: 'Banner';
    icon: 'bold';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'elements.image-with-heading', true>;
  };
}

export interface SectionsBlogsAndNews extends Schema.Component {
  collectionName: 'components_sections_blogs_and_news';
  info: {
    displayName: 'Blogs & News';
    icon: 'bold';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    button: Attribute.Component<'elements.cta'>;
    blogs: Attribute.Component<'elements.cards', true>;
    title: Attribute.String;
  };
}

export interface SectionsClients extends Schema.Component {
  collectionName: 'components_sections_clients';
  info: {
    displayName: 'Clients';
    icon: 'emotionHappy';
  };
  attributes: {
    clients_review: Attribute.Component<'elements.cards'>;
  };
}

export interface SectionsCompanies extends Schema.Component {
  collectionName: 'components_sections_companies';
  info: {
    displayName: 'Companies';
    icon: 'gate';
  };
  attributes: {
    companies: Attribute.Component<'elements.social-links', true>;
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

export interface SectionsGetInTouch extends Schema.Component {
  collectionName: 'components_sections_get_in_touches';
  info: {
    displayName: 'Get In Touch';
    icon: 'connector';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    first_description: Attribute.Text;
    key_list: Attribute.Component<'elements.card-list'>;
    cta_button: Attribute.Component<'elements.cta'>;
    second_description: Attribute.Text;
    third_description: Attribute.Text;
    header_menu: Attribute.Component<'elements.social-links', true>;
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

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'emotionHappy';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.Text;
  };
}

export interface SectionsLinks extends Schema.Component {
  collectionName: 'components_sections_links';
  info: {
    displayName: 'Links';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    button: Attribute.Component<'elements.cta'>;
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

export interface SectionsPortfolio extends Schema.Component {
  collectionName: 'components_sections_portfolios';
  info: {
    displayName: 'Portfolio';
    icon: 'play';
    description: '';
  };
  attributes: {
    image: Attribute.Component<'elements.social-links', true>;
  };
}

export interface SectionsProvenProcess extends Schema.Component {
  collectionName: 'components_sections_proven_processes';
  info: {
    displayName: 'Proven Process';
    icon: 'music';
    description: '';
  };
  attributes: {
    left_right_section: Attribute.Component<'elements.cards', true>;
    title: Attribute.String;
    description: Attribute.Text;
    short_description: Attribute.Text;
  };
}

export interface SectionsServiceContent extends Schema.Component {
  collectionName: 'components_elements_service_contents';
  info: {
    displayName: 'Service Content';
    icon: 'cube';
    description: '';
  };
  attributes: {
    content: Attribute.Component<'elements.cards', true>;
  };
}

export interface SectionsTalkToExperts extends Schema.Component {
  collectionName: 'components_sections_talk_to_experts';
  info: {
    displayName: 'Talk to experts';
    icon: 'volumeUp';
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
    media: Attribute.Media<'images' | 'videos'>;
    cta_button: Attribute.Component<'elements.cta'>;
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
      'elements.card-list': ElementsCardList;
      'elements.cards': ElementsCards;
      'elements.company-short-description': ElementsCompanyShortDescription;
      'elements.cta': ElementsCta;
      'elements.image-with-heading': ElementsImageWithHeading;
      'elements.short-contact': ElementsShortContact;
      'elements.social-links': ElementsSocialLinks;
      'sections.banner': SectionsBanner;
      'sections.blogs-and-news': SectionsBlogsAndNews;
      'sections.clients': SectionsClients;
      'sections.companies': SectionsCompanies;
      'sections.connect-us': SectionsConnectUs;
      'sections.content': SectionsContent;
      'sections.get-in-touch': SectionsGetInTouch;
      'sections.heading': SectionsHeading;
      'sections.hero': SectionsHero;
      'sections.links': SectionsLinks;
      'sections.meet-us': SectionsMeetUs;
      'sections.portfolio': SectionsPortfolio;
      'sections.proven-process': SectionsProvenProcess;
      'sections.service-content': SectionsServiceContent;
      'sections.talk-to-experts': SectionsTalkToExperts;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
