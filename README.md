# react-pwa

## App always available

### Introduction

In this section we will make your app always available, no matter what the status of your internet connection is.

### Steps

#### Register the service worker
By default, service workers don’t become active and available for use until you register them. To learn more, you can read up on the fundamentals of the service worker life cycle.

Go to the src/index.tsx file in your project and find the following lines of code:

```typescript
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
```

To register the service worker for use, simply modify the last line so that it looks like the following:

```ts
serviceWorkerRegistration.register();
```

The src/service-worker.ts file is now registered and ready to play its key role in providing an offline-first experience for your users.

- 

## Features to include in offline-ready web apps

- [ ]  App always available
- [ ] Online runtime data thoughtfully collected
- [ ] Offline runtime data safely preserved
- [ ] Connection failures do not break the flow
- [ ] Updates of version (implicit and explicit)
- [ ] Platform features for the win
