import type { AppType } from 'next/dist/shared/lib/utils'
import type { AppRouter } from '../server/routers/app'
import { withTRPC } from '@trpc/next'
import { loggerLink } from '@trpc/client/links/loggerLink'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import superjson from 'superjson'
import '../styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc'

    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url
      })
    ]

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 1
          }
        }
      },
      // headers() {
      //   if (ctx?.req) {
      //     return {
      //       ...ctx.req.headers,
      //       'x-ssr': '1'
      //     }
      //   }
      //   return {}
      // },
      links,
      transformer: superjson
    }
  },
  ssr: false
})(MyApp)
