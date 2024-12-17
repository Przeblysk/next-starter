import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations()
  return (
    <div className="container mx-auto w-full min-h-[calc(100vh-64px)]">
      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl font-bold  text-center">
          {t("HomePage.title")}
        </h1>
      </section>
    </div>
  )
}
