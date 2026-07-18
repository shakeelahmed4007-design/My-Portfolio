# Shakeel Ahmed — Portfolio

React + Tailwind CSS portfolio website (dark navy / cyan theme).

## Structure

```
src/
  App.jsx                 # Main app, combines all sections
  main.jsx                # React entry point
  index.css               # Tailwind imports
  components/
    NavBar.jsx
    Hero.jsx               # Home section
    About.jsx
    Journey.jsx
    Skills.jsx
    Projects.jsx
    Certificates.jsx
    Contact.jsx
    Footer.jsx
    ChatWidget.jsx          # Floating AI assistant chat
```

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

## Notes

- Update placeholder content in `Projects.jsx`, `Certificates.jsx`, and `Contact.jsx` with your real project names, certificate details, email, and phone number.
- Profile images are currently gradient placeholders — swap in real photos inside `Hero.jsx` and `About.jsx`.
- Icons are from `lucide-react` (already included as a dependency).
