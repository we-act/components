// We only need to import the modules necessary for initial render
import AppLayout from './AppLayout'

import IndexPage from './views/IndexPage'
import ComponentPage from './views/ComponentPage'
import About from './views/About'

const createRoutes = {
    path: '/',
    component: AppLayout,
    indexRoute: {
        component: IndexPage
    },
    childRoutes: [
        {
            path: 'about',
            component: About
        },
        {
            path: 'pageFolder/:page',
            component: IndexPage
        },
        {
            path: 'component/:ComponentPagePath',
            component: ComponentPage
        }
        // ,
        // {
        //     path: 'page/:page',
        //     component: AppPage
        // }
    ]
}


export default createRoutes
