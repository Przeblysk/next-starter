"use client"

import { helloAction } from "@/actions/hello-action"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  message: z.string().min(3)
})

type FormSchema = z.infer<typeof formSchema>

export const HelloForm = () => {
  const t = useTranslations()

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: ""
    }
  })
  const { toast } = useToast()

  const onSubmit = async ({ message }: FormSchema) => {
    const { message: messageFromAction } = await helloAction(message)

    toast({ description: messageFromAction })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-3 justify-center">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-[300px]"
                  placeholder={t("HomePage.message-placeholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="font-bold" type="submit">
          {t("HomePage.submit")}
        </Button>
      </form>
    </Form>
  )
}
