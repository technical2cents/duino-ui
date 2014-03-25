class PinModel:

    def __init__(self,id,pinName,state):
        # Self is the new object
        self.id = id
        self.pinName = pinName
        self.state = state

    def setState(self, newSate):
        self.state = newState

    def serialize(self):
        return{
               'id': self.id,
               'pinName': self.pinName,
               'state': str(self.state)
              }