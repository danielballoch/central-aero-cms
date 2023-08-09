// schemas/EngineeringServices.js
export default {
    name: 'engineering-services',
    type: 'document',
      title: 'Engineering Services',
    fields: [
        {
            name: 'service_title',
            type: 'string',
            title: 'Service Title'
        },
        {
            name: 'service_path',
            type: 'string',
            title: 'Service Path'
        },
        {
            name: 'blurb',
            type: 'text',
            title: 'Blurb'
        },
        {
            name: 'service_image',
            type: 'image',
            title: 'Service Image'
        },
        {
            name: 'service_content',
            type: 'array',
            title: 'Content',
            of: [{type: 'block'}]
        },
    ]
  }