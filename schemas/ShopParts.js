export default {
    name: 'shop_parts',
    type: 'document',
    title: 'Shop Parts Page',
    fields: [
        {
            name: 'form_title',
            title: 'Form Title',
            type: 'string'
        },
        {
            name: 'form_text',
            title: 'Form Text',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'section1_title',
            title: 'Section 1 Title',
            type: 'string'
        },
        {
            name: 'show_section1',
            title: 'Show Section 1',
            type: 'boolean'
        },
        {
            name: 'section2_title',
            title: 'Section 2 Title',
            type: 'string'
        },
        {
            name: 'show_section2',
            title: 'Show Section 2',
            type: 'boolean'
        },
    ]
  }