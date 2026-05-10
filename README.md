# 🤷 Maybe-as-a-Service

<p align="center">
  <img src="https://raw.githubusercontent.com/Mid-D-Man/maybe-as-a-service/main/assets/imgs/maas-banner.jpg" width="800" alt="Maybe-as-a-Service Banner"/>
</p>

> *"Like Schrödinger's cat, this API's answer is simultaneously yes and no — existing in a quantum superposition of commitment — until you make a decision, at which point it's still maybe."*

Sometimes you can't say yes. Sometimes you can't say no.  
Sometimes — most times — the honest answer is an **Inshallah**.

Not a lie. Not a promise. Just a shrug wrapped in a JSON response.

This tiny API returns random, non-committal, beautifully evasive **maybe** responses.  
Perfect for product roadmaps, relationship status updates, government policy announcements, and anything else that deserves a dignified lack of commitment.

**The Holy Trinity of Decisiveness:**
| Service | Answer | Certainty |
|---|---|---|
| [yes-as-a-service](https://github.com/lukekarrys/yes-as-a-service) | ✅ Yes | High |
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

## 🐱 A Note on Schrödinger's Cat

Erwin Schrödinger proposed a thought experiment in which a cat in a box is simultaneously alive and dead until observed.  
This API operates on the same principle: your feature request is simultaneously **approved and rejected** until the next sprint planning session, at which point it is moved to the backlog.  
The cat, much like your deadline, remains uncertain.

---

## 👤 Author

Built with loving indecision by [Mid-D-Man](https://github.com/Mid-D-Man).  
Inspired by [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service) by hotheadhacker.  
Completing the trilogy started by [yes-as-a-service](https://github.com/lukekarrys/yes-as-a-service).

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
