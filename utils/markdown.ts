import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export function renderMarkdown(markdownText: string) {
    return md.render(markdownText)
}