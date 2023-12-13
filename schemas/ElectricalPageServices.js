export default {
    name: 'electricalPageServices',
    type: 'document',
    title: 'Electrical Page Services',
    fields: [
        {
            name: 'service_title',
            type: 'string',
            title: 'Service Title'
        },
        {
            name: 'service_text',
            title: 'Service Text',
            type: 'array',
            of: [{type: 'block'}]

        },
        {
            name: 'service_image',
            type: 'image',
            title: 'Service Image'
        },
    ]
  }