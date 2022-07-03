export const errorsTranslate=  (err) => {
    switch (err) {
        case "auth/email-already-exists":
            return "L'adresse mail fourni est déjà utilisée."
            break;
        case "auth/invalid-email":
            return " Adresse mail invalide."
            break;   
            
        case "auth/invalid-password":
            return "Le mot de passe doit contenir au moins 6 caractères."
            break;
            
        default: return "Oups, une erreur s'est produite, merci de réessayer"
            break;
    }
}



