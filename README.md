# UrFlow

<<<<<<< HEAD
> 🔵 Node-based visual editor dengan dukungan **nested flow** — setiap node bisa dibuka dan berisi canvas flow tersendiri di dalamnya.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Flow](https://img.shields.io/badge/@xyflow/react-FF0072?style=for-the-badge&logo=react&logoColor=white)

---

## ✨ Fitur

| Fitur | Deskripsi |
|---|---|
| 🔵 **Node & Edge** | Buat, hubungkan, dan hapus node secara visual |
| 📂 **Nested Flow** | Double click node untuk masuk ke canvas baru di dalamnya |
| 🗂️ **Layer Tree** | Panel Properties menampilkan struktur folder semua flow |
| 🔗 **Breadcrumb Nav** | Navigasi antar layer flow lewat breadcrumb path |
| ✏️ **Context Menu** | Klik kanan node untuk rename via context menu |
| ⌨️ **Keyboard Shortcut** | Tekan `Delete` untuk hapus node atau edge yang dipilih |

---

## 📁 Struktur Project

=======
Visual flow builder berbasis node yang mendukung nested flow — setiap node bisa dibuka dan berisi flow tersendiri di dalamnya.

---

## Fitur

- **Node & Edge** — buat, hubungkan, dan hapus node secara visual menggunakan React Flow
- **Nested Flow** — double click node untuk masuk ke flow di dalamnya, setiap node punya canvas sendiri
- **Breadcrumb Navigation** — navigasi antar layer flow dengan breadcrumb path
- **Layer Tree (Properties Panel)** — panel samping yang menampilkan struktur folder dari semua flow yang ada
- **Custom Node** — node dengan label yang bisa diedit langsung via context menu (rename)
- **Keyboard Shortcut** — tekan `Delete` untuk menghapus node atau edge yang dipilih

---

## Struktur Project

>>>>>>> e3ecc0e7a60868fbb737e02b24472b10549c68c6
```
src/
├── components/
│   ├── Header.jsx        # Navbar + toggle dark/light mode
│   ├── Aside.jsx         # Panel kiri, daftar tools node
│   └── Properties.jsx    # Panel kanan, layer tree
├── nodes/
│   ├── nodeTypes.js      # Definisi tipe node & TOOLS_NODE
│   └── CustomNode.jsx    # Custom node component
└── App.jsx               # Root, state management flows
```

---

<<<<<<< HEAD
## 🚀 Cara Pakai

```bash
# install dependencies
npm install

# jalankan dev server
npm run dev
```

---

## 🧠 Konsep Utama

### 01 — Single Source of Truth

Semua node dan edge disimpan dalam satu object `flows`. `setNodes` dan `setEdges` bukan `useState` biasa — keduanya adalah `useCallback` yang menulis langsung ke `flows[currentFlow]`.

```js
flows = {
  root:      { nodes: [], edges: [], parent: null },
=======
## Konsep Utama

### Flows sebagai satu-satunya sumber data

Semua node dan edge disimpan di dalam object `flows`, bukan di `useState` terpisah.

```js
flows = {
  root: { nodes: [], edges: [], parent: null },
>>>>>>> e3ecc0e7a60868fbb737e02b24472b10549c68c6
  "node-id": { nodes: [], edges: [], parent: "root" },
}
```

<<<<<<< HEAD
### 02 — Nested Flow

Double click node memanggil `openNodeFlow(nodeId)` yang:
1. Membuat entry baru di `flows` jika belum ada
2. Menyimpan `parent` flow saat ini
3. Mengubah `currentFlow` ke id node tersebut → canvas otomatis berganti

```
root  →  node-111  →  node-333
          ↑ double click untuk masuk
```

### 03 — Breadcrumb

`getBreadcrumb()` melakukan traverse dari `currentFlow` ke atas lewat `.parent` hingga `null`.

```
🏠 root / node-111 / node-333
  ↑ klik    ↑ klik     ↑ aktif
```

### 04 — Stale Closure

Setiap callback yang menggunakan `setNodes` atau `setEdges` **wajib** menyertakannya di dependency array:

```js
onNodesChange  → [setNodes]
onEdgesChange  → [setEdges]
onConnect      → [setEdges]
addNode        → [setNodes]
deleteNode     → [setNodes, setEdges]
=======
`setNodes` dan `setEdges` adalah fungsi buatan (`useCallback`) yang menulis langsung ke `flows[currentFlow]` — bukan `useState` biasa.

### Nested Flow

Double click pada node akan memanggil `openNodeFlow(nodeId)` yang:
1. Membuat entry baru di `flows` jika belum ada
2. Menyimpan `parent` flow saat ini
3. Mengubah `currentFlow` ke id node tersebut

### Breadcrumb

`getBreadcrumb()` melakukan traverse dari `currentFlow` ke atas lewat `.parent` hingga `null`, menghasilkan array path dari root ke flow aktif.

```
root / node-111 / node-333
>>>>>>> e3ecc0e7a60868fbb737e02b24472b10549c68c6
```

---

<<<<<<< HEAD
## ⚠️ Catatan Penting

> **`key={currentFlow}`** pada `<ReactFlow>` wajib ada — memaksa re-mount saat flow berganti agar `fitView` dan state internal reset dengan bersih.

> **Delete node** juga menghapus `flows` terkait beserta semua child-nya secara **rekursif** — agar layer tree tidak memiliki node yatim.

> **Context menu** menggunakan `createPortal` ke `document.body` agar tidak terclip oleh overflow parent React Flow.

---

## 📦 Dependencies

| Package | Kegunaan |
|---|---|
| `react` | UI framework |
| `@xyflow/react` | Canvas node & edge interaktif |
| `tailwindcss` | Utility-first CSS styling |
| `vite` | Build tool & dev server |
=======
## Cara Pakai

```bash
npm install
npm run dev
```

### Menambah Node
Klik salah satu tools di panel kiri → node muncul di tengah canvas.

### Masuk ke dalam Node
Double click node → membuka canvas baru di dalam node tersebut.

### Navigasi
Klik segment di breadcrumb atau klik item di panel Properties untuk berpindah antar flow.

### Menghapus
Pilih node atau edge → tekan `Delete`.

---

## Tech Stack

| Library | Kegunaan |
|---|---|
| React | UI framework |
| React Flow (`@xyflow/react`) | Canvas node & edge |
| Tailwind CSS | Styling |

---

## Catatan Pengembangan

- `key={currentFlow}` pada `<ReactFlow>` penting untuk memaksa re-mount saat flow berganti
- `onNodesChange`, `onEdgesChange`, `onConnect` harus menyertakan `setNodes`/`setEdges` di dependency array agar tidak stale closure saat `currentFlow` berubah
- Saat node dihapus, `flows` terkait beserta semua child-nya dihapus secara rekursif
>>>>>>> e3ecc0e7a60868fbb737e02b24472b10549c68c6
