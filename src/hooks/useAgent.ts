import { useState } from 'react'
import Groq from 'groq-sdk'
import { owner, links, about, services, stack, stackCategories, projects, experiences } from '../data/portfolio'

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_KEY as string,
  dangerouslyAllowBrowser: true,
})

type Role = 'user' | 'assistant'

interface Message {
  role: Role
  text: string
}

function buildSystemPrompt(): string {
  const stackList = stack?.join(', ') || ''
  
  const projectsText = projects?.map((proj: any, i: number) =>
    `${i + 1}. ${proj.name} — ${proj.shortDesc}
   Stack : ${proj.tags?.join(', ')}
   Catégorie : ${proj.category}`
  ).join('\n\n') || ''
  
  const experienceText = experiences?.map((e: any) =>
    `- ${e.period} : ${e.role} chez ${e.company}`
  ).join('\n') || ''

  return `Tu es l'assistant IA du portfolio de ${owner.name}.
Réponds en français, de façon concise, professionnelle et sympathique.

=== IDENTITÉ ===
Nom : ${owner.name}
Titre : ${owner.title}
Localisation : ${owner.location}
Email : ${links.email}
Disponibilité : ${about.seeking}

=== STACK TECHNIQUE ===
${stackList}

=== PROJETS ===
${projectsText}

=== EXPÉRIENCE PROFESSIONNELLE ===
${experienceText}

Réponds toujours sur la base de ces informations précises. Sois honnête et direct.`
}

export function useAgent() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const send = async (userText: string): Promise<void> => {
    setLoading(true)
    const newMessages: Message[] = [...messages, { role: 'user', text: userText }]
    setMessages(newMessages)

    try {
      const response = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: buildSystemPrompt() },
          ...newMessages.map(m => ({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: m.text,
          })),
        ],
      })

      const reply: string = response.choices[0].message.content
      setMessages([...newMessages, { role: 'assistant', text: reply }])

    } catch (e: any) {
      setMessages([...newMessages, {
        role: 'assistant',
        text: e.message?.includes('429')
          ? 'Trop de requêtes, réessaie dans une minute. 🙏'
          : 'Erreur de connexion : ' + e.message,
      }])
    }

    setLoading(false)
  }

  return { messages, loading, send }
}