import type { StructureBuilder } from 'sanity/structure'
import { Iframe } from 'sanity-plugin-iframe-pane'

// Web Preview URL
const url = (process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000')

export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Gestão de Conteúdo')
        .items([
            // Blog Group
            S.listItem()
                .title('Blog Jurídico')
                .child(
                    S.list()
                        .title('Gerenciar Blog')
                        .items([
                            S.documentTypeListItem('post').title('Artigos Publicados'),
                            S.documentTypeListItem('author').title('Autores / Equipe'),
                            S.documentTypeListItem('category').title('Categorias'),
                        ])
                ),

            S.divider(),

            // Fallback for any other types
            ...S.documentTypeListItems().filter(
                (listItem) => !['post', 'category', 'author'].includes(listItem.getId() as string)
            ),
        ])

export const defaultDocumentNode = (S: any, { schemaType }: any) => {
    if (schemaType === 'post') {
        return S.document().views([
            S.view.form(),
            S.view
                .component(Iframe)
                .options({
                    url: (doc: any) => {
                        return doc?.slug?.current
                            ? `${url}/blog/${doc.slug.current}`
                            : `${url}/blog`
                    },
                    reload: { button: true },
                })
                .title('Web Preview'),
        ])
    }
    return S.document().views([S.view.form()])
}
