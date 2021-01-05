const indexSublinks = [
  { href: '/#installation', text: 'Installation' },
  { href: '/#usage', text: 'Usage' },
]

export default {
  logo: (
    <img
      src="/logo.svg"
      alt="Documentatin site logo"
      width="160"
      height="100"
    />
  ),
  links: [
    {
      href: '/',
      text: 'Getting Started',
      expand: true,
      subLinks: indexSublinks,
    },
    { href: '/sidebar', text: 'Sidebar' },
    { href: '/styling', text: 'Styling' },
  ],
  footer: (
    <a target="_blank" href="https://github.com/darkcris1">
      Copyright © Darkcris1
    </a>
  ),
}
