import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { PlusIcon } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreatePlayer } from '@/hooks/use-players';

const formSchema = z.object({
  id: z.string().min(1, 'Embed é obrigatório'),
  name: z.string().min(1, 'VSL é obrigatório'),
});

type FormData = z.infer<typeof formSchema>;

export function AddPlayerForm() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: '',
      name: '',
    },
  });

  const { createPlayer, isCreatePlayerExecuting } = useCreatePlayer();

  async function onSubmit(values: FormData) {
    try {
      await createPlayer(values);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsOpen(false);
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="sm" onClick={() => setIsOpen(true)}>
          <PlusIcon className="h-4 w-4" />
          Adicionar Player
        </Button>
      </SheetTrigger>

      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Adicionar Novo Player</SheetTitle>
          <SheetDescription>
            Preencha as informações do player que deseja adicionar ao sistema.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-6"
          >
            <div className="px-4 space-y-6">
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Embed da VTurb <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: 687e6b0509d90c4d947bcf81"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      VSL e Lead <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Cognify VSL2 LEad1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <SheetFooter className="gap-2">
              <SheetClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </SheetClose>

              <Button
                type="submit"
                disabled={isCreatePlayerExecuting}
                className="min-w-[100px]"
                loading={isCreatePlayerExecuting}
              >
                Adicionar player
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
