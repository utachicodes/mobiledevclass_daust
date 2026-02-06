# MOBILE DEVELOPMENT Course (with React Native) 
## DAUST SPRING 2026
## Lecture 3 : Navigation in React Native

---

## Goals of the Lecture
- Understanding the importance of navigation in mobile applications
- Learning how to implement navigation in React Native using Expo Router
- Understanding the different types of navigation (stack, tabs, drawer)
- Understanding how to pass data between screens
- Understanding how to handle navigation state and screen lifecycle

---

## Part 1: Understanding Mobile Navigation

## 1. Why Navigation Matters in Mobile Applications

Unlike web applications, mobile apps are **stateful by nature**. 

`(the app remembers exactly where you are and what you are doing on previous screens, keeping them "alive" in the background while you navigate forward)`

Users move between screens, expect smooth transitions, and rely heavily on navigation metaphors such as back gestures, tabs, and drawers. Navigation is therefore not just a UI concern—it directly affects **usability, performance, and application architecture**.

### 1.1 The Mobile Navigation Paradigm

Mobile applications present unique navigation challenges that differ significantly from web applications:

**Web Applications:**
- URL-based navigation
- Browser back/forward buttons
- Stateless by default (each page load is fresh)
- Multiple windows/tabs possible

**Mobile Applications:**
- No URL bar (from user perspective)
- Platform-specific back gestures and buttons
- Stateful by nature (screens stay "alive" in memory)
- Single-window experience
- Navigation is part of the UX, not separate from it

This fundamental difference means that **navigation in mobile apps is not just routing—it's a core part of the user experience** that affects performance, memory management, and user flow.

---

### 1.2 What Navigation Actually Manages

When we talk about navigation in React Native, we're managing several interconnected concerns:

1. **Screen Hierarchy**: Which screens exist and how they relate to each other
2. **Navigation State**: Where the user currently is and how they got there
3. **Transitions**: How screens appear and disappear (animations)
4. **Screen Lifecycle**: When screens mount, unmount, focus, and blur
5. **Data Flow**: How information passes between screens
6. **Platform Integration**: Hardware back buttons, gestures, and OS-level behaviors

A good navigation system handles all of these concerns gracefully.

---

### 1.3 The React Native Navigation Landscape

React Native does **not** include navigation out of the box. 

We have 
 main libraries that the community has converged on :


**React Navigation** as the standard library, which provides:
- Platform-aware navigation primitives
- JavaScript-based implementation (easier to customize)
- Extensive ecosystem and documentation

**Expo Router** is built on top of React Navigation and adds:
- File-system-based routing (like Next.js)
- Automatic route generation
- Type-safe navigation
- Reduced boilerplate

**For this course, we'll focus on Expo Router** as it represents the modern, recommended approach for new applications.

---

## Part 2: The Three Core Navigation Patterns

Before diving into code, you need to understand the three fundamental navigation patterns. These are not React Native inventions—they're mobile platform conventions found in iOS and Android.

---

### 2.1 Stack Navigation: Linear Journeys

**Concept**: Screens are organized as a stack (LIFO: Last In, First Out). When you navigate forward, a new screen is "pushed" onto the stack. When you go back, the current screen is "popped" off.

**Visual Model**:
```
[Screen C]  ← Current screen (top of stack)
[Screen B]  ← Previous screen (hidden but alive in memory)
[Screen A]  ← Root screen (hidden but alive in memory)
```

**When to Use**:
- Linear workflows: Login → Home → Product List → Product Detail
- Drill-down interfaces: Folders → Subfolder → File
- Multi-step processes: Checkout → Shipping → Payment → Confirmation

**Key Characteristics**:
- Only the top screen is visible
- Built-in back navigation (gesture or button)
- Screens maintain state when you navigate back
- Platform-specific animations (slide on iOS, various on Android)

**Example User Flow**:
```
User opens app → Home Screen
User taps "Products" → Products Screen (Home still in memory below)
User taps "iPhone 15" → Product Detail Screen (Home and Products in memory)
User presses back → Product Detail pops off, back to Products
```

---

### 2.2 Tab Navigation: Parallel Sections

**Concept**: Multiple top-level screens that users can switch between freely. Each tab represents an independent section of your app.

**Visual Model**:
```
┌─────────────────────────────────┐
│                                 │
│     Content Area                │
│     (Current Tab Screen)        │
│                                 │
├─────────────────────────────────┤
│ [Home] [Search] [Cart] [Profile]│ ← Tab Bar (always visible)
└─────────────────────────────────┘
```

