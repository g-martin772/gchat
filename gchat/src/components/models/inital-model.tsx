"use client";

import * as z from "zod";

import {
    zodResolver
} from "@hookform/resolvers/zod";

import {
    useForm
} from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

import {
    Form,
    FormField,
    FormLabel,
    FormItem,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import {
    Input
} from "@/components/ui/input";

import {
    Button
} from "@/components/ui/button";

import {
    useEffect,
    useState
} from "react";


const formSchema = z.object({
    name: z.string().min(1, { message: "Servername is required" }),
    imageUrl: z.string().min(1, { message: "Image URL is required" })
});

export default function InitialModel() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageUrl: "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    if (!isMounted) return null;

    return (
        <Dialog open>
            <DialogContent className={"bg-white text-black p-0 overflow-hidden"}>
                <DialogHeader className={"pt-8 px-6"}>
                    <DialogTitle className={"text-2xl text-center font-bold"}>
                        Create your server
                    </DialogTitle>
                    <DialogDescription className={"text-center text-zinc-500"}>
                        Give your new server a name and an optional description. You can also change this later.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-8"}>
                        <div className={"space-y-8 px-6"}>
                            <div className={"flex items-center justify-center text-center"}>
                                TODO: Add image upload
                            </div>
                            <FormField control={form.control} name={"name"} render={({field}) => (
                                <FormItem>
                                    <FormLabel
                                        className={"uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"}>
                                        Server Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} id={"name"} disabled={isLoading}
                                               className={"bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"}
                                               placeholder={"Enter server name"}/>
                                    </FormControl>
                                    <FormMessage {...field} />
                                </FormItem>
                            )}/>
                        </div>
                        <DialogFooter className={"bg-gray-100 px-6 py-4"}>
                            <Button disabled={isLoading}>Create</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}