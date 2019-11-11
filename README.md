# What's Next - Angular Code Splitting & Hot Module Injection

- Demo purpose for What's next conference

## Requirements
- node >= 10

## How to use ?

- start app
    - ```npm run start```

- build modules
    - ```npm run build-react```
    - ```npm run build-vue```
    - module will be copy to assets
    - app will reload on copy

- navigate to **/react** or **/vue** to see lazyload on routing
- all modules main component will be lazyload into root zone container


# Misc

- execute ```npm run pre-rollup``` if you made change in /scripts/rollup.ts