**When to Use**:
- Primary app sections: Home, Search, Notifications, Profile
- When users need quick access to different areas
- When sections are of equal importance

**Key Characteristics**:
- Tab bar is persistently visible
- Non-linear navigation (jump between tabs freely)
- Each tab can have its own navigation stack
- Tabs typically preserve their state when switching

**Example User Flow**:
```
User is on Home tab → Viewing feed
User taps Search tab → Switches to Search (Home state preserved)
User taps Profile tab → Switches to Profile
User taps Home tab → Returns to feed exactly where they left off
```

**Important Design Rule**: Tabs should represent **top-level sections**, not nested screens.

---

### 2.3 Drawer Navigation: Hidden Menu

**Concept**: A side panel that slides in from the edge of the screen, revealing additional navigation options.

**Visual Model**:
```
Closed:                    Open:
┌──────────────┐          ┌─────────┬──────────┐
│              │          │ Home    │          │
│              │   →      │ Settings│  Main    │
│   Main       │          │ About   │  Content │
│   Content    │          │ Logout  │  (dimmed)│
│              │          └─────────┴──────────┘
```

**When to Use**:
- Apps with many sections (more than 5)
- Secondary navigation that doesn't need constant access
- Settings, account management, less frequently accessed features

**Key Characteristics**:
- Hidden by default (saves screen space)
- Typically opened by hamburger menu (☰) or swipe gesture
- Can contain extensive navigation options
- Often combined with tabs or stack navigation

**Example User Flow**:
```
User opens drawer → Sees menu options
User taps "Settings" → Navigates to Settings screen, drawer closes
User opens drawer again → Taps "Logout" → Returns to login
```

**Design Consideration**: Drawers have **discoverability issues**—users may not know they exist. Use them for secondary features, not primary navigation.

---

### 2.4 Combining Navigation Patterns

Real apps rarely use just one pattern. They combine them hierarchically:

**Common Pattern: Tabs + Stacks**
```
Tab Bar (Bottom Tabs)
├─ Home Tab
│  └─ Stack Navigator
│     ├─ Home Screen
│     ├─ Article Detail Screen
│     └─ Comments Screen
├─ Search Tab
│  └─ Stack Navigator
│     ├─ Search Screen
│     └─ Results Screen
└─ Profile Tab
   └─ Stack Navigator
      ├─ Profile Screen
      └─ Settings Screen
```

Each tab has its own navigation stack, maintaining independent history.

---

## Part 3: Expo Router Fundamentals

Now that we have seen the concepts, let's see how they're implemented in Expo Router.

---

### 3.1 The File-System Routing Concept

Expo Router uses your **project folder structure** to automatically generate routes. This is called "file-system routing."

**Principle**: The file path = the route path

```
app/
├─ index.tsx          → Route: /          (Home screen)
├─ about.tsx          → Route: /about
├─ contact.tsx        → Route: /contact
└─ profile/
   ├─ index.tsx       → Route: /profile
   └─ settings.tsx    → Route: /profile/settings
```

**Advantages**:
- No manual route configuration needed
- Routes are immediately visible from folder structure
- Easier to refactor and maintain
- Type-safe navigation (TypeScript knows what routes exist)

---

### 3.2  Example

#### Project Structure
```
my-app/
├─ app/
│  ├─ _layout.tsx     ← Root layout (defines navigation structure)
│  ├─ index.tsx       ← Home screen
│  └─ about.tsx       ← About screen
├─ package.json
└─ app.json
```

#### Root Layout (`app/_layout.tsx`)

The layout file defines **how navigation works** in this directory.

```tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: 'Home' }} 
      />
      <Stack.Screen 
        name="about" 
        options={{ title: 'About Us' }} 
      />
    </Stack>
  );
}
```

**What's happening**:
- `<Stack>` creates a stack navigator
- Each `<Stack.Screen>` registers a route
- `name` corresponds to the filename (without extension)
- `options` configures the screen (title, header style, etc.)

#### Home Screen (`app/index.tsx`)

```tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home</Text>
      <Button 
        title="Go to About" 
        onPress={() => router.push('/about')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
```

**Key Points**:
- `router.push('/about')` navigates to the about screen
- The route path matches the file path
- User can press back to return to Home

#### About Screen (`app/about.tsx`)

```tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text>This is the about page</Text>
      <Button 
        title="Go Back" 
        onPress={() => router.back()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
```

