export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602bcdafe592842a2ea8152c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-oakatgrq',
                  apiId: '3ab567ba-ad42-48c3-b8ef-2f04fb73af6d'
                },
                {
                  buildHookId: '602bcdaf6bcc7728469fa037',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kjh5e6zi',
                  apiId: 'b560ca89-f081-4e7b-a82e-e1b7626b1e66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rhwinter/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kjh5e6zi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
