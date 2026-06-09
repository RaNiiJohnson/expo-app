# 📱 Learning Expo — Step by Step

This is my personal repository for learning [Expo](https://expo.dev) from scratch, step by step. I use it to experiment, practice, and build my understanding of mobile development with React Native and Expo.

> **Note:** This project was bootstrapped with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) and is actively evolving as I progress through my learning journey.

---

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Start the development server**

   ```bash
   npx expo start
   ```

From the terminal output, you can open the app in:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go) — a sandbox app for quick prototyping

---

## 🧭 Project Structure

This project uses [file-based routing](https://docs.expo.dev/router/introduction) via Expo Router. All screens live inside the **`app/`** directory.

To reset and start fresh:

```bash
pnpm reset-project
```

This moves the starter code to **`app-example/`** and gives you a clean **`app/`** directory to work in.

---

## 🛠️ Setup & Tooling

| Tool                | Command                                                                           |
| ------------------- | --------------------------------------------------------------------------------- |
| Linting (ESLint)    | `pnpm expo lint`                                                                  |
| Unit Testing (Jest) | See [Unit Testing guide](https://docs.expo.dev/develop/unit-testing/)             |
| TypeScript          | Pre-configured — see [TypeScript guide](https://docs.expo.dev/guides/typescript/) |

---

## 📚 Resources

- [Expo Docs](https://docs.expo.dev/) — fundamentals and advanced guides
- [Step-by-step Tutorial](https://docs.expo.dev/tutorial/introduction/) — build an app that runs on Android, iOS, and web
- [Expo on GitHub](https://github.com/expo/expo)
- [Expo Discord Community](https://chat.expo.dev)
