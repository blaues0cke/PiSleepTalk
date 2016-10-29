{
	"actions": {
		"add_text": 			 "Ajouter texte",
		"back":  				 "Retour",
        "ban_noise":             "Marquer la selection comme un bruit",
		"clear":                 "Effacer",
		"clear_all_texts":       "Effacer tous le texte",
		"clear_logs": 			 "Effacer les logs",
        "clear_pending":         "Supprimer les fichiers en attente",
        "concat_all_videos":     "Concatener toutes les vidéos",
        "concat_checked_videos": "Concatener les vidéos selectionnés",
        "crop_to_marker":        "Couper jusqu'au marqueur",
		"decrease_volume":       "Diminuer le volume",
		"delete": 				 "Supprimer",
		"delete_file": 		 	 "Supprimer fichier",
        "delete_noise_filter":   "Supprimer le filtre de bruit",
		"delete_recording": 	 "Supprimer l'enregistrement",
		"delete_text": 		     "Supprimer le texte",
		"delete_video": 	     "Supprimer la video",
        "disable_preview":       "Desactiver le mode de prévualisation",
		"download_video": 		 "Télécharger la video",
        "enable_preview":        "Activer le mode de prévualisation",
        "force_import":          "Forcer l'import maintenant",
        "import_audio":          "Importer enregistrements",
		"increase_volume":       "Augmenter le volume",
		"insert_current_frame":  "Inserer la frame courante a cette position",
        "jump_to_marker":        "Aller au marqueur",
		"move_down": 			 "Descendre",
		"move_up": 				 "Monter",
		"pause":                 "Pause",
        "play":                  "Lancer",
        "play_from_here":        "Lancer depuis ici",
        "play_from_marker":      "Lancer depuis le marqueur",
        "play_video":            "Lancer la vidéo dans le navigateur",
		"reload_page": 			 "Recharger la page",
		"save":                  "Sauvegarder",
		"save_text": 			 "Sauvegarder le texte",
		"set_marker":            "définir un marqueur",
        "set_playback_rate":     "Définir la vitesse de lecture",
		"sort":                  "Ordonner",
		"sort_ascending":        "Ordonner par ordre croissant",
		"step_backward":         "Reculer",
		"step_forward":          "Avancer",
		"stop":                  "Stop",
        "upload_file":           "Uploader un fichier",
		"view_logs": 			 "Voir les logs",
        "view_noise_filters":    "Voir les filtres de bruit"
	},
    "app": {
    	"name": 			     "PiSleepTalk"
    },
    "import": {
        "description":           "Utiliser la fonction d'import vous permet d'importer n'importe quel fichier audio de votre choix. Vous pouvez utiliser n'importe quel format audio. Les fichiers non supportés seront automatiquement supprimés. Les fichiers .zip sont aussi extraits automatiquement. Si le fichier zip contient des fichiers dont le nom est le meme que les fichiers déjà present, ils seront automatiquement écrasés",
        "empty":                 "Votre dossier d'import est vide pour le moment.",
        "error_1":               "Aucun fichier n'a été uploader.",
        "error_2":               "Une erreur est survenue lors de l'upload de votre fichier, veuillez essayer ulterieurement.",
        "force_text":            "L'import commencera automatiquement %s secondes après que le dernier fichier ait été uploadé dans le dossier d'import.",
        "instant_approve":       "Utiliser les fichiers importé comme des enregistrements entiers sans traitement postérieur",
        "title":                 "Importer"
    },
    "logs": {
    	"description": 			 "fichiers de logs de node.js et d'autres programmes utilisés comme ffmpeg ou sox.",
    	"empty_text": 			 "Pas d'information de logs disponibles pour le moment.",
    	"title": 				 "Logs"
    },
    "menu": {
        "clear_pending":         "Supprimer les fichiers en attente",
    	"help":                  "Aide",
    	"home": 				 "Accueil",
        "import":                "Importer",
        "overview":              "Aperçu",
    	"status": 				 "Status",
    	"videos": 				 "Vidéos"
    },
    "modal": {
    	"an_error_occurred":     "Une erreur est survenue",
        "ban_noise": {
            "ban_noise":         "Marquer la selection comme un bruit",
            "description":       "Êtes vous sur de vouloir marquer la selection comme un bruit ?",
            "title":             "Marquer comme un bruit"
        },
    	"cancel":                "Annuler",
    	"clear_logs": {
    		"clear_logs":  		 "Effacer les logs",
    		"description":       "Êtes vous sûr de vouloir supprimer les logs? L'operation ne peut pas être annulée.",
    		"title":             "Effacer les logs"
    	},
        "clear_pending": {
            "clear":             "Effacer les fichiers non traités",
            "description":       "Êtes vous sur de vouloir supprimer les fichiers non traités ?  L'operation ne peut pas être annulée.",
            "title":             "Effacer les fichiers non traités"
        },
        "clear_texts": {
            "clear":             "Effacer",
            "description":       "Êtes vous sûr de vouloir supprimer tous le texte ?",
            "title":             "Effacer le texte"
        },
        "concat_videos": {
            "concat_videos":     "Concatener les vidéos",
            "description":       "Êtes vous sur de vouloir concatener les vidéos ? La selection disparaitra jusqu'au rendu de la vidéo.",
            "title":             "Concatener les videos vers un film entier"
        },
    	"close":                 "Fermer",
        "crop_to_marker": {
            "crop_to_marker":    "Couper",
            "description":       "Êtes vous sur de couper le fichier audio jusqu'au marqueur? L'opération de peut pas être annulée.",
            "title":             "Couper jusqu'au marqueur"
        },
      	"decrease_volume": {
    		"decrease_volume":   "Diminuer le volume",
    		"description":       "Êtes vous sûr de vouloir diminuer le volume de 50%? Cela enlevera le fichier du processus de traitement jusqu'à ce que l'audio soit diminuer. Le fichier audio re-apparaitra automatiquement sur la page d'accueil.",
    		"title":             "Diminuer le volume"
    	},
    	"delete_file": {
    		"delete_file":   	 "Supprimer le fichier",
    		"description":       "Êtes vous sur de vouloir supprimer le fichier ? L'opération de peut pas être annulée.",
    		"title":             "Supprimer le fichier"
    	},
        "force_import": {
            "description":       "Êtes vous sûr de vouloir forcer l'import maintenant ?",
            "force_import":      "Forcer l'import",
            "title":             "Forcer l'import"
        },
        "forced_import": {
            "description":       "L'import à démarré avec succès, Veuillez attendre jusqu'à ce que le dossier d'import soit vide.",
            "title":             "Import forcé"
        },
       	"increase_volume": {
    		"description":       "Êtes vous sûr de vouloir augmenter le volume de 50%? Cela enlevera le fichier du processus de traitement jusqu'à ce que l'audio soit augmenté. Le fichier audio re-apparaitra automatiquement sur la page d'accueil.",
    		"increase_volume":   "Augmenter le volume",
    		"title":             "Augmenter le volume"
    	},
        "noise_banned": {
            "description":       "La partie selectionnée est maintenant concidérée comme un bruit et vas être supprimer dans les prochains enregistrements.",
            "title":             "Bruit sauvegardé"
        },
    	"ok": 			  	     "OK",
       	"preview_video": {
    		"title":             "Previsualisation de la vidéo"
    	},
        "remove_noise_filter": {
            "description":       "Êtes vous sûr de vouloir supprimer ce filtre de bruit ? L'opération de peut pas être annulée. Les fichiers qui ont déjà été modifiés avec ce filtre de bruit seront inchangés.",
            "remove_filter":     "Supprimer le filtre de bruit",
            "title":             "Supprimer le filtre de bruit"
        },
    	"remove_recording": {
    		"delete_recording":  "Supprimer l'enregistrement",
    		"description":       "Êtes vous sûr de vouloir supprimer l'enregistrement entièrement ? L'opération de peut pas être annulée.",
    		"title":             "Supprimer l'enregistrement"
    	},
    	"remove_video": {
    		"delete_video":  	 "Supprimer la vidéo",
    		"description":       "Êtes vous sûr de vouloir supprimer la vidéo entièrement ? L'opération de peut pas être annulée.",
    		"title":             "Supprimer la vidéo"
    	},
        "set_frame": {
            "description":       "Veuillez choisir une frame d'abord avant d'essayer de lancer la lecture depuis celle ci.",
            "whoops":            "Oups, désolé !"
        },
    	"set_marker": {
    		"description":       "Veuillez determiner un marqueur avant de pouvoir vous deplacer jusqu'a celui ci.",
            "description_2":     "Veuillez determiner un marqueur avant de pouvoir vous deplacer jusqu'a celui ci.",
            "description_3":     "Veuillez determiner un marqueur avant de pouvoir couper jusqu'a celui ci.",
            "description_4":     "Veuillez determiner un marqueur avant de pouvoir le marquer comme un bruit.",
            "whoops":            "Oups, désolé !"
    	},
        "set_playback_rate": {
            "description":       "Entrer une nouvelle vitesse de lecture ici. le nombre \"1.0\" est celui par défaut, un nombre plus petit est plus lent, un nombre plus grand est plus rapide.",
            "set_playback_rate": "Définition la vitesse de lecture",
            "tip":               "Standard: 1.0, Plus lent : < 1.0, Plus rapide : > 1.0",
            "title":             "Vitesse de lecture"
        },
        "upload_file": {
            "description":       "Uploader un fichier audio ou un fichier zip contenant des fichiers audios dans le dossier d'import.",
            "title":             "Upload de fichier",
            "upload_file":       "Upload de fichier"
        }
    },
    "no_recordings": {
    	"description": 			 "Désolé, nous n'avons pas d'enregistrement non traités pour vous actuellement. Veuillez prendre votre mal en patience et revenir ultérieurement.",
    	"sub_description":       "Vous devriez vérifier la page de status afin de vérifier si tout fonctionne correctement.",
    	"title": 				 "Pas de nouvel enregistrement"
    },
    "noise_filter": {
        "description":           "Ici vous voyez tous les filtres de bruits que vous avez définis. Chaque filtre de bruits et rajouté à chaque enregistrement.",
        "empty_text":            "Pas de filtre de bruit pour le moment. Pour ajouter un filtre, ajouter un marqueur sur la page de demarrage et cliquer sur le bouton \"créer le filtre de bruit\".",
        "title":                 "Filtres de bruits"
    },
    "overview": {
        "description":           "Voici une liste de vidéos non traités. Vous pouvez utiliser cette liste pour choisir les vidéos que vous ne voudrait plus traiter ultérieurement. Cette page est limité à %s entrées à cause d'un problème de performance. Maintenir shift pour désactiver la question de sécurité.",
        "empty_text":            "Aucune vidéo non traité n'est diponible pour le moment.",
        "title":                 "Aperçu"
    },
    "shortcuts": {
    	"description":   	 	 "Vous pouvez maintenant utiliser les raccourcis pour gagner du temps. Les touches suivantes sont maintenant supportées :",
    	"keys": {
    		"1_9":  			 "1-9",
    		"1_9_description": 	 "Chercher la partie N du fichier audio",
            "b":                 "B",
            "b_description":     "marquer la selection comme un bruit",
            "c":                 "C",
            "c_description":     "Couper jusqu'au marqueur (Supprime le reste)",
            "d":                 "D",
            "d_description":     "Supprime l'enregistrement courant (Maintenir shift pour désactiver la question de sécurité)",
            "dc":                "Double click",
            "dc_description":    "Aller jusqu'à la position et créer le texte",
            "down":              "Flèche vers le bas",
    		"down_description":  "Avancer de 10 secondes",
            "esc":               "ESC",
            "esc_description":   "Stop",
            "f":                 "F",
            "f_description":     "Basculer sur le mode de prévisualisation",
            "j":                 "J",
            "j_description":     "Aller jusqu'au marqueur (et arreter la lecture)",
            "left":              "Flèche gauche",
            "left_description":  "Revenir en arrière de 5 secondes",
            "p":                 "P",
            "p_description":     "Demarrer depuis le marqueur",
            "m":                 "M",
            "m_description":     "Plaver un marqueur",
            "right":             "Flèche droite",
    		"right_description": "Avancer de 5 secondes",
    		"space":     	 	 "Espace",
    		"space_description": "Lancer/Pause",
            "up":                "Flèche vers le haut",
    		"up_description":    "Revenir en arrière de 10 secondes"
    	},
    	"ok":            	 	 "OK",
    	"shortcuts":     	 	 "Raccourcis"
    },
    "state": {
        "not_recording":         "Pas en cours d'enregistrement",
        "recording":             "En cours d'enregistrement"
    },
    "status": {
    	"description": 		     "Status de votre instance PiSleepTalk. Pages generées: %s",
    	"disk_space": 			 "Espace disque libre %s sur %s GB",
        "empty_text":            "Il n'y à pas de fichier vidéos ou audios disponibles pour le moment.",
        "pending_files":         "Fichiers en attente",
    	"title":  				 "Status"
    },
    "table": {
    	"actions": 			 	 "Actions",
        "concat":                "Concatener",
    	"frame": 				 "Frame",
    	"length": 				 "Durée",
    	"length_seconds_short":  "s",
        "listen":                "Ecouter",
    	"path": 				 "Chemin",
    	"size": 				 "Taille",
    	"size_kb": 			     "KB",
    	"text":       			 "Texte",
        "type":                  "Type"
    },
    "videos": {
        "description":           "Ici vous pouvez voir tous les rendus vidéos que le système a enregistré et généré pour vous. La longueur de toutes les séquences vidéos est de : %s.",
        "empty_text": 			 "Aucun rendu vidéo n'est disponible pour le moment.",
        "movie_title":           "Titre de la vidéo",
        "movie_title_tip":       "Le titre du film apparaitra %s secondes au début.",
        "sub_description":       "Vous pouvez concatener les vidéos en selectionnant les checkbox et cliquer sur le bouton \"Concatener les vidéos\".",
        "title":                 "Vidéos",
        "type_full":             "Vidéo",
        "type_part":             "Scène"
    }
}
