# 🤷 Maybe-as-a-Service

<p align="center">
  <img src="https://raw.githubusercontent.com/Mid-D-Man/maybe-as-a-service/main/assets/imgs/maas-banner.jpg" width="800" alt="Maybe-as-a-Service Banner"/>
</p>

> *"Like Schrödinger's cat, this API's answer is simultaneously yes and no — existing in a quantum superposition of commitment — until you make a decision, at which point it's still maybe."*
<!-- GitAds-Verify: 2CCAJY2HA66V8G5FCTX9CQJXVSRI3J8O -->
## GitAds Sponsored
[![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=mid-d-man/maybe-as-a-service@github)](https://gitads.dev/v1/ad-track?source=mid-d-man/maybe-as-a-service@github)


Sometimes you can't say yes. Sometimes you can't say no.  
Sometimes — most times — the honest answer is an **Inshallah**.

Not a lie. Not a promise. Just a shrug wrapped in a JSON response.

This tiny API returns random, non-committal, beautifully evasive **maybe** responses.  
Perfect for product roadmaps, relationship status updates, government policy announcements, and anything else that deserves a dignified lack of commitment.

**The Holy Trinity of Decisiveness:**
| Service | Answer | Certainty |
|---|---|---|
| [yes-as-a-service](https://github.com/misterdim/yes-as-a-service) | ✅ Yes | High |
| [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service) | ❌ No | Also high |
| **maybe-as-a-service** | 🤷 Maybe | *Please do not ask again* |

---

## 🚀 API Usage

**Base URL**
```
https://YOUR_DEPLOYED_DOMAIN/maybe
```

**Method:** `GET`  
**Rate Limit:** `120 requests per minute per IP`

### 🔄 Example Request
```http
GET /maybe
```

### ✅ Example Response
```json
{
  "maybe": "Inshallah."
}
```

Use it in apps, bots, product roadmap generators, wishy-washy commit messages, or wherever a definitive answer would be professionally irresponsible.

---

## 🛠️ Self-Hosting

### 1. Clone this repository
```bash
git clone https://github.com/Mid-D-Man/maybe-as-a-service.git
cd maybe-as-a-service
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm start
```

The API will be live at:
```
http://localhost:3000/maybe
```

Change the port:
```bash
PORT=5000 npm start
```

### 4. Run tests
```bash
npm test
```

---

## 📁 Project Structure

```
maybe-as-a-service/
├── index.js                        # Express API
├── maybes.json                     # 200+ non-committal responses
├── package.json
├── Dockerfile
├── .devcontainer.json              # VS Code / GitHub Codespaces setup
├── test/
│   └── api.test.js                 # API tests (Node built-in test runner)
├── .github/
│   ├── workflows/
│   │   ├── test.yml                # CI — runs on every push & PR
│   │   └── deploy-pages.yml        # Deploys landing page to GitHub Pages
│   └── pages/
│       └── index.html              # Landing page source
└── README.md
```

---

## ⚓ Devcontainer

Open in GitHub Codespaces or VS Code with Dev Containers and it sets itself up automatically.

---

## 🤝 Contributing

Contributions are welcome — probably. We'll see how it goes.

Whether you want to add new maybes, fix a bug, improve the docs, or suggest a feature, the door is open. Possibly.

### Adding new maybe responses

The easiest way to contribute is adding new non-committal responses to `maybes.json`.

A good maybe:
- Is a complete sentence (or dramatically incomplete one, intentionally)
- Doesn't actually commit to anything
- Has its own voice — absurdist, corporate, cultural, technical, cosmic, culinary — all welcome
- Isn't a duplicate of an existing entry (check first, or don't, we'll probably catch it in review)

### How to contribute

1. **Fork** the repository
2. **Create a branch**: `git checkout -b my-maybe-additions`
3. **Make your changes**
4. **Run the tests**: `npm test`
5. **Commit**: `git commit -m "feat: add 10 new existential maybes"`
6. **Push**: `git push origin my-maybe-additions`
7. **Open a Pull Request** — describe what you added and why it belongs here

### Reporting bugs

Open an issue using the **Bug Report** template. Include steps to reproduce, what you expected, and what actually happened.

### Suggesting features

Open an issue using the **Feature Request** template. Describe the idea. We will consider it. Eventually. Circumstances permitting.

### Code style

- Keep it simple — this is a small Express API
- Run `npm test` before submitting; the CI will run it anyway and it will be embarrassing
- No new dependencies without a good reason

---

## 🐱 A Note on Schrödinger's Cat

Erwin Schrödinger proposed a thought experiment in which a cat in a box is simultaneously alive and dead until observed.  
This API operates on the same principle: your feature request is simultaneously **approved and rejected** until the next sprint planning session, at which point it is moved to the backlog.  
The cat, much like your deadline, remains uncertain.

---

## 👤 Author

Built with loving indecision by [Mid-D-Man](https://github.com/Mid-D-Man).  
Inspired by [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service) by hotheadhacker.  
Completing the trilogy started by [yes-as-a-service](https://github.com/misterdim/yes-as-a-service).

---

## 📄 License

MIT — probably. We'll see.

---

## 🐧 Testimonials

> "I asked Maybe-as-a-Service if we'd ship the feature this quarter. It said 'Inshallah.' I've never felt so understood by a JSON response."
>
> — **A Product Manager** (definitely real)

> "We integrated Maybe-as-a-Service into our customer support bot. Response times improved 40% because we now answer every question immediately — just not definitively."
>
> — **A Startup CTO** (probably)

> "I asked it to marry me. It said 'Circumstances permitting.' We've been engaged for three years."
>
> — **Anonymous User** (emotionally stable)
