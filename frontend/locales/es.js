{
	"actions": {
		"add_text": 			 "Añadir texto",
		"back":  				 "Atrás",
        "ban_noise":             "Marcar selección como ruido",
		"clear":                 "Limpiar",
		"clear_all_texts":       "Limpiar todos los textos",
		"clear_logs": 			 "Limpiar log",
        "clear_pending":         "Borrar ficheros pendientes",
        "concat_all_videos":     "Concatenar todos los videos",
        "concat_checked_videos": "Concatenar los videos seleccionados",
        "crop_to_marker":        "Recoratar en la marca",
		"decrease_volume":       "Bajar volumen",
		"delete": 				 "Eliminar",
		"delete_file": 		 	 "Eliminar fichero",
        "delete_noise_filter":   "Eliminar filtro de ruido",
		"delete_recording": 	 "Eliminar grabación",
		"delete_text": 		     "Eliminar texto",
		"delete_video": 	     "Eliminar video",
        "disable_preview":       "Deshabilitar previsualización",
		"download_video": 		 "Descargar video",
        "enable_preview":        "Habilitar previsualización",
        "force_import":          "Forzar importar ahora",
        "import_audio":          "Importar grabaciones",
		"increase_volume":       "Subir volumen",
		"insert_current_frame":  "Insertar posición del marco actual",
        "jump_to_marker":        "Saltar a la marca",
		"move_down": 			 "Bajar",
		"move_up": 				 "Subir",
		"pause":                 "Pausar",
        "play":                  "Reproducir",
        "play_from_here":        "Reproducir desde aquí",
        "play_from_marker":      "Reproducir desde la marca",
        "play_video":            "Reproducir video en el navegador",
		"reload_page": 			 "Recargar página",
		"save":                  "Guardar",
		"save_text": 			 "Guardar texto",
		"set_marker":            "Establecer marca",
        "set_playback_rate":     "Establecer velocidad de reproducción",
		"sort":                  "Ordenar",
		"sort_ascending":        "Ascendente",
		"step_backward":         "Atrás",
		"step_forward":          "Adelante",
		"stop":                  "Parar",
        "upload_file":           "Subir fichero",
		"view_logs": 			 "Ver registros",
        "view_noise_filters":    "Ver filtros de ruido"
	},
    "app": {
    	"name": 			     "PiSleepTalk"
    },
    "import": {
        "description":           "La función de importación le permite importar cualquier archivo de audio que desee. Puede utilizar cualquier formato de audio. Los archivos no compatibles se omiten y se borran automáticamente. Los archivos Zip se extraen automáticamente. Si los archivos en el archivo zip tienen el mismo nombre que archivos existentes en la carpeta de importación, el archivo existente se sobrescribe sin pedir permiso.",
        "empty":                 "Su carpeta de importación está vacía.",
        "error_1":               "No se han subido ficheros.",
        "error_2":               "Se ha producido un error mientras se guardaba el ficher, por favor vuelva a intentarlo.",
        "force_text":            "La importación empezará automáticamente trasncurridos %s segundos tras subir el último fichero a la carpeta de importación.",
        "instant_approve":       "Usar los ficheros importados como grabaciones sin post-procesamiento.",
        "title":                 "Importar"
    },
    "logs": {
    	"description": 			 "Registros en bruto de node.js y otroso programas como ffmpeg o sox.",
    	"empty_text": 			 "No hay registros actualmente.",
    	"title": 				 "Registros"
    },
    "menu": {
        "clear_pending":         "Eliminar ficheros pendientes",
    	"help":                  "Ayuda",
    	"home": 				 "Inicio",
        "import":                "Importar",
        "overview":              "Información",
    	"status": 				 "Stado",
    	"videos": 				 "Videos"
    },
    "modal": {
    	"an_error_occurred":     "Se ha producido un error",
        "ban_noise": {
            "ban_noise":         "Marcar selección como ruido",
            "description":       "¿Está seguro que quiere marcar la selección como ruido?",
            "title":             "Marcar como ruido"
        },
    	"cancel":                "Cancelar",
    	"clear_logs": {
    		"clear_logs":  		 "Borrar registros",
    		"description":       "¿Está seguro que quiere borrar todos los ficheros de registro? Esta acción no se puede deshacer.",
    		"title":             "Borrar registros"
    	},
        "clear_pending": {
            "clear":             "Borrar ficheros no procesados",
            "description":       "¿Está seguro que quiere Borrar los ficheros no procesados? Esta acción no se puede deshacer.",
            "title":             "Borrar ficheros no procesados"
        },
        "clear_texts": {
            "clear":             "Borrar",
            "description":       "¿Estás seguro que quiere borrar todos los textos?",
            "title":             "Borrar textos"
        },
        "concat_videos": {
            "concat_videos":     "Concatenar videos",
            "description":       "¿Está seguro de concatenar los videos? La selección desaparecerá hasta que se renderize la pelicula final.",
            "title":             "Concatenar videos en una pelicula"
        },
    	"close":                 "Cerrar",
        "crop_to_marker": {
            "crop_to_marker":    "Recortar",
            "description":       "¿Está seguro de querer recoratar el fichero de audio en la zona marcada? Esta acción no se puede deshacer.",
            "title":             "Recortar en la marca"
        },
      	"decrease_volume": {
    		"decrease_volume":   "Bajar volumen",
    		"description":       "¿Está seguro de bajar el volumen de este archivo de audio en un 50%? Esto moverá el archivo fuera del alcance el hasta que el volumen se haya. El fichero de audio automáticamente volverá a aparecer en la página principal.",
    		"title":             "Bajar volumen"
    	},
    	"delete_file": {
    		"delete_file":   	 "Eliminar fichero",
    		"description":       "¿Está seguro de querer eliminar este fichero? Esta acción no se puede deshacer",
    		"title":             "Eliminar fichero"
    	},
        "force_import": {
            "description":       "¿Está seguro de querer forzar la importación ahora?",
            "force_import":      "Forzar importación",
            "title":             "Forzar importación"
        },
        "forced_import": {
            "description":       "El proceso de importación ha empezado correctamente. Por favor espere hasta que la carpeta de importación esté vacía.",
            "title":             "Importación forzada"
        },
       	"increase_volume": {
    		"description":       "Are you sure to increase the volume of this audio file by 50%? This will move the file away from your processing scope until the volume is increased. The audio file will automatically re-appear on the home page.",
    		"increase_volume":   "Subir volumen",
    		"title":             "Subir volumen"
    	},
        "noise_banned": {
            "description":       "The selected part is now recongized as noise and removed in further recordings.",
            "title":             "Noise saved"
        },
    	"ok": 			  	     "OK",
       	"preview_video": {
    		"title":             "Video preview"
    	},
        "remove_noise_filter": {
            "description":       "Are you sure to remove this noise filter? This can't be undone. Files, that were alredy modified using this noise filter will stay unchanged.",
            "remove_filter":     "Remove noise filter",
            "title":             "Remove noise filter"
        },
    	"remove_recording": {
    		"delete_recording":  "Delete recording",
    		"description":       "Are you sure to delete the whole recording? You can't undo this.",
    		"title":             "Remove recording"
    	},
    	"remove_video": {
    		"delete_video":  	 "Delete video",
    		"description":       "Are you sure to delete the whole video? You can't undo this.",
    		"title":             "Remove video"
    	},
        "set_frame": {
            "description":       "Please set a frame first before you try to play from it.",
            "whoops":            "Whoops, sorry!"
        },
    	"set_marker": {
    		"description":       "Please set a marker first before you try to jump to it.",
            "description_2":     "Please set a marker first before you try to jump to it.",
            "description_3":     "Please set a marker first before you try to crop the recording to it.",
            "description_4":     "Please set a marker first before you mark it as noise.",
            "whoops":            "Whoops, sorry!"
    	},
        "set_playback_rate": {
            "description":       "Enter a new playback rate here. The number \"1.0\" is default, a smaller number is slower, a bigger number is faster.",
            "set_playback_rate": "Set playback rate",
            "tip":               "Standard: 1.0, slower: < 1.0, faster: > 1.0",
            "title":             "Playback rate" 
        },
        "upload_file": {
            "description":       "Upload a audio or zip file, that contains audio files, to the import folder.",
            "title":             "Upload file",
            "upload_file":       "Upload file"
        }
    },
    "no_recordings": {
    	"description": 			 "Sorry, we got no unprocessed recordings for you right now. Please sleep on it on come back to this page later.",
    	"sub_description":       "You may check the status page to make sure everything is working correctly.",
    	"title": 				 "No new recordings"
    },
    "noise_filter": {
        "description":           "Here you see all noise filters you have created. Every single noise filter is appended to every new recording.",
        "empty_text":            "No noise filters are were yet. To add a filter, just set a marker on the start page and hit the \"create noise filter\" button.",
        "title":                 "Noise filters"
    },
    "overview": {
        "description":           "Here you see a list of all unprocessed recordings. You can use this list to delete files you don't want to process in future. This page is limited to %s entries due some performance issues. Hold the shift key while clicking the delete button to skip the security question.",
        "empty_text":            "No unprocessed recordings are available at the moment.",
        "title":                 "Overview"
    },
    "shortcuts": {
    	"description":   	 	 "You can use some shortcuts to save time. The following keys are supported right now:",
    	"keys": {
    		"1_9":  			 "1-9",
    		"1_9_description": 	 "Seek to part N of the audio file",
            "b":                 "B",
            "b_description":     "Flag selection as noise",
            "c":                 "C",
            "c_description":     "Crop to marker (Throw away the rest)",
            "d":                 "D",
            "d_description":     "Delete the current recording (Hold shift to disable the security question)",
            "dc":                "Double click",
            "dc_description":    "Jump to position and create text",
            "down":              "Arrow down",
    		"down_description":  "Skip forward 10 seconds",
            "esc":               "ESC",
            "esc_description":   "Stop",
            "f":                 "F",
            "f_description":     "Toggle preview mode",
            "j":                 "J",
            "j_description":     "Jump to marker (and stop playing)",
            "left":              "Arrow left",
            "left_description":  "Skip back 5 seconds",
            "p":                 "P",
            "p_description":     "Play from marker",
            "m":                 "M",
            "m_description":     "Set marker",
            "right":             "Arrow right",
    		"right_description": "Skip forward 5 seconds",
    		"space":     	 	 "Space",
    		"space_description": "Play/Pause",
            "up":                "Arrow up",
    		"up_description":    "Skip back 10 seconds"
    	},
    	"ok":            	 	 "OK",
    	"shortcuts":     	 	 "Shortcuts"
    },
    "state": {
        "not_recording":         "Not recording",
        "recording":             "Recording"
    },
    "status": {
    	"description": 		     "Review the status of your PiSleepTalk instance. Page generated: %s",
    	"disk_space": 			 "Disk space free %s of %s GB",
        "empty_text":            "There are no audio or video files available right now.",
        "pending_files":         "Pending files",
    	"title":  				 "Status"
    },
    "table": {
    	"actions": 			 	 "Actions",
        "concat":                "Concat",
    	"frame": 				 "Frame",
    	"length": 				 "Length",
    	"length_seconds_short":  "s",
        "listen":                "Listen",
    	"path": 				 "Path",
    	"size": 				 "Size",
    	"size_kb": 			     "KB",
    	"text":       			 "Text",
        "type":                  "Type"
    },
    "videos": {
        "description":           "Here you can see all rendered videos the system recorded and generated for you. The length of all scenes available in seconds is: %s.",
        "empty_text": 			 "No rendered videos are available at the moment.",
        "movie_title":           "Video title",
        "movie_title_tip":       "The movie title will appear for %s seconds on the start.",
        "sub_description":       "You can concat videos by selecting the checkbox and press the \"Concat videos\" button.",
        "title":                 "Videos",
        "type_full":             "Video",
        "type_part":             "Scene"
    }
}
