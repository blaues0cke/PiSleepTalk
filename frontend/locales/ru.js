{
    "actions": {
        "add_text": "Добавить текст",
        "back": "Назад",
        "ban_noise": "Пометить выбор как шум",
        "clear": "Очистить",
        "clear_all_texts": "Очистить все тексты",
        "clear_logs": "Очистить логи",
        "clear_pending": "Удалить файлы в режиме ожидания",
        "concat_all_videos": "Соединить все видео",
        "concat_checked_videos": "Соединить выбранные видео",
        "crop_to_marker": "Обрезать до маркера",
        "decrease_volume": "Убавить звук",
        "delete": "Удалить",
        "delete_file": "Удалить файл",
        "delete_noise_filter": "Удалить фильтр шума",
        "delete_recording": "Удалить запись",
        "delete_text": "Удалить текст",
        "delete_video": "Удалить видео",
        "disable_preview": "Отключить режим предварительного просмотра",
        "download_video": "Скачать видео",
        "enable_preview": "Включить режим предварительного просмотра",
        "force_import": "Принудительное импортирование",
        "import_audio": "Импортировать записи",
        "increase_volume": "Прибавить звук",
        "insert_current_frame": "Вставить актуальную позицию кадра",
        "jump_to_marker": "Перейти к маркеру",
        "move_down": "Передвинуть вниз",
        "move_up": "Передвинуть вверх",
        "pause": "Пауза",
        "play": "Проигрывать",
        "play_from_here": "Проигрывать отсюда",
        "play_from_marker": "Проигрывать от маркера",
        "play_video": "Проигрывать видео в браузере",
        "reload_page": "Обновить страницу",
        "save": "Сохранить",
        "save_text": "Сохранить текст",
        "set_marker": "Поставить маркер",
        "set_playback_rate": "Установить скорость воспроизведения",
        "sort": "Сортировать",
        "sort_ascending": "Сортировать по возрастанию",
        "step_backward": "Шаг назад",
        "step_forward": "Шаг вперёд",
        "stop": "Стоп",
        "upload_file": "Загрузить файл",
        "view_logs": "Показать логи",
        "view_noise_filters": "Показать фильтры шума"
    },
    "app": {
        "name": "PiSleepTalk"
    },
    "import": {
        "description": "Использование функции импортирования позволит вам импортировать любой аудио файл в любом формате. Неподдерживаемые файлы будут автоматически пропущены и удалены. Zip файлы будут распакованы автоматически, если распакаванные файлы имеют то же название что и существующие в папке импортирования, они будут замещены без вопросов.",
        "empty": "Ваша папка импорт пуста на данный момент.",
        "error_1": "Файл не был загружен.",
        "error_2": "Произошла ошибка во время сохранения Вашего файла, пожалуйста попробуйте ещё раз позже.",
        "force_text": "Импорт начнётся автоматически через %s секунд после загрузки последнего файла в папку import.",
        "instant_approve": "Использовать импортированные файлы как цельные записи без постобработки.",
        "title": "Импорт"
    },
    "logs": {
        "description": "Raw log files of node.js and some used programs like ffmpeg or sox.",
        "empty_text": "No log data is available right now.",
        "title": "Logs"
    },
    "menu": {
        "clear_pending": "Delete pending files",
        "help": "Help",
        "home": "Home",
        "import": "Import",
        "overview": "Overview",
        "status": "Status",
        "videos": "Videos"
    },
    "modal": {
        "an_error_occurred": "An error occurred",
        "ban_noise": {
            "ban_noise": "Mark selection as noise",
            "description": "Are you sure you want to mark the selection as noise?",
            "title": "Mark as noise"
        },
        "cancel": "Cancel",
        "clear_logs": {
            "clear_logs": "Clear logs",
            "description": "Are you sure you want to clear all the log files? This can't be undone.",
            "title": "Clear logs"
        },
        "clear_pending": {
            "clear": "Clear unprocessed files",
            "description": "Are you sure you want to clear all unprocessed files? This can't be undone.",
            "title": "Clear unprocessed files"
        },
        "clear_texts": {
            "clear": "Clear",
            "description": "Are you sure you want to delete all the text data?",
            "title": "Clear text data"
        },
        "concat_videos": {
            "concat_videos": "Concat videos",
            "description": "Are you sure you want to concat the videos? The selected ones will disappear until the final movie is rendered.",
            "title": "Concat videos to full movie"
        },
        "close": "Close",
        "crop_to_marker": {
            "crop_to_marker": "Crop",
            "description": "Are you sure you want to crop the audio file to the marked area? This can't be undone.",
            "title": "Crop to marker"
        },
        "decrease_volume": {
            "decrease_volume": "Decrease volume",
            "description": "Are you sure you want to decrease the volume of this audio file by 50%? This will move the file away from your processing scope until the volume is decreased and it will automatically re-appear on the home page once it's completed.",
            "title": "Decrease volume"
        },
        "delete_file": {
            "delete_file": "Delete file",
            "description": "Are you sure you want to delete this file? This can't be undone.",
            "title": "Delete file"
        },
        "force_import": {
            "description": "Are you sure you want to force the import right now?",
            "force_import": "Force import",
            "title": "Force import"
        },
        "forced_import": {
            "description": "The importer was started successfully! Please wait until the import folder is empty.",
            "title": "Import forced"
        },
        "increase_volume": {
            "description": "Are you sure you want to increase the volume of this audio file by 50%? This will move the file away from your processing scope until the volume is increased and it will automatically re-appear on the home page once it's completed.",
            "increase_volume": "Increase volume",
            "title": "Increase volume"
        },
        "noise_banned": {
            "description": "The selected part is now recognized as noise and will be removed in further recordings.",
            "title": "Noise saved"
        },
        "ok": "OK",
        "preview_video": {
            "title": "Video preview"
        },
        "remove_noise_filter": {
            "description": "Are you sure you want to remove this noise filter? This can't be undone. Files that were already modified using this noise filter will remain unchanged.",
            "remove_filter": "Remove noise filter",
            "title": "Remove noise filter"
        },
        "remove_recording": {
            "delete_recording": "Delete recording",
            "description": "Are you sure you want to delete the whole recording? This can't be undone.",
            "title": "Remove recording"
        },
        "remove_video": {
            "delete_video": "Delete video",
            "description": "Are you sure you want to delete the whole video? This can't be undone.",
            "title": "Remove video"
        },
        "set_frame": {
            "description": "Please set a frame first before you try to play from it.",
            "whoops": "Whoops, sorry!"
        },
        "set_marker": {
            "description": "Please set a marker first before you try to jump to it.",
            "description_2": "Please set a marker first before you try to jump to it.",
            "description_3": "Please set a marker first before you try to crop the recording to it.",
            "description_4": "Please set a marker first before you mark it as noise.",
            "whoops": "Whoops, sorry!"
        },
        "set_playback_rate": {
            "description": "Enter a new playback rate here. The number \"1.0\" is default, a smaller number is slower, a bigger number is faster.",
            "set_playback_rate": "Set playback rate",
            "tip": "Standard: 1.0, slower: < 1.0, faster: > 1.0",
            "title": "Playback rate"
        },
        "upload_file": {
            "description": "Upload a audio or zip file containing audio files  to the import folder.",
            "title": "Upload file",
            "upload_file": "Upload file"
        }
    },
    "no_recordings": {
        "description": "Sorry, we got no unprocessed recordings for you right now. Please sleep on it and come back to this page later.",
        "sub_description": "You may check the status page to make sure everything is working correctly.",
        "title": "No new recordings"
    },
    "noise_filter": {
        "description": "Here you see all the noise filters you have created. Every single noise filter is appended to every new recording.",
        "empty_text": "No noise filters are here yet. To add a filter, just set a marker on the start page and hit the \"create noise filter\" button.",
        "title": "Noise filters"
    },
    "overview": {
        "description": "Here you see a list of all unprocessed recordings. You can use this list to delete files you don't want to process in future. This page is limited to %s entries due some performance issues. Hold the shift key while clicking the delete button to skip the security question.",
        "empty_text": "No unprocessed recordings are available at the moment.",
        "title": "Overview"
    },
    "shortcuts": {
        "description": "You can use some shortcuts to save time. The following keys are supported right now:",
        "keys": {
            "1_9": "1-9",
            "1_9_description": "Seek to part N of the audio file",
            "b": "B",
            "b_description": "Flag selection as noise",
            "c": "C",
            "c_description": "Crop to marker (throw away the rest)",
            "d": "D",
            "d_description": "Delete the current recording (hold shift to disable the security question)",
            "dc": "Double click",
            "dc_description": "Jump to position and create text",
            "down": "Arrow down",
            "down_description": "Skip forward 10 seconds",
            "esc": "ESC",
            "esc_description": "Stop",
            "f": "F",
            "f_description": "Toggle preview mode",
            "j": "J",
            "j_description": "Jump to marker (and stop playing)",
            "left": "Arrow left",
            "left_description": "Skip back 5 seconds",
            "p": "P",
            "p_description": "Play from marker",
            "m": "M",
            "m_description": "Set marker",
            "right": "Arrow right",
            "right_description": "Skip forward 5 seconds",
            "space": "Space",
            "space_description": "Play/Pause",
            "up": "Arrow up",
            "up_description": "Skip back 10 seconds"
        },
        "ok": "OK",
        "shortcuts": "Shortcuts"
    },
    "state": {
        "not_recording": "Not recording",
        "recording": "Recording"
    },
    "status": {
        "description": "Review the status of your PiSleepTalk instance. Page generated: %s",
        "disk_space": "Disk space free: %s of %s GB",
        "empty_text": "There are no audio or video files available right now.",
        "pending_files": "Pending files",
        "title": "Status"
    },
    "table": {
        "actions": "Actions",
        "concat": "Concat",
        "frame": "Frame",
        "length": "Length",
        "length_seconds_short": "s",
        "listen": "Listen",
        "path": "Path",
        "size": "Size",
        "size_kb": "KB",
        "text": "Text",
        "type": "Type"
    },
    "videos": {
        "description": "Here you can see all rendered videos the system recorded and generated for you. The length of all scenes available in seconds is: %s.",
        "empty_text": "No rendered videos are available at the moment.",
        "movie_title": "Video title",
        "movie_title_tip": "The movie title will appear for %s seconds on the start.",
        "sub_description": "You can concat videos by selecting the checkbox and pressing the \"Concat videos\" button.",
        "title": "Videos",
        "type_full": "Video",
        "type_part": "Scene"
    }
}
