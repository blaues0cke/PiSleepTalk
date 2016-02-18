{
	"actions": {
		"add_text": 			 "Add text",
		"back":  				 "Back",
		"clear":                 "Clear",
		"clear_all_texts":       "Clear all texts",
		"clear_logs": 			 "Clear logs",
        "concat_all_videos":     "Concat all videos",
        "concat_checked_videos": "Concat selected videos",
		"decrease_volume":       "Decrease volume",
		"delete": 				 "Delete",
		"delete_file": 		 	 "Delete file",
		"delete_recording": 	 "Delete recording",
		"delete_text": 		     "Delete text",
		"delete_video": 	     "Delete video",
		"download_video": 		 "Download video",
        "force_import":          "Force import now",
		"increase_volume":       "Increase volume",
		"insert_current_frame":  "Insert current frame position",
        "jump_to_marker":        "Jump to marker",
		"move_down": 			 "Move down",
		"move_up": 				 "Move up",
		"play":                  "Play",
		"play_from_marker":      "Play from marker",
		"play_video": 			 "Play video in browser",
		"reload_page": 			 "Reload page",
		"save":                  "Save",
		"save_text": 			 "Save text",
		"set_marker":            "Set marker",
		"sort":                  "Sort",
		"sort_ascending":        "Sort ascending",
		"step_backward":         "Step backward",
		"step_forward":          "Step forward",
		"stop":                  "Stop",
        "upload_file":           "Upload file",
		"view_logs": 			 "View logs"
	},
    "app": {
    	"name": 			     "PiSleepTalk"
    },
    "import": {
        "description":           "Using the import feature allows you to import any audio file you want. You can use any audio format you want. Unsupported files are skipped and deleted automatically. Zip files are extracted automatically, too. If files in the zip file have the same name like existing files in the import folder, the existing file will be overwritten without asking.",
        "empty":                 "Your import folder is empty at the moment.",
        "force_text":            "The import will start automatically after %s seconds the last file was uploaded to the import folder.",
        "title":                 "Import"
    },
    "logs": {
    	"description": 			 "Raw log files of node.js and some used programs like ffmpeg or sox.",
    	"empty_text": 			 "No log data is available right now.",
    	"title": 				 "Logs"
    },
    "menu": {
    	"help":                  "Help",
    	"home": 				 "Home",
        "import":                "Import",
    	"status": 				 "Status",
    	"videos": 				 "Videos"

    },
    "modal": {
    	"an_error_occurred":     "An error occurred",
    	"cancel":                "Cancel",
    	"clear_logs": {
    		"clear_logs":  		 "Clear logs",
    		"description":       "Are you sure to clear all the log files? This can't be undone.",
    		"title":             "Clear logs"
    	},
        "clear_texts": {
            "clear":             "Clear",
            "description":       "Are you sure to delete all the text data?",
            "title":             "Clear text data"
        },
        "concat_videos": {
            "concat_videos":     "Concat videos",
            "description":       "Are you sure to concat the videos? The selected will disappear until the final movie is rendered.",
            "title":             "Concat videos to full movie"
        },
    	"close":                 "Close",
      	"decrease_volume": {
    		"decrease_volume":   "Decrease volume",
    		"description":       "Are you sure to decrease the volume of this audio file by 50%? This will move the file away from your processing scope until the volume is decreased. The audio file will automatically re-appear on the home page.",
    		"title":             "Decrease volume"
    	},
    	"delete_file": {
    		"delete_file":   	 "Delete file",
    		"description":       "Are you sure to delete this file? You can't undo this.",
    		"title":             "Delete file"
    	},
        "force_import": {
            "description":       "Are you sure, to force the import right now?",
            "force_import":      "Force import",
            "title":             "Force import"
        },
        "forced_import": {
            "description":       "The importer was started successfully, please wait until the import folder is empty.",
            "title":             "Import forced"
        },
       	"increase_volume": {
    		"description":       "Are you sure to increase the volume of this audio file by 50%? This will move the file away from your processing scope until the volume is increased. The audio file will automatically re-appear on the home page.",
    		"increase_volume":   "Increase volume",
    		"title":             "Increase volume"
    	},
    	"ok": 			  	     "OK",
       	"preview_video": {
    		"title":             "Video preview"
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
    	"set_marker": {
    		"description":       "Please set a marker first before you try to jump to it.",
            "description_2":     "Please set a marker first before you try to jump to it.",
            "whoops":            "Whoops, sorry!"
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
    "shortcuts": {
    	"description":   	 	 "You can use some shortcuts to save time. The following keys are supported right now:",
    	"keys": {
    		"1_9":  			 "1-9",
    		"1_9_description": 	 "Seek to part N of the audio file",
            "c":                 "C",
            "c_description":     "Crop to marker (Throw away the rest)",
            "dc":                "Double click",
            "dc_description":    "Jump to position and create text",
    		"down_description":  "Skip forward 10 seconds",
            "j":                 "J",
            "j_description":     "Jump to marker (and stop playing)",
    		"left_description":  "Skip back 5 seconds",
            "p":                 "P",
            "p_description":     "Play from marker",
            "m":                 "M",
            "m_description":     "Set marker",
    		"right_description": "Skip forward 5 seconds",
    		"space":     	 	 "Space",
    		"space_description": "Play/Pause",
    		"up_description":    "Skip back 10 seconds"
    	},
    	"ok":            	 	 "OK",
    	"shortcuts":     	 	 "Shortcuts"
    },
    "status": {
    	"description": 		     "Review the status of your PiSleepTalk instance. Page generated: %s",
    	"disk_space": 			 "Disk space free %s of %s GB",
    	"title":  				 "Status"
    },
    "table": {
    	"actions": 			 	 "Actions",
        "concat":                "Concat",
    	"frame": 				 "Frame",
    	"length": 				 "Length",
    	"length_seconds_short":  "s",
    	"path": 				 "Path",
    	"size": 				 "Size",
    	"size_kb": 			     "KB",
    	"text":       			 "Text",
        "type":                  "Type"
    },
    "videos": {
        "description":           "Here you can see all rendered videos the system recorded and generated for you.",
        "empty_text": 			 "No rendered videos are available at the moment.",
        "movie_title":           "Video title",
        "movie_title_tip":       "The movie title will appear for %s seconds on the start.",
        "sub_description":       "You can concat videos by selecting the checkbox and press the \"Concat videos\" button.",
        "title":                 "Videos",
        "type_full":             "Video",
        "type_part":             "Scene"
    }
}