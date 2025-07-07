from ..main import db
import json

class Plan(db.Model):
    __tablename__ = 'plans'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    # Store price in the smallest currency unit (e.g., paise for INR) to avoid float issues
    price = db.Column(db.Integer, nullable=False, default=0) 
    lead_quota = db.Column(db.Integer, nullable=False)
    # Store features as a JSON formatted string
    features = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'lead_quota': self.lead_quota,
            'features': json.loads(self.features) if self.features else []
        }
