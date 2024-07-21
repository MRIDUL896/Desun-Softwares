"use client"
import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    { question: 'What is the cost of a mobile application?', answer: 'The cost varies depending on the complexity and features of the app. Contact us for a detailed quote.' },
    { question: 'Do you provide a guarantee for the mobile application?', answer: 'Yes, we provide a warranty period for our applications. Details can be discussed during the project planning phase.' },
    { question: 'How long will development take?', answer: 'Development time depends on the project scope. Typically, medium projects take up to 3 months, while larger projects may take 4-6 months.' },
    { question: 'I will not tell my idea, do you guarantee confidentiality?', answer: 'Yes, we sign NDAs and ensure complete confidentiality of your ideas and project details.' },
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}