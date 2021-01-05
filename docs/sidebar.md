--vars
title: Sidebar Configuration
--

# @(title)

- **sidebar.config.js** configure this file

# Example

```javascript
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
  ],
  footer: (
    <a target="_blank" href="https://github.com/darkcris1">
      Copyright © Darkcris1
    </a>
  ),
}
```

# Options

| options | type                     | description               |
| ------- | ------------------------ | ------------------------- |
| logo    | React.Element \| string? | add a logo to sidebar     |
| links   | array[]                  | add links to the sidebar  |
| footer  | React.Element \| string? | add footer to the sidebar |

**links: [{options?}]**

| options    | type                     | default | description                             |
| ---------- | ------------------------ | ------- | --------------------------------------- |
| href       | string?                  | #       | name of the route                       |
| subLinks   | array[]                  | null    | add links to the sidebar                |
| text       | string? \| React.Element | null    | add footer to the sidebar               |
| expandable | boolean?                 | true    | if you want that link to be collapsable |
| expand     | boolean?                 | false   | initial value of expand                 |

> You can also add **all** the **attributes** of anchor tag in links options
