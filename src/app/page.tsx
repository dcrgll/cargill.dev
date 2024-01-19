import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { ScrollArea } from '@/components/scroll'

const Home = () => {
  return (
    <ScrollArea className="flex flex-col">
      <Button>Click Me</Button>
      <Header title="Dan Cargill" />
    </ScrollArea>
  )
}

export default Home
