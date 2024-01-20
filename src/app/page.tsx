import { Header } from '@/components/header'
import { ExternalLink } from '@/components/link'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll'

const Home = () => {
  return (
    <ScrollArea className="flex flex-col">
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" className="hidden" />
          <p> {`Hey, I'm Dan.`}</p>
          <p>
            {`I'm a `}
            <ExternalLink
              href="https://leerob.io/blog/product-engineers"
              className="hover:text-gray-600"
            >
              Product Engineer
            </ExternalLink>{' '}
            currently playing the internet at{' '}
            <ExternalLink
              href="https://www.studentbeans.com/uk"
              className="text-violet-500 hover:text-violet-600"
            >
              StudentBeans
            </ExternalLink>
          </p>

          <p></p>

          <p>
            {/* I develop things as a Senior Javascript Software Engineer at
            Bitvavo. Previously, I worked as a Senior Frontend Software Engineer
            at heycar, Frontend Software Engineer at Yemeksepeti, Fullstack
            Software Engineer at Sistas, Mobile Developer at Tanbula, and
            Specialist at Apple. */}
          </p>
        </div>
      </div>
      <Header />
    </ScrollArea>
  )
}

export default Home
