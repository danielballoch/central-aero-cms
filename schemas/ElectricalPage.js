export default {
    name: 'electricalPage',
    type: 'document',
    title: 'Electrical Page Main',
    fields: [
        {
            name: 'hero_title',
            type: 'string',
            title: 'Hero Title'
        },
        {
            name: 'banner_text',
            type: 'string',
            title: 'Banner Text'
        },
        {
            name: 'components_section_title',
            title: 'Components Section Title',
            type: 'string'
        },
        {
            name: 'components_section_text',
            title: 'Components Section Text',
            type: 'array',
            of: [{type: 'block'}]
        },
    ]
  }