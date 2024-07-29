import {
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Layout from './shared/layout';
import Guesser from './pages/guesser';
import { NotFoundPage } from './pages/404-page';

const layoutRoute = createRootRoute({
  component: () => (
    <>
      <Layout />
      {ENV === 'local' ? <TanStackRouterDevtools />: <></>}
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  component: function Index() {
    return (
      <Guesser/>
    )
  },
})



const routeTree = layoutRoute.addChildren([indexRoute])

const router = createRouter({ routeTree, defaultNotFoundComponent: NotFoundPage})

export default router;
