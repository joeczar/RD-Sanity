export default {
    name: 'resource',
  type: 'document',
  title: 'Resource',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: 'What is this file?'
    },
    {
        name: 'file',
        title: 'File',
        type: 'reference',
        to: [{type: 'upload'}]
    }
  ]
}