import {
	HomePage,
	NotFoundPage
} from '@/pages'


const routes = [{
      path: '/',
      component: HomePage
    },
    {
		// not found handler
		path: '*',
		component: NotFoundPage,
		meta: {layout: "login"}
	}
]

export default routes