**Navigation Flow**:
```
User on Home → Presses "Go to About" → About screen slides in
User on About → Presses "Go Back" or swipes → About slides out, Home revealed
```

---

### 3.3 Navigation Methods

Expo Router provides several ways to navigate:

```tsx
import { router } from 'expo-router';

// Push a new screen onto the stack
router.push('/about');

// Replace current screen (can't go back)
router.replace('/login');

// Go back one screen
router.back();

// Navigate and specify it can go back
router.navigate('/about');

// Go to root of current navigator
router.dismissAll();
```

**When to Use Each**:

- **`push()`**: Normal forward navigation (adds to history)
- **`replace()`**: After login/logout (don't let user go back)
- **`back()`**: Explicit back navigation (usually not needed, platform handles it)
- **`navigate()`**: Smart navigation (goes back if screen exists in stack, otherwise pushes)

---

## Part 4: Passing Data Between Screens

Navigation isn't just moving between screens—it's about moving data too.

---

### 4.1 Using Route Parameters

Route parameters let you pass data in the URL, similar to web query strings.

#### Sending Data

```tsx
// In the source screen
import { router } from 'expo-router';

function ProductList() {
  const handleProductPress = (productId: number) => {
    router.push({
      pathname: '/product',
      params: { id: productId, name: 'iPhone 15' }
    });
  };

  return (
    <Button 
      title="View Product" 
      onPress={() => handleProductPress(42)} 
    />
  );
}
```

#### Receiving Data

```tsx
// In app/product.tsx
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProductScreen() {
  const { id, name } = useLocalSearchParams();

  return (
    <View>
      <Text>Product ID: {id}</Text>
      <Text>Product Name: {name}</Text>
    </View>
  );
}
```

**Important Notes**:
- Parameters are always strings (convert if needed: `Number(id)`)
- Don't pass large objects or sensitive data
- Parameters appear in the URL/route

---

### 4.2 Dynamic Routes

For common patterns like product details, user profiles, etc., use dynamic route segments.

#### File Structure
```
app/
├─ products/
│  └─ [id].tsx        ← Dynamic segment (matches any value)
```

#### Dynamic Screen (`app/products/[id].tsx`)

```tsx
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <Text>Viewing product: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
```

#### Navigating to Dynamic Routes

```tsx
// Method 1: Direct path
router.push('/products/42');

// Method 2: Parameterized
router.push({
  pathname: '/products/[id]',
  params: { id: '42' }
});
```

Both navigate to the same screen with `id = "42"`.

---

### 4.3 When NOT to Use Route Parameters

**Avoid route parameters for**:
- Large data objects (pass IDs instead, fetch data in destination screen)
- Sensitive information (tokens, passwords)
- Functions or non-serializable data


---

## Part 5: Implementing Tab Navigation

Tabs are one of the most common navigation patterns. Here's how to implement them properly.

---

### 5.1 Creating a Tab Layout

Use a **group directory** with parentheses to create a tab navigator:

```
app/
├─ (tabs)/
│  ├─ _layout.tsx     ← Tab navigator configuration
│  ├─ home.tsx        ← Home tab
│  ├─ search.tsx      ← Search tab
│  └─ profile.tsx     ← Profile tab
```

**Why `(tabs)`?** The parentheses make it a **route group**—it organizes files but doesn't add `/tabs/` to the URL.

---

### 5.2 Tab Layout Configuration (`app/(tabs)/_layout.tsx`)

```tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

**Key Configuration Options**:
- `tabBarActiveTintColor`: Color of active tab
- `tabBarIcon`: Icon component for each tab
- `headerShown`: Whether to show header (often false with tabs)

---

### 5.3 Tab Screens

Each tab is just a regular screen component:

```tsx
// app/(tabs)/home.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});
```

---

### 5.4 Combining Tabs with Stacks

Each tab can have its own stack navigator for deeper navigation:

```
app/
├─ (tabs)/
│  ├─ _layout.tsx
│  ├─ home/
│  │  ├─ _layout.tsx      ← Stack navigator for Home tab
│  │  ├─ index.tsx        ← Home tab root
│  │  └─ article/
│  │     └─ [id].tsx      ← Article detail (stacked on home)
│  ├─ search.tsx
│  └─ profile.tsx
```

**Home Tab Stack Layout** (`app/(tabs)/home/_layout.tsx`):

```tsx
import { Stack } from 'expo-router';

export default function HomeStack() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: 'Home Feed' }} 
      />
      <Stack.Screen 
        name="article/[id]" 
        options={{ title: 'Article' }} 
      />
    </Stack>
  );
}
```

Now when you navigate to an article from the Home tab, it pushes onto that tab's stack. **The tab bar stays visible** (unless you configure otherwise).

---

## Part 6: Screen Lifecycle and Focus

Understanding when screens mount, unmount, focus, and blur is critical for performance and correctness.

---

### 6.1 React Lifecycle vs. Navigation Lifecycle

**React Lifecycle**:
- `useEffect` runs when component mounts
- Component unmounts when removed from tree

**Navigation Lifecycle**:
- Screens can be **mounted but not visible** (in stack below current screen)
- Screens can **gain/lose focus** without mounting/unmounting

**The Problem**:
```tsx
// ❌ This runs only once when screen first mounts
useEffect(() => {
  fetchData();
}, []);

