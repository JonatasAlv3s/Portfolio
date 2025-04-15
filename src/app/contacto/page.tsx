"use client"

import React, { useState } from "react"
import "./index.css"

interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

type SubmitStatus = null | "success" | "error"

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Simulação de envio
            await new Promise((resolve) => setTimeout(resolve, 1500))

            setSubmitStatus("success")
            setFormData({ name: "", email: "", subject: "", message: "" })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    return (
        <div className="container">
            <h1 className="pageTitle">
                <span className="pageNumber"></span> Contato
            </h1>

            <div className="contactContent">
                <article className="contactInfo">
                    <p className="contactText">
                        Interessado em trabalhar juntos? Preencha o formulário ao lado ou entre em contato através dos links abaixo.
                    </p>

                    <div className="contactLinks">
                        <a href="Jonatas: jonatasrubens.santos@gmail.com" className="contactLink">
                            <span className="contactIcon" aria-hidden="true"></span>
                            <span>jonatasrubens.santos@gmail.com</span>
                        </a>

                        <a
                            href="https://github.com/JonatasAlv3s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contactLink"
                        >
                            <span className="contactIcon" aria-hidden="true"></span>
                            <span>github.com/JonatasAlv3s</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jonatas-alves-ads/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contactLink"
                        >
                            <span className="contactIcon" aria-hidden="true"></span>
                            <span>linkedin.com/in/jonatas-alves-ads</span>
                        </a>
                    </div>
                </article>

                <article className="contactForm">
                    <h2 className="formTitle">Envie uma mensagem</h2>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="formGroup">
                            <label htmlFor="name" className="formLabel">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="formInput"
                                aria-required="true"
                            />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="email" className="formLabel">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="formInput"
                                aria-required="true"
                            />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="subject" className="formLabel">
                                Assunto
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="formInput"
                                aria-required="true"
                            />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="message" className="formLabel">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                                className="formTextarea"
                                aria-required="true"
                            />
                        </div>

                        <button type="submit" disabled={isSubmitting} className="submitButton">
                            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                        </button>

                        {submitStatus === "success" && (
                            <div className="successMessage" aria-live="polite">
                                ✅ Mensagem enviada com sucesso!
                            </div>
                        )}

                        {submitStatus === "error" && (
                            <div className="errorMessage" aria-live="polite">
                                ❌ Erro ao enviar a mensagem. Tente novamente.
                            </div>
                        )}
                    </form>
                </article>
            </div>
        </div>
    )
}
