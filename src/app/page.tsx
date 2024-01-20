import { Header } from '@/components/header'
import { ExternalLink } from '@/components/link'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll'

const Home = () => {
  return (
    <ScrollArea className="flex flex-col">
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" className="lg:hidden" />
          <p>
            {`Hey, I'm Dan. I'm a `}
            <a
              href="https://leerob.io/blog/product-engineers"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Product Engineer
            </a>{' '}
            currently playing the internet at{' '}
            <ExternalLink
              href="https://www.studentbeans.com/uk"
              className="text-violet-500 hover:text-violet-600"
            >
              StudentBeans
            </ExternalLink>
            .
          </p>

          <p>
            {/* I develop things as a Senior Javascript Software Engineer at
            Bitvavo. Previously, I worked as a Senior Frontend Software Engineer
            at heycar, Frontend Software Engineer at Yemeksepeti, Fullstack
            Software Engineer at Sistas, Mobile Developer at Tanbula, and
            Specialist at Apple. */}
          </p>
        </div>
      </div>
      <Header title="Dan Cargill" />
    </ScrollArea>
  )
}

export default Home
