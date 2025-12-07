# React Cropper Aspect

> A simple and flexible React image cropper with aspect ratio control.

![React-Cropper-Aspect Logo](https://raw.githubusercontent.com/colligii/react-cropper-aspect/refs/heads/master/img/react-cropper-aspect.jpeg)

![npm](https://img.shields.io/npm/v/react-cropper-aspect)
![license](https://img.shields.io/npm/l/react-cropper-aspect)
![issues](https://img.shields.io/github/issues/colligii/react-cropper-aspect)
![stars](https://img.shields.io/github/stars/colligii/react-cropper-aspect)

---

## ⚠️ Warning

This library **only works with Tailwind CSS**.

---

## ✨ Features

- 📐 Crop with a fixed aspect ratio  
- ⚡ Simple API and minimal setup  
- 🎣 Built with React hooks (`useRef`, `useEffect`)  
- 🪶 Lightweight – no external dependencies  
- 🧩 Easy to integrate into any workflow  

---

## 📦 Installation

```bash
npm install react-cropper-aspect
# or
yarn add react-cropper-aspect
# or
pnpm add react-cropper-aspect
```

## 🚀 Usage

```typescript
import { useState } from "react";
import { ImageCrop } from "react-cropper-aspect";

export default function Example() {
  const [file, setFile] = useState<File | null>(null);
  const [step, setStep] = useState<"crop" | "confirm" | "done">("crop");

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  const handleConfirm = (finalFile: File) => {
    console.log("Cropped file:", finalFile);
    setStep("done");
  };

  if (!file) {
    return (
      <input
        type="file"
        accept="image/*"
        onChange={handleSelect}
      />
    );
  }

  return (
    <ImageCrop
      file={file}
      step={step}
      confirmImage={handleConfirm}
      aspect={9 / 16}
      proportions={{
        sm: w => w < 400,
        md: w => w >= 400 && w < 900,
        lg: w => w >= 900
      }}
      sizeConfig={{
        sm: { maxWidth: 300, maxHeight: 300 },
        md: { maxWidth: 500, maxHeight: 400 },
        lg: { maxWidth: 900, maxHeight: 500 }
      }}
    />
  );
}
```

## 🛠 Upcoming Improvements

- Remove Tailwind dependency to improve usability
- Bug fixes

Made with ❤️ by Giovanne Colli