from channels.projection import project_channel

class ChannelState:
    def __init__(self):
        self.current_block = None
        self.current_item = None
        self.block_progress = {}
        self.history = []

class Channel:
    def __init__(self, id, name, number, description, scheduler,):
        self.id = id
        self.name = name
        self.number = number
        self.description = description
        self.scheduler = scheduler
        self.state = ChannelState()

    def now_playing(self):
        return self.state.current_item
    
    def next_item(self):
        return self.scheduler.pick_next(self.state)
    
    def project_schedule(self, start_time, minutes):
        return project_channel(self.state, start_time, minutes)