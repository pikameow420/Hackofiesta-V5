import React from 'react'
import { Footer } from '@lobehub/ui';


const columns = [
    {
      items: [
        {
          description: 'AIGC Components',
          openExternal: true,
          title: '🤯 Lobe UI',
          url: 'https://github.com/lobehub/lobe-ui',
        },
        {
          description: 'Chatbot Client',
          openExternal: true,
          title: '🤯 Lobe Chat',
          url: 'https://github.com/lobehub/lobe-chat',
        },
        {
          description: 'Node Flow Editor',
          openExternal: true,
          title: '🤯 Lobe Flow',
          url: 'https://github.com/lobehub/lobe-flow',
        },
      ],
      title: 'Resources',
    },
    {
      items: [
        {
          description: 'AI Commit CLI',
          openExternal: true,
          title: '💌 Lobe Commit',
          url: 'https://github.com/lobehub/lobe-commit',
        },
        {
          description: 'Lint Config',
          openExternal: true,
          title: '📐 Lobe Lint',
          url: 'https://github.com/lobehub/lobe-lint',
        },
      ],
      title: 'More Products',
    },
  ];

const Footerr = () => {
  return (
    <div className=''>
        <Footer bottom="Copyright © 2022" columns={columns} />
    </div>
  )
}

export default Footerr