

export const checkForLocalStorage = (setTheme, setLanguage) => {
    const themes = {light: 'light', dark: 'dark'}
    const languages = {russian: 'russian', english: 'english'}


    const theme = `${window?.localStorage?.getItem('theme')}`

    if (Object.values(themes).includes(theme)) setTheme(theme)
    else  setTheme(themes.light);

    const language = `${window?.localStorage?.getItem('language')}`

    if (Object.values(languages).includes(language)) setLanguage(language)
    else setLanguage(languages.russian);
}