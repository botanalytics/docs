
# Conversations/Sessions

# What are conversations/sessions?

Conversations/Sessions refer to the overall interactions between users, human agents and or virtual-agent within a specified timeframe in a thread in a channel. They include the exchange of messages, queries, system events and responses that occur during a user’s engagement with the human agent and or the virtual-agent.

# How conversations/sessions are being calculated?

In the realm of conversational systems, the management of sessions plays a pivotal role in ensuring smooth and coherent interactions between users and chatbots. Sessions, in this context, represent distinct conversational episodes, each encapsulating a series of interactions within a defined timeframe. Understanding how sessions are calculated and maintained is integral to delivering a seamless user experience.

Sessions are initiated through interactions, whether instigated by the user or the chatbot itself, within channels like WhatsApp, Facebook Messenger, or integration channels like Rasa. These interactions are the building blocks of a "trade," which is a fundamental unit of conversation management. 

A "trade" can be understood as a discrete conversational context. These interactions can involve different participants, such as a user engaging with a chatbot or a user interacting with a customer service representative and the chatbot's assistance. Each of these scenarios constitutes a different trade.

We have three methods for calculating sessions/conversations:

### Method 1: Botanalytics Managed
This method involves automatically determining the initiation and conclusion of sessions based on user and bot interactions. Sessions are defined by periods of inactivity, typically lasting 900 seconds (15 minutes), and conversations within a trade are calculated based on this inactivity threshold.

### Method 2: Platform Managed
Certain platforms, such as Amazon Alexa, possess their session management capabilities. They send explicit signals to indicate when a session commences and concludes. These signals serve as invaluable markers for tracking and monitoring sessions within the conversational ecosystem.

### Method 3: User Managed
Users may choose to manage native sessions themselves. For instance, tags like "new session" or events like "conversation started" are used to indicate the beginning of a conversation.

To neatly wrap up sessions, an "conversation ended" event is employed. When this event is triggered, the system can group related messages and interactions, effectively marking the conclusion of a session.

In this case, they include a unique conversation ID when sending messages to us. A critical aspect of session management is the assignment of unique conversation IDs to each message exchanged. This practice allows the system to associate messages with their corresponding conversations accurately. By knowing which messages belong to a specific conversation, the system can maintain context and continuity within interactions.


