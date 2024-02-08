# This a demo project for myself to learn some js
## Down below you will find notes and findings on how stuff works

### Creating a project

```shell
#install next js
npx create-next-app@latest my-app --typescript --tailwind --eslint

#add ui library
npx shadcn-ui@latest init  

#import ui components
npx shadcn-ui@latest add button  

#install next theme
npm install next-themes
```

### Run

```shell
npm run dev
```

### Sources

https://ui.shadcn.com/docs \
https://clerk.com/docs/quickstarts/
https://clerk.com/docs/references/nextjs/custom-signup-signin-pages

### Notes

- promises are shit
- js errors are shit
- forget debugging, but i am probably just too stupid
- for some reason i dont get jet, everyone is exclusively using lambda functions for some obscure reason
- prisma orm worked pretty great
- the autocompletion and syntax checking is pretty good
- the directory based routing is garbage!
- ALWAYS make sure to await your stuff because it wont give you an error or even a warning, it will just strait up "ignore"  your code
- the call stacks are not very useful, only show stuff in node_modules so you dont know there the mistake actually is
- always refresh 11 times because 10 times might not be enough
- prepare for some wheird mix of json, lambdas, html and plain js -> garbage
- even though working with it is a real pain, as long as it doesnt fail you it works pretty good
- the hot reloading part is GREAT
- installing modules worked pretty good for me
- you get zero info on what it does unless you spend a lifetime studying how its source works
- you might end up with a thrid of your code being includes because 99.9% of the code that is being run is NOT written by you, go back to writing your own os where its a chilly 0% of others code!
- the styling with tailwind is not perfect but its decent
