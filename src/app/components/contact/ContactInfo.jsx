'use client'

import React, { useState } from 'react'

export default function ContactInfo() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setStatus('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong')
            }

            setStatus('Message sent successfully!')

            setFormData({
                name: '',
                email: '',
                message: '',
            })
        } catch (error) {
            setStatus(error.message || 'Something went wrong.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className='w-full flex flex-col sm:flex-row gap-4'>
                <div className="w-full sm:w-1/2">
                    <label htmlFor="name" className="block mb-2 text-(--primary-light)">Your Name</label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your name" required className="w-full rounded-lg border border-(--surface-light) bg-(--background) px-4 py-3 text-(--cream) outline-none focus:border-(--primary)" />
                </div>
                <div className="w-full sm:w-1/2">
                    <label htmlFor="email" className="block mb-2 text-(--primary-light)">Your Email</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required className="w-full rounded-lg border border-(--surface-light) bg-(--background) px-4 py-3 text-(--cream) outline-none focus:border-(--primary)" />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="message" className="block mb-2 text-(--primary-light)">Your Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..." rows={6} required className="w-full resize-none rounded-lg border border-(--surface-light) bg-(--background) px-4 py-2 text-(--cream) outline-none focus:border-(--primary)" />
            </div>
            <button type="submit" disabled={loading} className="w-fit rounded-lg bg-(--primary) px-6 py-3 text-(--cream) font-semibold transition hover:opacity-90 disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
                <p className="text-sm text-(--primary)">{status}</p>
            )}

        </form>
    )
}