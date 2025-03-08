import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { Metadata } from 'next'
import { MacbookDisplay } from './components/macbook-display'

export const metadata: Metadata = {
  title: "Uses",
  description: "Technologies and tools I use."
}

const Uses = () => (
  <>
    <Container className="mt-8">
      <Heading level="h1" className="mb-2 dark:text-white">
        Uses
      </Heading>
      <Text unstyled className="mb-12 text-lg dark:text-white">
        I currently develop on an Apple M2 MacBook Pro
      </Text>
      <div className='w-full relative hidden dark:flex'>
        <MacbookDisplay />
      </div>
    </Container>
    <Container className="relative z-10 mt-6 mb-12">
      <Heading level='h2'>
        Software
      </Heading>
      <div className="prose dark:prose-invert max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 w-full">
          <div>
            <Heading level='h3'>Development</Heading>
            <ul>
              <li>
                <a href='https://github.com/JoschuaSchneider/dotfiles/tree/main/nvim/.config/nvim' target='_blank' rel="noopener noreferrer">neovim</a>
              </li>
              <li>JetBrains Rider</li>
              <li>
                <a href='https://orbstack.dev/' target='_blank' rel="noopener noreferrer">Orbstack</a>
              </li>
              <li>
                <a href='https://iterm2.com/' target='_blank' rel="noopener noreferrer">iTerm 2</a>
              </li>
            </ul>
          </div>
          <div className="">
            <Heading level='h3'>Productivity</Heading>
            <ul>
              <li>
                <a href='https://raycast.com' target='_blank' rel="noopener noreferrer">Raycast + AI</a>
              </li>
              <li>
                <a href="https://shottr.cc/" target='_blank' rel="noopener noreferrer">Shottr</a>
              </li>
              <li>
                <a href="https://karabiner-elements.pqrs.org/" target='_blank' rel="noopener noreferrer">Karabiner Elements</a>
              </li>
            </ul>
          </div>

          <div className="">
            <Heading level='h3'>Terminal</Heading>
            <ul>
              <li>
                <a href='https://www.zsh.org/' target='_blank' rel="noopener noreferrer">zsh</a>
              </li>
              <li>
                <a href='https://github.com/zimfw/zimfw' target='_blank' rel="noopener noreferrer">zimfw</a>
              </li>
              <li>
                <a href="https://github.com/ajeetdsouza/zoxide" target='_blank' rel="noopener noreferrer">zoxide</a>
              </li>
              <li>
                <a href="https://github.com/Schniz/fnm" target='_blank' rel="noopener noreferrer">fnm</a>
              </li>
              <li>
                <a href="https://github.com/JoschuaSchneider/klatsche" target='_blank' rel="noopener noreferrer">klatsche</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </>
)

export default Uses
