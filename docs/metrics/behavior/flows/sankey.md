---
sidebar_position: 1
sidebar_label: Sankey
hide_title: true
---

## Flows Sankey

A flows Sankey graph for a chatbot, where nodes represent intents, chatbot actions, composite events, events, fallback, exit, escalation, and built-in events, is a complex visual representation that illustrates the flow of interactions within a chatbot's conversation space. This specialized Sankey graph offers a comprehensive view of how users interact with the chatbot, how intents and actions are handled, and how various events and built-in events influence the chatbot's behavior. 

Here's how to interpret and understand this intricate Sankey graph:

### Nodes

#### Intents

Intents represent the user's purpose or goal behind their input. Each intent reflects a specific user request or inquiry, such as "Book a Flight," "Check Account Balance," or "Order Pizza."

#### Chatbot Actions

Chatbot actions are the specific tasks or operations that the chatbot performs to fulfill user requests. These actions include actions like "Retrieve Flight Options," "Process Payment," or "Retrieve Weather Information."

#### Events/Composite Events

Events represent specific triggers or occurrences within the conversation that may lead to particular actions or transitions. Events can include user expressions and other contextual cues. For instance, "User Asks for Help," "User Expresses Frustration,".

Composite events are combinations of intents, events, and built-in events that represent complex user input or scenarios. These events may be part of a sentence or composition of other intents, events, and built-in events. For example, "Change Flight Date" could be a composite event comprising the intent "Modify Booking," the event "Change Date," and a built-in event like "Message Delivered."

#### Fallback

Fallback represents a state where the chatbot is unable to understand or determine the user's intent from their input. It typically triggers a default or general response seeking clarification or providing assistance.

#### Exit (User Leaves Conversation) 

Exit represents a point in the conversation where the user decides to leave the interaction due to non-completed tasks or other reasons. It indicates the end of the conversation without resolution.

#### Escalation

Escalation represents a transition where the conversation is passed on or escalated to a human agent or a higher level of support due to complexity, user request, or other specific criteria.

#### Built-In Events

Built-in events are system-generated events that are not directly initiated by the user but are part of the chatbot platform's functioning. Examples include "Message Delivered" (indicating the delivery of a chat message) and "Message Read" (indicating that the user has read a message).

### Flows

Flows in the Sankey graph represent the movement or transition between these different interaction nodes (intents, chatbot actions, composite events, events, built-in events, fallback, exit, escalation). They illustrate the logical progression of the conversation based on user inputs, system events, and chatbot responses.

### Width of Flow Lines

The width of the flow lines indicates the volume or frequency of transitions between nodes. Thicker lines may represent more transitions, while thinner lines suggest fewer.

### Colors and Labels

Colors and labels can be used to differentiate between the different types of nodes (intents, chatbot actions, composite events, events, built-in events, fallback, exit, escalation) and help in understanding the graph more easily.

### Interpreting a Flows Sankey Graph for a Chatbot

#### Complex Interaction Patterns

The graph helps identify complex interaction patterns where user inputs involve multiple intents, events, actions, and built-in events.

#### Fallback and Escalation Handling

The graph highlights points where the chatbot falls back to a default response, escalates the conversation to a human agent, or where system events influence these decisions.

#### Exit Points Analysis

The exit nodes reveal where users commonly leave the conversation due to non-completed tasks or other reasons. This information is valuable for improving user engagement and task completion.

#### Event-Driven Behavior

Understanding how events, including user-generated events and system events, trigger different actions or transitions in the chatbot can help in optimizing event-based responses for a more effective conversation.

#### User Interaction Insights

Analyzing the Sankey graph provides insights into how users interact with the chatbot, what intents or actions they most commonly engage with, and when they express specific emotions or requests.

### Use Cases for Flows Sankey Graph Analysis

#### Chatbot Performance Optimization

By understanding the complex flow of conversations and the influence of both user-generated and system events, developers can optimize the chatbot's understanding and responses.

#### Exit Point Management

Analysis of exit nodes helps in identifying reasons why users leave the conversation and allows for improvements to enhance user engagement and task completion.

#### Escalation Management

Analysis of the escalation nodes helps in fine-tuning the criteria and processes for when a conversation should be escalated to a human agent.

#### User Experience Enhancement

Insights from the graph help in optimizing the user experience by identifying areas where users may face challenges or frustrations, leading to improved conversation designs.

#### Training and Development

Developers and designers can use this analysis to train the chatbot to handle various composite events and system-driven scenarios more effectively.

In summary, a flows Sankey graph for a chatbot, considering nodes as intents, chatbot actions, composite events, events, fallback, exit, escalation, and built-in events, offers a comprehensive visual representation of complex chatbot interactions. It helps in understanding user engagement patterns, intents, actions, and the chatbot's handling of events, including those triggered by system notifications, ultimately leading to improvements in chatbot performance and user experience.