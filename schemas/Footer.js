export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
        {
            name: 'footer_text',
            title: 'Footer Text',
            type: 'array',
            of: [{type: 'block'}]
        },
    ]
  }