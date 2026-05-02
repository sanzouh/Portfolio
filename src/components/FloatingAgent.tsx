import { useAgent } from '@/hooks/useAgent.ts'
import { useState } from 'react'
import { Send, MessageCircle, X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export function FloatingAgent() {
  const { messages, loading, send } = useAgent()
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSend = () => {
    if (input.trim()) {
      send(input)
      setInput('')
    }
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
          aria-label="Ouvrir l'agent"
        >
          <MessageCircle className="size-6" />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between shrink-0">
            <div>
              <h3 className="font-semibold">Assistant IA</h3>
              <p className="text-xs opacity-90">Posez vos questions</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Fermer l'agent"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <MessageCircle className="size-12 mx-auto mb-3 text-muted-foreground/50" />
                  <p className="text-sm text-muted-foreground">
                    Commencez une conversation
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    Posez une question pour en savoir plus
                  </p>
                </div>
              </div>
            )}

            {messages.map((m: { role: 'user' | 'assistant'; text: string }, i: number) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    m.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary border border-border text-foreground'
                  }`}
                >
                  {m.role === 'assistant' ? (
                    <ReactMarkdown
                      components={{
                        ul: ({ children }) => <ul className="list-disc pl-5 my-1 space-y-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal pl-5 my-1 space-y-1">{children}</ol>,
                        li: ({ children }) => <li className="text-sm">{children}</li>,
                        p: ({ children }) => <p className="text-sm my-1">{children}</p>,
                        strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                        em: ({ children }) => <em className="italic">{children}</em>,
                        h2: ({ children }) => <h2 className="text-sm font-bold my-2 mt-3">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-sm font-semibold my-1 mt-2">{children}</h3>,
                        code: ({ children }) => <code className="bg-white/10 px-2 py-1 rounded text-xs font-mono">{children}</code>,
                        a: ({ children, href }) => <a href={href} className="underline opacity-80 hover:opacity-100">{children}</a>,
                      }}
                    >
                      {m.text}
                    </ReactMarkdown>
                  ) : (
                    <p className="leading-relaxed">{m.text}</p>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-secondary border border-border px-3 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Container */}
          <div className="border-t border-border p-3 bg-background shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                placeholder="Votre question..."
                disabled={loading}
                className="flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary transition-colors disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground p-2 rounded-lg transition-colors flex items-center justify-center"
                aria-label="Envoyer"
              >
                <Send className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
