// WIP NOT ENOUGH TIME

// import z from 'zod'
// import {useForm } from 'react-hook-form'
// export default function ContactForm() {
//   const formSchema = z.object({
//     name: z
//       .string()
//       .trim()
//       .min(1, 'Please enter a user name')
//       .max(20, 'User name must be within 20 characters'),
//     handle: z
//       .string()
//       .trim()
//       .toLowerCase()
//       .min(2, 'Please enter a user handle')
//       .max(16, 'User handle must be within 16 characters')
//       .startsWith('@', "Must start with an '@'"),
//     bio: z
//       .string()
//       .trim()
//       .min(1, 'Please enter a bio')
//       .max(100, 'Bio must be within 100 chars'),
//   })

//   type TForm = z.infer<typeof formSchema>

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm<TForm>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: '',
//       handle: '',
//       bio: '',
//     },
//   })
//   return (
//     <>
//       <input type='text' />
//       <input type='text' />
//       <textarea name='' id=''></textarea>
//     </>
//   )
// }
