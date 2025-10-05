import { createI18n } from "vue-i18n";

const messages = {
  en: {
    posts: "Posts",
    comments: "Comments",
    addComment: "Add Comment",
    backToPosts: "⬅ Back to Posts",
    addNewPost: "Add New Post"
  },
  fr: {
    posts: "Articles",
    comments: "Commentaires",
    addComment: "Ajouter un commentaire",
    backToPosts: "⬅ Retour aux articles",
    addNewPost: "Ajouter un nouvel article"
  },
  ja: {
    posts: "投稿",
    comments: "コメント",
    addComment: "コメントを追加",
    backToPosts: "⬅ 投稿に戻る",
    addNewPost: "新しい投稿を追加"
  }
};

export const i18n = createI18n({
  locale: "en", // default language
  fallbackLocale: "en",
  messages
});