// If you navigate away and back, fetchData() doesn't run again!
```

---

### 6.2 Using `useFocusEffect`

The `useFocusEffect` hook runs code when a screen **comes into focus**:

```tsx
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';

export default function FeedScreen() {
  const [posts, setPosts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      // This runs every time the screen gains focus
      fetchPosts().then(setPosts);

      // Optional cleanup when screen loses focus
      return () => {
        console.log('Screen blurred');
      };
    }, [])
  );

  return (
    <FlatList data={posts} ... />
  );
}
```

**When to Use**:
- Refreshing data when screen appears
- Starting/stopping subscriptions
- Analytics tracking
- Starting/stopping animations or timers

---

### 6.3 Checking Focus State

Sometimes you need to know **right now** if a screen is focused:

```tsx
import { useIsFocused } from 'expo-router';

export default function VideoScreen() {
  const isFocused = useIsFocused();

  return (
    <Video
      source={videoSource}
      shouldPlay={isFocused} // Only play when screen is visible
    />
  );
}
```

---

## Part 7: Drawer Navigation

Drawers are less common than stacks and tabs, but useful for certain app structures.

---

### 7.1 Creating a Drawer

```
app/
├─ _layout.tsx        ← Root layout with drawer
├─ home.tsx
├─ settings.tsx
└─ profile.tsx
```

**Root Layout with Drawer** (`app/_layout.tsx`):

```tsx
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="home"
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: 'Settings',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
```

---

### 7.2 Opening the Drawer Programmatically

```tsx
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Button
      title="Open Menu"
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );
}
```

**Note**: Drawers typically open via:
- Swipe gesture from screen edge
- Header hamburger button (automatic)
- Programmatic call (shown above)

---

## Part 8: Platform-Specific Behavior

iOS and Android have different navigation conventions. Good apps respect these differences.

---

### 8.1 Key Differences

| Aspect | iOS | Android |
|--------|-----|---------|
| **Back Navigation** | Swipe from left edge | Hardware/gesture back button |
| **Default Animation** | Slide from right | Slide from bottom (or fade) |
| **Header Style** | Centered title, large on scroll | Left-aligned title |
| **Tab Bar Icons** | Outlined when inactive | Filled when active |
| **Modal Presentation** | Slides up from bottom | Depends on context |

---

### 8.2 Platform-Specific Configuration

Expo Router automatically applies platform defaults, but you can customize:

```tsx
import { Platform } from 'react-native';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'ios' ? '#fff' : '#6200ee',
        },
        headerTintColor: Platform.OS === 'ios' ? '#007AFF' : '#fff',
        animation: Platform.OS === 'ios' ? 'slide_from_right' : 'fade',
      }}
    />
  );
}
```

---


### 9 Deep Linking

Expo Router supports deep linking automatically:

```tsx
// If your app is at myapp://
// Then myapp://products/42 navigates to app/products/[id].tsx with id=42
```

Configure in `app.json`:
```json
{
  "expo": {
    "scheme": "myapp"
  }
}
```

Users can open your app from links in emails, SMS, web, etc.

---

##  Links
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [Official Expo Router YouTube Playlist](https://www.youtube.com/playlist?list=PLsXDmrmFV_AT17JDf-otXSNE_eH7s0uDD)
- [React Navigation Fundamentals](https://reactnavigation.org/docs/getting-started)
- [iOS Human Interface Guidelines - Navigation](https://developer.apple.com/design/human-interface-guidelines/navigation)
- [Material Design - Navigation](https://m3.material.io/components/navigation-drawer/overview)
