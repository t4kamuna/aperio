"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold tracking-tight">Aperio</h1>
          <Link
            href="/auth"
            className="text-sm font-medium text-gray-700 hover:text-black transition"
          >
            新規登録
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
        <h2 className="text-5xl font-bold tracking-tight mb-6">
          働く前に、
          <br className="hidden sm:block" />
          職場の実態を知ろう
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Aperio は、学生アルバイト向けに
          <br className="hidden sm:block" />
          「リアルな職場の声」を集める口コミサービスです。
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/review/new"
            className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            口コミを書く
          </Link>

          <Link
            href="/reviews"
            className="px-8 py-3 rounded-full border text-sm font-medium hover:bg-gray-100 transition"
          >
            口コミを見る
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Aperio が選ばれる理由
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            <Feature
              title="実態がわかる"
              text="求人票では見えない雰囲気や人間関係を可視化"
            />
            <Feature
              title="匿名で投稿"
              text="本音を書けるから、情報の信頼性が高い"
            />
            <Feature
              title="学生向け設計"
              text="高校生・大学生のバイト探しに特化"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h3 className="text-3xl font-bold mb-6">
          もう、バイト選びで後悔しない
        </h3>
        <Link
          href="/review/new"
          className="inline-block bg-black text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          今すぐ口コミを書く
        </Link>
      </section>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}
