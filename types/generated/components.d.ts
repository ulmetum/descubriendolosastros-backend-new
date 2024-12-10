import type { Schema, Struct } from '@strapi/strapi';

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
    displayName: 'Photo';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    position: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
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
      'elements.content-text': ElementsContentText;
      'elements.link': ElementsLink;
      'elements.photo': ElementsPhoto;
      'elements.social-link': ElementsSocialLink;
      'elements.video-url': ElementsVideoUrl;
      'seo.meta-data': SeoMetaData;
    }
  }
}
