{
	"actions": {
		"add_text": 			 "Add text",
		"back":  				 "Back",
        "ban_noise":             "Mark selection as noise",
		"clear":                 "Clear",
		"clear_all_texts":       "Clear all texts",
		"clear_logs": 			 "Clear logs",
        "clear_pending":         "Delete pending files",
        "concat_all_videos":     "Concat all videos",
        "concat_checked_videos": "Concat selected videos",
        "crop_to_marker":        "Crop to marker",
		"decrease_volume":       "Decrease volume",
		"delete": 				 "Delete",
		"delete_file": 		 	 "Delete file",
        "delete_noise_filter":   "Delete noise filter",
		"delete_recording": 	 "Delete recording",
		"delete_text": 		     "Delete text",
		"delete_video": 	     "Delete video",
        "disable_preview":       "Disable preview mode",
		"download_video": 		 "Download video",
        "enable_preview":        "Enable preview mode",
        "force_import":          "Force import now",
        "import_audio":          "Import recordings",
		"increase_volume":       "Increase volume",
		"insert_current_frame":  "Insert current frame position",
        "jump_to_marker":        "Jump to marker",
		"move_down": 			 "Move down",
		"move_up": 				 "Move up",
		"pause":                 "Pause",
        "play":                  "Play",
        "play_from_here":        "Play from here",
        "play_from_marker":      "Play from marker",
        "play_video":            "Play video in browser",
		"reload_page": 			 "Reload page",
		"save":                  "Save",
		"save_text": 			 "Save text",
		"set_marker":            "Set marker",
        "set_playback_rate":     "Set playback rate",
		"sort":                  "Sort",
		"sort_ascending":        "Sort ascending",
		"step_backward":         "Step backward",
		"step_forward":          "Step forward",
		"stop":                  "Stop",
        "upload_file":           "Upload file",
		"view_logs": 			 "View logs",
        "view_noise_filters":    "View noise filters"
	},
    "app": {
    	"name": 			     "PiSleepTalk"
    },
    "import": {
        "description":           "Using the import feature allows you to import any audio file you want. You can use any audio format you want. Unsupported files are skipped and deleted automatically. Zip files are extracted automatically, too. If files in the zip file have the same name like existing files in the import folder, the existing file will be overwritten without asking.",
        "empty":                 "Your import folder is empty at the moment.",
        "error_1":               "No file was uploaded.",
        "error_2":               "An error occurred while saving your file, please try again later.",
        "force_text":            "The import will start automatically after %s seconds the last file was uploaded to the import folder.",
        "instant_approve":       "Use imported files as full recordings without postprocessing",
        "title":                 "Import"
    },
    "logs": {
    	"description": 			 "Raw log files of node.js and some used programs like ffmpeg or sox.",
    	"empty_text": 			 "No log data is available right now.",
    	"title": 				 "Logs"
    },
    "menu": {
        "clear_pending":         "Delete pending files",
    	"help":                  "Help",
    	"home": 				 "Home",
        "import":                "Import",
        "overview":              "Overview",
    	"status": 				 "Status",
    	"videos": 				 "Videos"
    },
    "modal": {
    	"an_error_occurred":     "An error occurred",
        "ban_noise": {
            "ban_noise":         "Mark selection as noise",
            "description":       "Are you sure you want to mark the selection as noise?",
            "title":             "Mark as noise"
        },
    	"cancel":                "Cancel",
    	"clear_logs": {
    		"clear_logs":  		 "Clear logs",
    		"description":       "Are you sure to clear all the log files? This can't be undone.",
    		"title":             "Clear logs"
    	},
        "clear_pending": {
            "clear":             "Clear unprocessed files",
            "description":       "Are you sure to clear all unprocessed files? This can't be undone.",
            "title":             "Clear unprocessed files"
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
        "crop_to_marker": {
            "crop_to_marker":    "Crop",
            "description":       "Are you sure to crop the audio file to the marked area? This can't be undone.",
            "title":             "Crop to marker"
        },
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
        "noise_banned": {
            "description":       "The selected part is now recongized as noise and removed in further recordings.",
            "title":             "Noise saved"
        },
    	"ok": 			  	     "OK",
       	"preview_video": {
    		"title":             "Video preview"
    	},
        "remove_noise_filter": {
            "description":       "Are you sure to remove this noise filter? This can't be undone. Files, that were already modified using this noise filter will stay unchanged.",
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
