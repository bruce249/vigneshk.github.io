import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'
import Providers from '@/components/Providers'
import type { Metadata, Viewport } from 'next'
import { Bodoni_Moda, Familjen_Grotesk, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const sans = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const display = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const themeBoot = `(function(){function paint(theme){document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;var buttons=document.querySelectorAll('[data-set-theme]');for(var i=0;i<buttons.length;i++){var on=buttons[i].getAttribute('data-set-theme')===theme;buttons[i].setAttribute('aria-pressed',on?'true':'false');buttons[i].className=on?'text-accent':'text-muted hover:text-fg';}}function apply(theme){paint(theme);try{localStorage.setItem('theme',theme);}catch(e){}}var theme='dark';try{var stored=localStorage.getItem('theme');if(stored==='light'||stored==='dark')theme=stored;}catch(e){}paint(theme);document.addEventListener('DOMContentLoaded',function(){paint(theme);});document.addEventListener('click',function(event){var node=event.target&&event.target.closest&&event.target.closest('[data-set-theme]');if(!node)return;var next=node.getAttribute('data-set-theme');if(next!=='light'&&next!=='dark')return;apply(next);});})();`

export const metadata: Metadata = {
  title: 'Vignesh Kanike',
  description:
    'Student at IIT Delhi. AI safety, interpretability, and generative engine optimization.',
  authors: [{ name: 'Vignesh Kanike' }],
  icons: { icon: '/favicon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#0c090b',
  colorScheme: 'dark light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${display.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-bg focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Providers>
          <SiteNav />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}
