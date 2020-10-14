import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Text from 'components/Text'
import { NextSeo } from 'next-seo'
import { unsplashById } from 'utils/unsplash'

const Uses = () => (
  <Layout>
    <NextSeo title="Uses" description="Technologies and tools I use." />
    <Container className="mt-8">
      <div
        className="px-6 py-6 rounded"
        style={{
          backgroundImage: `url(${unsplashById('dpCgZJoneZM', 709, 200)})`,
        }}
      >
        <Heading level="h1" className="mb-2 text-white">
          Uses
        </Heading>
        <Text unstyled className="text-lg text-white">
          Tech and Tools I currently use.
        </Text>
      </div>
    </Container>
    <Container className="mt-6 mb-12">
      <div className="prose max-w-none">
        <div className="flex flex-wrap justify-between w-full md:flex-no-wrap">
          <div className="pr-12">
            <h2>Windows</h2>
            <p>
              <strong>AMD mATX Build</strong>
            </p>
            <ul>
              <li>AMD Ryzen 5 2600X</li>
              <li>be quiet! Dark Rock TF Cooler</li>
              <li>Kingston 16 GB DDR4-2400</li>
              <li>Samsung 500 GB M.2 NVME SSD, 1TB HDD</li>
              <li>AMD Radeon RX590 8GB</li>
            </ul>
            <p>
              <strong>Peripherals</strong>
            </p>
            <ul>
              <li>Logitech G513 Carbon TACTILE Keyboard</li>
              <li>Logitech G502 Mouse</li>
              <li>Samsung 34" Ultrawide Curved Monitor (1440p)</li>
              <li>Rode NT USB Microphone</li>
              <li>Sony WH-1000XM3 Headphones</li>
            </ul>
          </div>
          <div className="">
            <h2>Mac</h2>
            <p>
              <strong>MacBook Pro (Mid 2015)</strong>
            </p>
            <ul>
              <li>15" Retina</li>
              <li>2,5 GHz Quad-Core Intel Core i7</li>
              <li>16 GB 1600 MHz DDR3L</li>
              <li>512 GB SSD</li>
              <li>Radeon R9 M370X GPU</li>
            </ul>
            <p>
              <strong>Peripherals</strong>
            </p>
            <ul>
              <li>Apple Magic Keyboard</li>
              <li>Apple Magic Mouse 2</li>
              <li>Rain Design mStand</li>
            </ul>
          </div>
        </div>
        <h2>Editor & Terminal</h2>
        <ul>
          <li>
            <p>
              <strong>VS Code</strong>
            </p>
            <p>
              I run VS Code on both platforms. On Windows I use WSL2 to
              streamline the experience.
            </p>
            <p>
              The theme is a modified Version of <strong>One Dark Pro</strong>
            </p>
            <img src="/uses-vscode.png" alt="" />
          </li>
          <li>
            <p>
              <strong>iTerm2 & Windows Terminal</strong>
            </p>
            <p>My terminal configuration is synced between OSX and WSL2.</p>
            <p>Oh My Zsh, zplug, p10k</p>
            <img src="/uses-shell.jpg" alt="" />
          </li>
        </ul>
        <h2>Graphic Design & Prototyping</h2>
        <ul>
          <li>Figma</li>
          <li>Affinity Designer</li>
          <li>Affinity Photo</li>
          <li>Affinity Publisher</li>
        </ul>
        <h2>Other Software</h2>
        <strong>Window management</strong>
        <ul>
          <li>Magnet (OSX)</li>
          <li>PowerToys FancyZones (Windows)</li>
        </ul>
        <strong>Notes & Productivity</strong>
        <ul>
          <li>Notion</li>
          <li>Zoho Mail</li>
          <li>Google Calendar</li>
          <li>Google Notes</li>
        </ul>
        <strong>Domains, Hosting & Cloud</strong>
        <ul>
          <li>1&1 Ionos</li>
          <li>Vercel, Netlify</li>
          <li>DigitalOcean, Heroku</li>
        </ul>
      </div>
    </Container>
  </Layout>
)

export default Uses
