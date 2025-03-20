import Footer from "@/components/footer"
import { Header } from "@/components/header/header"
import { HelloForm } from "@/components/hello-form"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations()
  return (
    <>
      <Header />
      <div className="container mx-auto w-full min-h-[calc(100vh-64px)] flex items-center justify-center">
        <section className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center mb-2">
            {t("HomePage.title")}
          </h1>
          <p className="max-w-2xl text-center text-muted-foreground mb-4">
            {t("HomePage.description")}
          </p>
          <HelloForm />
        </section>
      </div>
      <Footer />
    </>
  )
}
