import type { Schema, Struct } from '@strapi/strapi';

export interface HeadTagContentHeadTagContent extends Struct.ComponentSchema {
  collectionName: 'components_head_tag_content_head_tag_contents';
  info: {
    displayName: 'HeadTagContent';
  };
  attributes: {
    Content: Schema.Attribute.String;
    Href: Schema.Attribute.String;
    HtmlTag: Schema.Attribute.Enumeration<['Link', 'Meta', 'Base']> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String;
    Rel: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'Seo';
  };
  attributes: {
    MetaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    MetaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'head-tag-content.head-tag-content': HeadTagContentHeadTagContent;
      'seo.seo': SeoSeo;
    }
  }
}
