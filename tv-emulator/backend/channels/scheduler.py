class Scheduler:
    def pick_next(self, channel_state):
        if(channel_state.current_block == "adult_swim"):
            return pick_adult_swim_item(channel_state)
        
        if(channel_state.current_block == "anime_event"):
            return pick_anime(channel_state)