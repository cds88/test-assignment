# Test application

## Development

```
pnpm dev
pnpm test
pnpm test:cypress
```

## Code Specs
* React application created with help of Vite(during live-reload only the necesary modules are reloaded in opposition to Webpack which refreshes the whole tree of dependencies)
* Applications split into backend(logic) and frontend(views) - inspired by one of the creator's of Redux Andrew Clark, who split the React applications into frontend and backend side.
* Components split into base(logic) and view
* hooks, routes, locales and everything connected to logic in backend folder
* styles, pages, components and assets in frontend directory
* Frameworks used for styling are Chakra UI (components, responsiveness, inputs) and Tailwind CSS (utility classes)
* Hooks created by me: useProduce
* Forms use react-hook-form library
* The background graphics made by me with help of a tablet
* Tests implemented in Vitest(unit testing) and Cypress (end-to-end)
