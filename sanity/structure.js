// Custom Studio desk structure: Articles (date-ordered) + Categories.
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Articles')
        .child(
          S.documentTypeList('article')
            .title('Articles')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
        ),
      S.divider(),
      S.documentTypeListItem('category').title('Categories'),
    ])
