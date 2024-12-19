import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
  };
  attributes: {
    headingAccordion: Schema.Attribute.String;
    items: Schema.Attribute.Component<'elements.accordion-item', true>;
  };
}

export interface ElementsAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordion_items';
  info: {
    description: '';
    displayName: 'AccordionItem';
  };
  attributes: {
    contentAccordion: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    titleAccordion: Schema.Attribute.String;
  };
}

export interface ElementsContentText extends Struct.ComponentSchema {
  collectionName: 'components_elements_content_texts';
  info: {
    description: '';
    displayName: 'ContentText';
  };
  attributes: {
    richText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface ElementsDoubleColumns extends Struct.ComponentSchema {
  collectionName: 'components_elements_double_columns';
  info: {
    description: '';
    displayName: 'DoubleColumns';
  };
  attributes: {
    textColumnLeft: Schema.Attribute.Text;
    textColumnRight: Schema.Attribute.Text;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsPhoto extends Struct.ComponentSchema {
  collectionName: 'components_elements_photos';
  info: {
    description: '';
    displayName: 'Photo';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    positionText: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    textImage: Schema.Attribute.Text;
  };
}

export interface ElementsQuote extends Struct.ComponentSchema {
  collectionName: 'components_elements_quotes';
  info: {
    description: '';
    displayName: 'Quote';
  };
  attributes: {
    authorQuote: Schema.Attribute.String;
    textQuote: Schema.Attribute.Text;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    socialMedia: Schema.Attribute.Enumeration<
      ['tiktok', 'facebook', 'youtube', 'instagram', 'spotify']
    >;
    url: Schema.Attribute.String;
  };
}

export interface ElementsVideoUrl extends Struct.ComponentSchema {
  collectionName: 'components_elements_video_urls';
  info: {
    displayName: 'VideoUrl';
  };
  attributes: {
    videoUrl: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<'plugin::video-field.video'>;
  };
}

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'MetaData';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    sharedImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.accordion': ElementsAccordion;
      'elements.accordion-item': ElementsAccordionItem;
      'elements.content-text': ElementsContentText;
      'elements.double-columns': ElementsDoubleColumns;
      'elements.link': ElementsLink;
      'elements.photo': ElementsPhoto;
      'elements.quote': ElementsQuote;
      'elements.social-link': ElementsSocialLink;
      'elements.video-url': ElementsVideoUrl;
      'seo.meta-data': SeoMetaData;
    }
  }
}
