import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/syne/600.css'
import '@fontsource/syne/700.css'
import '@fontsource/syne/800.css'
import '@fontsource/jetbrains-mono/400.css'

import {
  createIcons,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Clock3,
  ExternalLink,
  FileText,
  Globe,
  LayoutGrid,
  Mail,
  MapPin,
  Menu,
  MessageCircleQuestion,
  Newspaper,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide'

createIcons({
  icons: {
    ArrowRight,
    BadgeCheck,
    BarChart3,
    BookOpen,
    ChevronDown,
    ChevronRight,
    Clock3,
    ExternalLink,
    FileText,
    Globe,
    LayoutGrid,
    Mail,
    MapPin,
    Menu,
    MessageCircleQuestion,
    Newspaper,
    Search,
    ShieldCheck,
    Sparkles,
    X,
  },
})

const page = document.body.dataset.page
const navToggle = document.querySelector('[data-nav-toggle]')
const navPanel = document.querySelector('[data-nav-panel]')
const yearNodes = document.querySelectorAll('[data-year]')

for (const node of yearNodes) node.textContent = String(new Date().getFullYear())

if (navToggle && navPanel) {
  navToggle.addEventListener('click', () => {
    const isHidden = navPanel.classList.toggle('hidden')
    navToggle.setAttribute('aria-expanded', String(!isHidden))
    createIcons({ icons: { Menu, X }, root: navToggle })
  })

  navPanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        navPanel.classList.add('hidden')
        navToggle.setAttribute('aria-expanded', 'false')
        createIcons({ icons: { Menu, X }, root: navToggle })
      }
    })
  })
}

const currentPath = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/'
document.querySelectorAll('[data-nav-link]').forEach((link) => {
  const href = link.getAttribute('href') || ''
  const normalized = new URL(href, window.location.origin).pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/'
  if (normalized === currentPath) link.setAttribute('aria-current', 'page')
})

if (page === 'article') {
  const tocLinks = document.querySelectorAll('[data-toc-link]')
  const sections = [...document.querySelectorAll('[data-anchor]')]

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (!visible.length) return
      const id = visible[0].target.id
      tocLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${id}`
        link.classList.toggle('bg-emerald-50', active)
        link.classList.toggle('text-slate-950', active)
        link.classList.toggle('text-slate-600', !active)
      })
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0.08 })

    sections.forEach((section) => observer.observe(section))
  }
}
