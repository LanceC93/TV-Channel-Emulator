import copy

def project_channel(channel, anchor_time, minutes):
    timeline = []
    current_time = anchor_time
    simulated_state = copy(channel.state)

    while current_time < anchor_time + minutes:
        item = simulated_state.current_item
        end_time = current_time + item.remaining_time()

        timeline.append({
            "start": current_time,
            "end": end_time,
            "title": item.title,
            "block": simulated_state.current_block
        })

        simulated_state.current_item = channel.scheduler.pick_next(simulated_state)
        current_time = end_time
    
    return timeline