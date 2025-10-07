import { createI18n } from "vue-i18n";

const messages = {
  en: {
    posts: "Posts",
    comments: "Comments",
    addComment: "Add Comment",
    backToPosts: "⬅ Back to Posts",
    addNewPost: "Add New Post",
    loginTitle: "Login",
    email: "Email",
    password: "Password",
    loginButton: "Login",
    noAccount: "Don't have an account?",
    signUp: "Sign Up",
    loginFailed: "Login failed. Please check your credentials.",
    noTokenError: "No token received. Please try again.",
    registerTitle: "Register",
    confirmPassword: "Confirm Password",
    registerButton: "Register",
    haveAccount: "Already have an account?",
    loginHere: "Login here",
    signupFailed: "Signup failed. Try again."

  },

  fr: {
    posts: "Articles",
    comments: "Commentaires",
    addComment: "Ajouter un commentaire",
    backToPosts: "⬅ Retour aux articles",
    addNewPost: "Ajouter un nouvel article",
    loginTitle: "Connexion",
    email: "Adresse e-mail",
    password: "Mot de passe",
    loginButton: "Se connecter",
    noAccount: "Vous n'avez pas de compte ?",
    signUp: "S'inscrire",
    loginFailed: "Échec de la connexion. Veuillez vérifier vos identifiants.",
    noTokenError: "Aucun jeton reçu. Veuillez réessayer.",
    registerTitle: "Inscription",
    confirmPassword: "Confirmer le mot de passe",
    registerButton: "S'inscrire",
    haveAccount: "Vous avez déjà un compte ?",
    loginHere: "Connectez-vous ici",
    signupFailed: "Échec de l'inscription. Réessayez.",
    noPostsYet: "No posts yet. Be the first to add one!",


  },

  ja: {
    posts: "投稿",
    comments: "コメント",
    addComment: "コメントを追加",
    backToPosts: "⬅ 投稿に戻る",
    addNewPost: "新しい投稿を追加",
    loginTitle: "ログイン",
    email: "メールアドレス",
    password: "パスワード",
    loginButton: "ログイン",
    noAccount: "アカウントをお持ちではありませんか？",
    signUp: "サインアップ",
    loginFailed: "ログインに失敗しました。資格情報を確認してください。",
    noTokenError: "トークンが受信されませんでした。もう一度お試しください。",
    registerTitle: "登録",
    confirmPassword: "パスワードを確認",
    registerButton: "登録",
    haveAccount: "すでにアカウントをお持ちですか？",
    loginHere: "こちらからログイン",
    signupFailed: "登録に失敗しました。もう一度お試しください。"

  }
};

export const i18n = createI18n({
  locale: "en", // default language
  fallbackLocale: "en",
  messages
});
