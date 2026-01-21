"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [storeName, setStoreName] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("保存中...");

    const { error } = await supabase.from("reviews").insert([
      {
        store_name: storeName,
        content: content,
      },
    ]);

    if (error) {
      console.error(error);
      setMessage("❌ エラーが発生しました");
    } else {
      setMessage("✅ 投稿しました！");
      setStoreName("");
      setContent("");
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Aperio（口コミ投稿）</h1>

      <input
        type="text"
        placeholder="店舗名"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
      />

      <textarea
        placeholder="口コミ内容"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
        rows={5}
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded"
      >
        投稿する
      </button>

      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
