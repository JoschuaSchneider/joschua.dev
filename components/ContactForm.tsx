import { FormEvent, useRef, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setSubmitting(true)
    setSuccess(false)
    setError(null)
    e.preventDefault()
    if (formRef.current) {
      const token = await executeRecaptcha?.('contact_form')

      const form = formRef.current
      const data = new FormData(form)
      data.append('g-recaptcha-response', token || '')

      try {
        await fetch(form.action, {
          method: form.method,
          body: data,
          redirect: 'manual',
        })

        setSubmitting(false)
        setSuccess(true)
        form.reset()
      } catch (error) {
        setSubmitting(false)
        setSuccess(false)
        setError('Something went wrong, please try again later!')
      }
    } else {
      setSubmitting(false)
      setSuccess(false)
      setError('Something went wrong, please try again later!')
    }
  }

  return (
    <form
      className="grid grid-cols-2 gap-6"
      ref={formRef}
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mjvpylrv"
      method="POST"
    >
      <label className="block">
        <span className="block mb-1 dark:text-white">Your Name</span>
        <input
          required
          className="block w-full border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          type="text"
          name="name"
        />
      </label>
      <label className="block">
        <span className="block mb-1 dark:text-white">Your Email</span>
        <input
          required
          className="block w-full border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          type="email"
          name="_replyto"
        />
      </label>
      <label className="block col-span-2">
        <span className="block mb-1 dark:text-white">
          What are you contacting me about?
        </span>
        <select
          required
          className="block w-full border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          name="topic"
        >
          <option value="General Questions">General Questions</option>
          <option value="Project Request / Cost Estimate">
            Project Request / Cost Estimate
          </option>
          <option value="Feedback, Errors & Bugs">
            Feedback, Errors & Bugs
          </option>
        </select>
      </label>
      <label className="block col-span-2">
        <span className="block mb-1 dark:text-white">Tell me about it:</span>
        <textarea
          required
          className="block w-full border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          name="body"
        />
      </label>
      <button
        disabled={submitting}
        type="submit"
        className="block w-full col-span-2 px-4 py-2 font-bold text-gray-800 bg-gray-100 rounded focus:ring dark:bg-gray-800 dark:text-white disabled:opacity-50"
      >
        Submit
      </button>
      {success && (
        <div className="block w-full col-span-2 px-4 py-2 font-semibold text-center text-white bg-green-500 rounded dark:bg-green-600">
          Thanks, I will get back to you soon!
        </div>
      )}
      {error && (
        <div className="block w-full col-span-2 px-4 py-2 font-semibold text-center text-white bg-red-500 rounded dark:bg-red-600">
          {error}
        </div>
      )}
    </form>
  )
}

export default ContactForm
