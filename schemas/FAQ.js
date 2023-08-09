// schemas/FAQ.js
export default {
    name: 'faq',
    type: 'document',
      title: 'Frequently Asked Questions',
    fields: [
        {
            name: 'question',
            type: 'string',
            title: 'Question'
        },
        {
            name: 'answer',
            type: 'text',
            title: 'Answer'
        },
        
    ]
  }