# System Design

## CRC Cards

**Class: User**
Parent class: N/A
Subclasses: N/A
Responsibilities:
- Track primary user details (name, email).
- Track other details (interests, followed groups, managed groups, subscribed events).
- Make database requests.
- Provide information to views.

Collaborators:
- DatabaseHandler
- ApiHandler

**Class: Group**
Parent class: N/A
Subclasses: N/A
Responsibilities:
- Track primary group details (name, owner, managers).
- Track other details (followers, default tags).
- Make database requests.
- Provide information to views.

Collaborators:
- DatabaseHandler
- ApiHandler

**Class: Event**
Parent class: N/A
Subclasses: N/A
Responsibilities:
- Track primary event details (name, time, location, group).
- Track other details (tags, privacy settings, pictures, comments, subscribers).
- Make database requests.
- Provide information to views.

Collaborators:
- DatabaseHandler
- ApiHandler

**Class: DatabaseHandler**
Parent class: N/A
Subclasses: N/A
Responsibilities:
- Receive database requests.
- Retrieve database values.
- Update database values.

Collaborators:
- User
- Group
- Event

**Class: ApiHandler**
Parent class: N/A
Subclasses: N/A
Responsibilities:
- Receive API requests.
- Relay request information to controllers.
- Route and update views.

Collaborators:
- User
- Group
- Event

## System-Environment Interaction

## System Architecture

## System Decomposition
